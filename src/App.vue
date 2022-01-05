<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <i class="fab fa-500px"></i>-->

     <!-- <form1 />
      <form2 />-->
      <ul>
        <li>
          <router-link to="/form1">Design 1</router-link>
        </li>

        <li>
          <router-link to="/form2">Design 2</router-link>
        </li>


      </ul>
      <router-view></router-view>

  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
//import form1 from './components/form1.vue'
//import form2 from './components/form2.vue'

export default {
  name: "App",
  components: {
    //HelloWorld,
   // form1,
    //form2,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
