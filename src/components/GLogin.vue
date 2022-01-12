<template>
  <div class="">
    
     
      

       <button @click="myFunction()">Google Login</button>
  </div>
</template>

<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios,axios);

export default {
  data() {
    return {
        link:undefined,
    };
  },
  mounted(e){
      Vue.axios.post('http://localhost/PHP/google-login/login.php').then(resp=>{
          this.link = resp.data;
          //console.warn("Data",this.link);
          e.preventDefault();
      });
  },
  components: {},
  methods: {
        myFunction: function () {   
          window.open(this.link, "_blank");    
      }
  },
};
</script>

<style>
</style>