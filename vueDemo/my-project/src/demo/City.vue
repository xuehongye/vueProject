<template>
    <div class="content">
        <headerCon v-bind:headerCon="headerTit" leftBtnFlag="true"></headerCon>
        <div class="city">
            <select v-model="prov">
                <option v-for="option in arr" :value="option.name">
                    {{ option.name }}
                </option>
            </select>
            <select v-model="city">
                <option v-for="option in cityArr" :value="option.name">
                    {{ option.name }}
                </option>
            </select>
            <select v-model="district" v-if="district">
                <option v-for="option in districtArr" :value="option.name">
                    {{ option.name }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
    import "@/common/style/common.css";
    import Header from "@/common/components/Header";
    import arrAll from "./address";

    export default {
        name: "City",
        data() {
            return {
                headerTit:"三级联动",
                arr: arrAll,
                prov: '北京',
                city: '北京',
                district: '东城区',
                cityArr: [],
                districtArr: []
            }
        },
        components: {
            'headerCon': Header,
        },
        methods: {
            updateCity: function () {
                for (var i in this.arr) {
                    var obj = this.arr[i];
                    if (obj.name === this.prov) {
                        this.cityArr = obj.sub;
                        break;
                    }
                }
                this.city = this.cityArr[1].name;
            },
            updateDistrict: function () {
                for (var i in this.cityArr) {
                    var obj = this.cityArr[i];
                    if (obj.name === this.city) {
                        this.districtArr = obj.sub;
                        break;
                    }
                }
                if (this.districtArr && this.districtArr.length > 0 && this.districtArr[1].name) {
                    this.district = this.districtArr[1].name;
                } else {
                    this.district = '';
                }
            },
        },
        beforeMount: function () {
            this.updateCity();
            this.updateDistrict();
        },
        watch: {
            prov: function () {
                this.updateCity();
                this.updateDistrict();
            },
            city: function () {
                this.updateDistrict();
            }
        },
    }
</script>

<style scoped>
    select {
        border: 1px solid #ccc;
        outline: none;
        background: none;
        height: 25px;
        width: 100px;
        border-radius: 5px;
    }
    .city{
        margin-top:20px;
    }
</style>