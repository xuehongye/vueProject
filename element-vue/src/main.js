// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Dialog,Button, Select, Row, Col,
    Container,Header, Aside, Main, Footer,
    Menu, Submenu, MenuItem, MenuItemGroup,
    Dropdown, DropdownMenu, DropdownItem,
    Table, TableColumn,
} from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import App from './App'
import router from './router'

// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.use(Button)
Vue.use(Select)
Vue.use(Dialog)
Vue.use(Row)
Vue.use(Col)

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Table)
Vue.use(TableColumn)

Vue.use(locale)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
