// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store'
import i18n from './lang'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icon/iconfont.css'

import '@/styles/myElement.css'
import '@/styles/index.css'
import '@/styles/media.css'
import '@/styles/theme.scss'

Vue.use(VueAxios, Axios)

import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  MenuItem,
  Col,
  Row,
  Submenu,
  MenuItemGroup,
  RadioGroup,
  RadioButton,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tooltip,
  Input,
  Table,
  TableColumn,
  MessageBox,
  FormItem,
  Select,
  Option,
  Dialog,
  Form
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tooltip)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Form)

Vue.component(MessageBox.name, MessageBox)
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$msgbox = MessageBox


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
