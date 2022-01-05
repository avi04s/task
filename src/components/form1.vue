<template>
  <div>
    <b-container class="bv-example-row">
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
          <b-button block variant="primary">
            <span><i class="fab fa-twitter"></i> Login Via Twitter</span>
          </b-button>
          <b-button block variant="primary">
            <span><i class="fab fa-facebook-f"></i> Login Via facebook</span>
          </b-button>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col></b-col>
        <b-col sm="12">
          -------------------------------OR----------------------------
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <span v-if="error.length">
            <h3>Please correct the following errors</h3>
            <ul>
              <li v-for="e in error" v-bind:key="e.id">
                {{ e }}
              </li>
            </ul>
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
                placeholder="Username"
                v-model="username"
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
                v-model="email"
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
                  v-model="code"
                ></b-form-select>
              </b-input-group-prepend>
              <b-form-input
                class="LoginInput"
                size="lg"
                type="number"
                placeholder="Phone Number"
                v-model="phone"
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
                v-model="job"
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
                v-model="password"
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
                v-model="confirm_password"
              >
              </b-form-input>
            </b-input-group>
            <b-button type="submit" class="mb-2" block variant="primary"
              >Create Login</b-button
            >
            <span>
              Have an account? <b-button variant="link">Login</b-button>
            </span>
          </form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "form1",
  data() {
    return {
      error: [],
      username: null,
      email: null,
      job: null,
      code: null,
      phone: null,
      password: null,
      confirm_password: null,
    };
  },
  methods: {
    login(e) {
      this.error = [];
      if (!this.username) {
        this.error.push("Username is required");
      }
      if(!this.email){
          this.error.push("Email is required");
      }
      else if(!this.validEmail(this.email) ){
          this.error.push("Please enter valid email address")
      }
      if(!this.phone){
          this.error.push("Phone is required");
      }
      if(!this.job){
          this.error.push("Select Job Type");
      }
      if(!this.password){
          this.error.push("passowrd is required");
      }
      if(!this.confirm_password){
          this.error.push("Confirm Passowrd is required");
      }
      if(this.password != this.confirm_password){
          this.error.push("password and confirm password did not matched")
      }

      console.warn("Hello");
      e.preventDefault();
    },
    validEmail: function(email){
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

  },
};
</script>

<style scoped>
#inputRow {
  margin-top: 20px;
}
</style>

