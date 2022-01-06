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

Vue.use(VueRouter);
const routes =[
  {path:'/form1',component:form1},
  {path:'/form2',component:form2},
  {path:'/user/:id',component:user},
  {path:'/',component:Home},
  {path:'/signin',component:signin},
  {path:'*',component:PageNotFound}

]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
