<template>
  <div>
    <button @click="myFunction()">Google Login</button>
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);

export default {
  name: "googleLogin",

  mounted(e) {
    Vue.axios
      .post("http://localhost/VUE%20JS/task/api/login.php")
      .then((resp) => {
        this.link = resp.data;
        //console.warn("Data",this.link);
        e.preventDefault();
      });
  },

  methods: {
    myFunction: function () {
      window.open(this.link, "_blank");
    },

    onUserLoggedIn(user) {
      var id_token = user.getAuthResponse().id_token;

      axios
        .post(
          "/api",
          {
            action: "googleSignin",
            token: id_token,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          console.log("response", response);
        });
    },
  },
};
</script>
