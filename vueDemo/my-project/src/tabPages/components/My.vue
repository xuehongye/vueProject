<template>
    <div class="container">
        <headerCon v-bind:headerCon="headerTit"></headerCon>
        <div class="content">
            <h3>欢迎来到我的个人中心</h3>
            <router-link to="/city">点击去到城市选择</router-link>
        </div>
        <tab></tab>

    </div>
</template>

<script>
    import Tab from "@/common/components/Tab";
    import Header from "@/common/components/Header";
    // import City from "@/demo/City";
    import "@/common/style/common.css";

    export default {
        name: "My",
        data(){
            return{
                headerTit:"个人中心",
            }
        },
        components: {
            'headerCon': Header,
            // 'city':City,
            'tab':Tab
        },
    }
</script>

<style scoped>

</style>