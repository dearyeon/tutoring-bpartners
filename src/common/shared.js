import Vue from 'vue'

const shared = {
    bast: null,
    sortKey: '',
    items: [],
    setToken(token) {
        sessionStorage.setItem('bat', token)
        this.bast = token
    },
    getToken() {
        return this.bast ? this.bast : sessionStorage.getItem('bat')
    },
    setAccount(account) {
        sessionStorage.setItem('account', JSON.stringify(account))
    },
    getAccount() {
        return JSON.parse(sessionStorage.getItem('account'))
    },
    isLoggedIn() {
        return this.getToken()==null ? false : true;
    },
    nf(number) {
        return new Intl.NumberFormat('ko-KR').format(number)
    },
    getSiteImgUrl(imgFileNm) {
        if(!imgFileNm) imgFileNm = 'default.png'
        return 'https://cdn.tutoring.co.kr/uploads/b2b/site/'+imgFileNm
    },
    getSiteImgThumbnailUrl(imgFileNm) {
        if(!imgFileNm) imgFileNm = 'default.png'
        return 'https://cdn.tutoring.co.kr/uploads/b2b/site/tmb/'+imgFileNm
    },
    sortBy (items, sortKey1, sortKey2) {
        if(this.items !== items) this.sortKey = '', this.items=items
        if(sortKey2) {
            (this.sortKey === sortKey1) ? items.reverse() : (items.sort(function (a, b) {
                return !a[sortKey1] ? -1 : !b[sortKey1] ? 1 : a[sortKey1][sortKey2] < b[sortKey1][sortKey2] ? -1 : a[sortKey1][sortKey2] > b[sortKey1][sortKey2] ? 1 : 0
            }))
        } else {
            (this.sortKey === sortKey1) ? items.reverse() : (items.sort(function (a, b) {
                return !a[sortKey1] ? -1 : !b[sortKey1] ? 1 : a[sortKey1] < b[sortKey1] ? -1 : a[sortKey1] > b[sortKey1] ? 1 : 0
            }))
        }
        this.sortKey = sortKey1
    },
    logout(msg) {
        shared.setToken(null)
        Vue.swal(msg).then(()=>{
            location = '/'
        })
    }
}

Object.defineProperty(Vue.prototype,'$shared', {
    get() { return shared }
})

export default shared;
