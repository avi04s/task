import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import form1 from './components/form1'
import form2 from './components/form2'

Vue.use(VueRouter);
const routes =[
  {path:'/form1',component:form1},
  {path:'/form2',component:form2}
]

const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
