<template>
    <div class="container">
        <headerCon v-bind:headerCon="headerTit"></headerCon>
        <div class="content">
            <ul class="tabTop">
                <li v-for="(item,index) in lists" v-on:click="tabBtn(index)" :class="currentId===index?'active':''">
                    {{item.name}}
                </li>
            </ul>
            <ul class="tabBottom">
                <li v-for="(item,index) in lists" v-on:click="tabBtn(index)" :class="currentId===index?'active':''">
                    {{item.con}}
                </li>
            </ul>
        </div>
        <tab></tab>
    </div>
</template>

<script>
    import Tab from "@/common/components/Tab";
    import Header from "@/common/components/Header";
    import "@/common/style/common.css"
    export default {
        name: "Todo",
        data() {
            return {
                headerTit:"新闻",
                lists: [
                    {name: "体育新闻", con: "乒坛藏獒张继科与景甜的恋情曝光"},
                    {name: "娱乐新闻", con: "李晨和范冰冰520秀恩爱"},
                    {name: "社会新闻", con: "单亲妈妈打死儿子并称自己很无辜"},
                ],
                currentId: 0,
            }
        },
        methods: {
            tabBtn: function (index) {
                this.currentId = index;
            },
        },
        components: {
            'headerCon': Header,
            'tab':Tab,
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .todo {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .tabTop {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .tabTop li {
        width: 33.3%;
        line-height: 50px;
        font-size: 20px;
        text-align: center;
        color: #ccc;
    }

    .tabTop li.active {
        color: #000;
        border-bottom: 1px solid #ccc;
    }

    .tabBottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        font-size: 20px;
    }

    .tabBottom li {
        display: none;
    }

    .tabBottom li.active {
        display: block;
    }
</style>