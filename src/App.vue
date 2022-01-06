<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <i class="fab fa-500px"></i>-->

    <!-- <form1 />
      <form2 />-->

    <!--<b-navbar toggleable="lg" type="dark" variant="dark" id="navbar">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav> </b-navbar-nav>

         Right aligned nav items 
        <b-navbar-nav class="ml-auto" >
          <b-nav-item to="/form1">Design 1</b-nav-item>
          <b-nav-item to="/form2">Design 2</b-nav-item>
          <b-nav-item to="/signin">Sign In</b-nav-item>
          <b-nav-item to="/dashboard">Dashboard</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>-->

  <!--  <b-nav id="nav" align="right">
  
      <b-nav-item  active>
        <span class="nav-item">Home</span>
      </b-nav-item>
      <b-nav-item >
        <span class="nav-item">Home</span>
      </b-nav-item>
      <b-nav-item >
        <span class="nav-item">Home</span>
      </b-nav-item>
      <b-nav-item >
        <span class="nav-item">Home</span>
      </b-nav-item>
      
    </b-nav>-->

    <!--<ul>
      <li>
        <router-link to="/form1">Design 1</router-link>
      </li>

      <li>
        <router-link to="/form2">Design 2</router-link>
      </li>
    </ul>-->

     <VueSidebarMenuAkahon />


    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
//import form1 from './components/form1.vue'
//import form2 from './components/form2.vue'
//import user from './components/user.vue'
 import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
export default {
  name: "App",
  components: {
    //HelloWorld,
    // form1,
    //form2,
    //  user,
  VueSidebarMenuAkahon,

  },
  
    data() {
      return {}
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

#navbar {
  margin-bottom: 30px;
}

#nav{
  background-color: #282828;
}
.nav-item{
  color:white;
}
</style>
