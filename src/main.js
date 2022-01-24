import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import form1 from './components/form1'
import form2 from './components/form2'
import user from './components/user'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import signin from './components/signin'
import dashboard from './components/dashboard'
import profile from './components/profile'
import edit_profile from './components/edit_profile'
import change_password from './components/change_password'
import register from './components/register'
import book from './components/book';
import instagram from './components/instagram';


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


import VueSession from 'vue-session'
Vue.use(VueSession)

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios);

// global registration in the entry file, e.g. main.js
import VueEasyLightbox from 'vue-easy-lightbox'

// Method 1. via Vue.use
Vue.use(VueEasyLightbox)




function guardMyroute(to, from, next)
{
    var isAuthenticated= false;
    //var session = this.$session.get('email');

    if(localStorage.getItem('email'))
      isAuthenticated = true;
    else
        isAuthenticated= false;

    if(isAuthenticated) 
    {
      next(); // allow to enter route
    } 
    else
    {
      next('/'); // go to '/login';
    }
}

/*

function check(){

      if (localStorage.getItem('email')) {
        router.replace('/');
      }
      
}*/






const routes =[
  
  {path:'/form2',component:form2},
  {path:'/user/:id',component:user},
 
  //{path:'/home',component:Home},
  {path:'/dashboard',beforeEnter : guardMyroute,component:dashboard},
  {path:'/profile',beforeEnter : guardMyroute,component:profile},
  
  {path:'/',component:signin},
    
  {path:'/home',component:Home,},
  {path:'/register',component:register},
  {path:'/book',component:book},
  {path:'/instagram',component:instagram},
  {path:'/edit-profile',beforeEnter : guardMyroute,component:edit_profile},
  {path:'/change-password',beforeEnter : guardMyroute,component:change_password},
  {path:'*',component:PageNotFound},
]



const router = new VueRouter({
  routes
});


/*
routes.beforeEnter((to,from, next) => {
  //const authenticated = this.$session.get('email');

  if (this.$session.get('email')) {
   
    next({ 
      path: '/dashboard', 
      
    })
   
  }
  else {

    next({ 
      path: '/form1', 
      
    })
  
    //return next();
    
  }

});*/






Vue.config.productionTip = false


new Vue({
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
