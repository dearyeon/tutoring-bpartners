<template>
<div>
    <select style="height:30px;font-size:14px;" @input="updateValue($event.target.value)">
        <option value="none" selected disabled hidden>{{batches[0].b_no}}회차 ({{moment(batches[0].fr_dt).format('YY.MM.DD')}}-{{moment(batches[0].to_dt).format('MM.DD')}})</option>
        <option v-for="(batch,i) in batches" :value="i" :key="batch.id">{{batch.b_no}}회차 ({{moment(batch.fr_dt).format('YY.MM.DD')}}-{{moment(batch.to_dt).format('MM.DD')}})</option>
    </select>
</div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            moment: moment
        }
    },
    props:  {
        batches: {
            type: Array,
            required: true,
        },
    },
    methods: {
        updateValue: function (value) {
            this.$emit('change', value);
        }
    }
}
</script>