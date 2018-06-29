<template>
    <div class="header">
        <img src="../image/buton_fanhui.png" alt="" @click="leftBtn" v-if="leftBtnFlag">
        <p class="title">{{headerCon}}</p>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            headerCon: {
                default: '首页'
            },
            leftBtnFlag: {
                default: false,
            }
        },
        data() {
            return {}
        }
        ,
        methods: {
            leftBtn: function () {
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
    .header {
        width: 100%;
        height: 50px;
        background: #fff;
        position: relative;
    }

    .title {
        font-size: 22px;
        color: #000;
        text-align: center;
        line-height: 50px;
    }

    img {
        width: 13px;
        height: 20px;
        position: absolute;
        left: 12px;
        top: 0;
        bottom: 0;
        margin: auto;
    }
</style>