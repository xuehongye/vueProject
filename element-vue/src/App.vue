<template>
    <div id="app">
        <!--弹层显示-->
        <div class="content">
            <h4>弹层显示</h4>
            <el-button @click="visible = true" style="margin-bottom: 10px">Button</el-button>
            <el-dialog :visible.sync="visible" title="Hello world">
                <p>Try Element</p>
            </el-dialog>
        </div>
<!--内置过渡动画-->
        <!--fade 淡入淡出-->
        <div class="content">
            <h4>fade 淡入淡出</h4>
            <el-button @click="show = !show">Click Me</el-button>
            <div style="display: flex; margin-top: 20px; height: 100px;">
                <transition name="el-fade-in-linear">
                    <div v-show="show" class="transition-box">.el-fade-in-linear</div>
                </transition>
                <transition name="el-fade-in">
                    <div v-show="show" class="transition-box">.el-fade-in</div>
                </transition>
            </div>
        </div>

        <!--zoom 缩放-->
        <div class="content">
            <h4>zoom 缩放</h4>
            <el-button @click="show2 = !show2">Click Me</el-button>
            <div style="display: flex; margin-top: 20px; height: 100px;">
                <transition name="el-zoom-in-center">
                    <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
                </transition>

                <transition name="el-zoom-in-top">
                    <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
                </transition>

                <transition name="el-zoom-in-bottom">
                    <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
                </transition>
            </div>
        </div>

        <!--collapse 展开折叠-->
        <div class="content">
            <h4>collapse 展开折叠</h4>
            <el-button @click="show3 = !show3">Click Me</el-button>
            <div style="margin-top: 20px; height: 200px;">
                <transition name="el-collapse-transition">
                    <div v-show="show3">
                        <div class="transition-box">el-collapse-transition</div>
                        <div class="transition-box">el-collapse-transition</div>
                    </div>
                </transition>
            </div>
        </div>

<!--¶ Layout 布局-->
        <!--基础布局-->
        <div class="content">
            <h4>基础布局</h4>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
            </el-row>
        </div>

        <!--分栏间隔-->
        <div class="content">
            <h4>¶ 分栏间隔</h4>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
        </div>

        <!--混合布局-->
        <div class="content">
            <h4>混合布局</h4>
            <el-row :gutter="20">
                <el-col :span="16">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
        </div>

        <!--¶ 分栏偏移-->
        <div class="content">
            <h4>分栏偏移</h4>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6" :offset="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6" :offset="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6" :offset="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12" :offset="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
        </div>

        <!--¶ 对齐方式-->
        <div class="content">
            <h4>¶ 对齐方式</h4>
            <el-row type="flex" class="row-bg">
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="end">
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
        </div>

        <!--¶ 响应式布局-->
        <div class="content">
            <h4>¶ 响应式布局</h4>
            <el-row :gutter="10">
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                    <div class="grid-content bg-purple"></div>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <div class="grid-content bg-purple-light"></div>
                </el-col>
            </el-row>
        </div>

<!--¶ Container 布局容器-->
        <div class="content">
            <el-container style="height: 500px; border: 1px solid #eee">
                <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                    <el-menu :default-openeds="['1', '3']">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>导航一</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="2-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="3-1">选项1</el-menu-item>
                                <el-menu-item index="3-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="3-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="3-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-menu>
                </el-aside>

                <el-container>
                    <el-header style="text-align: right; font-size: 12px">
                        <el-dropdown>
                            <i class="el-icon-setting" style="margin-right: 15px"></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>查看</el-dropdown-item>
                                <el-dropdown-item>新增</el-dropdown-item>
                                <el-dropdown-item>删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <span>王小虎</span>
                    </el-header>

                    <el-main>
                        <el-table :data="tableData">
                            <el-table-column prop="date" label="日期" width="140">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名" width="120">
                            </el-table-column>
                            <el-table-column prop="address" label="地址">
                            </el-table-column>
                        </el-table>
                    </el-main>
                </el-container>
            </el-container>
        </div>

        <div class="content">
            <h4>普通布局1</h4>
            <el-container>
                <el-header>Header</el-header>
                <el-container>
                    <el-aside class="el-aside1" width="200px">Aside</el-aside>
                    <el-main class="el-main">Main</el-main>
                </el-container>
                <el-footer>Footer</el-footer>
            </el-container>
        </div>

        <div class="content">
            <h4>普通布局2</h4>
            <el-container>
                <el-aside class="el-aside1" width="200px">Aside</el-aside>
                <el-container>
                    <el-header>Header</el-header>
                    <el-main class="el-main">Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script>
    const item = {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
};

    export default {
        name: 'App',
        data: function () {
            return {
                visible: false,
                show: true,
                show2: true,
                show3: true,
                tableData: Array(20).fill(item)
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #409EFF;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }

    .el-row {
        margin-bottom: 20px;
    }

    .el-row :last-child {
        margin-bottom: 0;
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
    .el-aside {
        color: #333;
    }
    .el-aside1 {
         background-color: #D3DCE6;
         color: #333;
         text-align: center;
         line-height: 200px;
     }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
</style>
