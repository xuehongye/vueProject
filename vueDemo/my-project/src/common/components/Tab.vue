<template>
    <div class="tab">
        <router-link class="tab-child" v-for="item in tabs" :to="item.href">{{item.name}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "Tab",
        data() {
            return {
                tabs: [
                    {name: "首页", href: "/"},
                    {name: "商场", href: "/Shop"},
                    {name: "新闻", href: "/Todo"},
                    {name: "个人", href: "/my"},
                ]
            }
        }
    }
</script>

<style scoped>
    .tab {
        background: #fff;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .tab .tab-child{
        width: 25%;
        height: 50px;
        font-size: 20px;
        color: #000;
        line-height: 50px;
        text-align: center;
        text-decoration: none;
    }
    .tab .tab-child.router-link-exact-active{
        color:red;
    }
</style>