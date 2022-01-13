<template>
  <div>

   

    <Toasts
      :show-progress="true"
      :rtl="false"
      :max-messages="5"
      :time-out="3000"
      :closeable="true"
    ></Toasts>

    <b-container class="bv-example-row" style="margin-top: 20px">
      <b-row>
        <b-col></b-col>
        <b-col sm="12" lg="4">
          <h4>Create Account</h4>
          <h5>Get Startted with your free account</h5>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col sm="12" lg="4">
          <b-button id="twitter" block variant="primary">
            <span style="color: white"
              ><i class="fab fa-twitter"></i> Login Via Twitter</span
            >
          </b-button>
          <b-button id="facebook" block variant="primary">
            <span style="color: white"
              ><i class="fab fa-facebook-f"></i> Login Via facebook</span
            >
          </b-button>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col></b-col>
        <b-col sm="12" align="center">
          <h6>-------------------OR----------------</h6>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <span v-if="error.length">
            <h3>Please correct the following errors</h3>

            <h6 v-for="e in error" v-bind:key="e.id" style="color: red">
              {{ e }}
            </h6>
          </span>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row id="inputRow">
        <b-col></b-col>
        <b-col sm="12" lg="4">
          <form @submit="login">
            <b-input-group>
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><i class="fa fa-user fa-lg"></i
                ></span>
              </b-input-group-prepend>
              <b-form-input
                class="LoginInput"
                size="lg"
                placeholder="Full Name"
                v-model="form.name"
              >
              </b-form-input>
            </b-input-group>

            <b-input-group class="mt-2">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><i class="fas fa-envelope"></i
                ></span>
              </b-input-group-prepend>
              <b-form-input
                class="LoginInput"
                size="lg"
                placeholder="Email address"
                v-model="form.email"
              >
              </b-form-input>
            </b-input-group>

            <b-input-group class="mt-2">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><i class="fas fa-phone"></i
                ></span>
                <b-form-select
                  id="inline-form-custom-select-pref"
                  class=""
                  size="lg"
                  :options="[
                    { text: '+91', value: null },
                    '+88',
                    '+971',
                    '+01',
                  ]"
                  :value="null"
                  v-model="form.code"
                ></b-form-select>
              </b-input-group-prepend>
              <b-form-input
                class="LoginInput"
                size="lg"
                type="number"
                placeholder="Phone Number"
                v-model="form.phone"
              >
              </b-form-input>
            </b-input-group>

            <b-input-group class="mt-2">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><i class="fas fa-building"></i
                ></span>
              </b-input-group-prepend>
              <b-form-select
                id="inline-form-custom-select-pref"
                class=""
                size="lg"
                :options="[
                  { text: 'Select job type', value: null },
                  'Work from office',
                  'Work from home',
                ]"
                :value="null"
                v-model="form.job"
              ></b-form-select>
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
                placeholder="Create Password"
                v-model="form.password"
              >
              </b-form-input>
            </b-input-group>

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
                placeholder="Repeat Password"
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
              >Create Login</b-button
            >
            <span>
              Have an account?
              <b-button variant="link" to="/">Login</b-button>
            </span>
          </form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
//import router from 'vue-router'


export default {
  name: "form1",
 
  data() {
    return {
      error: [],
      form: {
        name: null,
        email: null,
        job: null,
        code: null,
        phone: null,
        password: null,
        confirm_password: null,
      },
    };
  },
  methods: {
    login(e) {
      this.error = [];
      if (!this.form.name) {
        //this.error.push("Username is required");
        this.$toast.error("Username is required");
      } else if (!this.form.email) {
        //this.error.push("Email is required");
        this.$toast.error("Email is required");
      } else if (!this.validEmail(this.form.email)) {
        //this.error.push("Please enter valid email address");
        this.$toast.error("Please enter valid email address");
      } else if (!this.form.phone) {
        // this.error.push("Phone is required");
        this.$toast.error("Phone is required");
      } else if (!this.form.job) {
        // this.error.push("Select Job Type");
        this.$toast.error("Select Job Type");
      } else if (!this.form.password) {
        //this.error.push("passowrd is required");
        this.$toast.error("passowrd is required");
      } else if (!this.form.confirm_password) {
        // this.error.push("Confirm Passowrd is required");
        this.$toast.error("Confirm Passowrd is required");
      } else if (this.form.password != this.form.confirm_password) {
        //this.error.push("password and confirm password did not matched");
        this.$toast.error("password and confirm password did not matched");
      } else {
        this.axios
          .post("https://www.alegralabs.com/abhijit/api/register.php", this.form)
          .then((response) => {
            //this.$router.push('/home');
            //  console.warn("response",response);
            console.warn("response.success", response.data.success);
            if (response.data.success == "1") {
              this.$session.start();
              this.$session.set("email", response.data.email);
              this.$session.set("name", response.data.name);
              localStorage.setItem('email', response.data.email)

              this.$router.push({ path: "/dashboard" });
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

