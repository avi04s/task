import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import form1 from './components/form1'
import form2 from './components/form2'
import user from './components/user'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import signin from './components/signin'
import dashboard from './components/dashboard'
import GLogin from './components/GLogin'
import googleLogin from './components/googleLogin'


import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// main.js
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import VueBootstrapToasts from "vue-bootstrap-toasts";
Vue.use(VueBootstrapToasts);

import vuetify from './plugins/vuetify'
import Vuetify from "vuetify";

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.use(Vuetify);

Vue.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon);


library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueSidebarMenu)


Vue.use(VueRouter);



import GoogleAuth from 'vue-google-login'

const gauthOption = {
  clientId: 'xxxxxxxxxxx.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)




const routes =[
  {path:'/form1',component:form1},
  {path:'/form2',component:form2},
  {path:'/user/:id',component:user},
  {path:'/home',component:Home},
  {path:'/sigin',component:signin},
  {path:'/dashboard',component:dashboard},
  {path:'/',component:googleLogin},
  {path:'/glogin',component:GLogin},
  {path:'*',component:PageNotFound},
  

]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false


new Vue({
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
