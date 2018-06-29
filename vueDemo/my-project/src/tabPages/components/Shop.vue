<template>
    <div class="container">
        <headerCon v-bind:headerCon="headerTit"></headerCon>
        <div class="content">
            <h3>欢迎来到商城</h3>
        </div>
        <tab></tab>
    </div>
</template>
<script>
    import Tab from "@/common/components/Tab";
    import Header from "@/common/components/Header";
    import "@/common/style/common.css"
    export default {
        name: 'Shop',
        data(){
            return{
                headerTit:"商城",
            }
        },
        components: {
            'headerCon': Header,
            'tab':Tab,
        }
    }
</script>