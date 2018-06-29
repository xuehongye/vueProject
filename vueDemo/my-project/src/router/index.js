import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/tabPages/components/Shop'
import Home from "@/tabPages/components/Home"
import Todo from "@/tabPages/components/Todo"
import My from "@/tabPages/components/My"
import City from "@/demo/City.vue"

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component:Home,
        },
        {
            path: '/shop',
            name: 'Shop',
            component: Shop,
        },
        {
            path: '/todo',
            name: 'Todo',
            component: Todo,
        },
        {
            path: '/my',
            name: 'My',
            component: My,
        },
        {
            path: '/city',
            name: 'City',
            component: City,
        },
    ]
})
