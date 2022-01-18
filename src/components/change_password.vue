<template>
  <div>
    <Toasts
      :show-progress="true"
      :rtl="false"
      :max-messages="5"
      :time-out="3000"
      :closeable="true"
    ></Toasts>

    <navbar></navbar>

    <b-container class="bv-example-row" style="margin-top: 180px">
      <b-row>
        <b-col></b-col>
        <b-col sm="12" lg="4" align="center">
          <h4>Change Password</h4>
          <hr />
          <h5></h5>
        </b-col>
        <b-col></b-col>
      </b-row>

      <b-row id="inputRow">
        <b-col></b-col>
        <b-col sm="12" lg="4">
          <form @submit="login">
            <b-form-input
              class="LoginInput"
              size="lg"
              type="email"
              placeholder="email"
              v-model="form.email"
            >
            </b-form-input>
            <b-input-group class="mt-2 mb-2">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><i class="fas fa-lock"></i
                ></span>
              </b-input-group-prepend>
              <b-form-input
                class="LoginInput"
                size="lg"
                type="password"
                placeholder="Current Password"
                v-model="form.current_password"
              >
              </b-form-input>
            </b-input-group>

            <b-input-group class="mt-2">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><i class="fas fa-lock"></i
                ></span>
              </b-input-group-prepend>
              <b-form-input
                class="LoginInput"
                size="lg"
                type="password"
                placeholder="Create New Password"
                v-model="form.password"
                @input="passwordCheck"
              >
              </b-form-input>

              <b-input-group-prepend v-if="check">
                <span class="input-group-text">
                  <i class="fas fa-times text-danger"></i>
                </span>
              </b-input-group-prepend>
              <b-input-group-prepend v-if="correct">
                <span class="input-group-text">
                  <i class="fas fa-check text-success"></i>
                </span>
              </b-input-group-prepend>
            </b-input-group>
            <span v-if="check" class="text-danger"
              >Note: Password must be 7 character, One Capital letter, lowercase
              letter, number and a special character
            </span>

            <b-input-group class="mt-2 mb-2">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><i class="fas fa-lock"></i
                ></span>
              </b-input-group-prepend>
              <b-form-input
                class="LoginInput"
                size="lg"
                type="password"
                placeholder="Repeat New Password"
                v-model="form.confirm_password"
              >
              </b-form-input>
            </b-input-group>
            <b-button
              type="submit"
              class="mb-2"
              block
              variant="primary"
              style="color: white"
              >Update Password</b-button
            >
          </form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "change_password",
  components: {
    navbar,
  },

  data() {
    return {
      error: [],
      form: {
        email: this.$session.get("email"),
        current_password: null,
        password: null,
        confirm_password: null,
      },
      check: false,
      correct: false,
    };
  },

  methods: {
    passwordCheck() {
      var re = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

      if (
        this.form.password.length > 7 &&
        /[a-z]/.test(this.form.password) &&
        /\d/.test(this.form.password) &&
        /[A-Z]/.test(this.form.password) &&
        re.test(this.form.password)
      ) {
        this.correct = true;
        this.check = false;
      } else {
        this.correct = false;
        this.check = true;
      }
    },
    login(e) {
      this.error = [];
      if (!this.form.current_password) {
        //this.error.push("Username is required");
        this.$toast.error("Current Password is required");
      } 

      else if (!this.form.password) {
        //this.error.push("passowrd is required");
        this.$toast.error("passowrd is required");
      } else if (!this.form.confirm_password) {
        // this.error.push("Confirm Passowrd is required");
        this.$toast.error("Confirm Passowrd is required");
      } else if (this.form.password != this.form.confirm_password) {
        //this.error.push("password and confirm password did not matched");
        this.$toast.error("password and confirm password did not matched");
      } else if (this.check == true) {
        this.$toast.error(
          "Password must be 7 character, One Capital letter, lowercase letter, number and a special character"
        );
      } else {
        this.axios
          .post(
            "https://www.alegralabs.com/abhijit/api/change_password.php",
            this.form
          )
          .then((response) => {
            //this.$router.push('/home');
            //  console.warn("response",response);
            console.warn("response.success", response.data);
            if (response.data.success == "1") {
                this.$toast.error(response.data.message);
            } else if (response.data.success == "0") {
              this.$toast.error(response.data.message);
            }
          });
      }

      console.warn("Hello");
      e.preventDefault();
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
#inputRow {
  margin-top: 20px;
}
#facebook {
  background-color: #3b5998;
}

#twitter {
  background-color: #1da1f2;
}
</style>

