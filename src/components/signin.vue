<template>
  <div>
    <Toasts
      :show-progress="true"
      :rtl="false"
      :max-messages="5"
      :time-out="3000"
      :closeable="true"
    ></Toasts>

    <b-container class="signin">
      <b-row>
        <b-col></b-col>
        <b-col sm="12" lg="4">
          <h4>Sign In</h4>
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
          <span>------------------OR-------------------</span>
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

            <b-form-checkbox
              class="mt-2"
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
              Remember Me
            </b-form-checkbox>

            <b-button
              type="submit"
              class="mb-2 mt-2"
              block
              variant="primary"
              style="color: white"
              >Sign In</b-button
            >
            <span>
              Create an account
              <b-button variant="link" to="/form1">Sign Up</b-button>
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
  name: "signin",
  data() {
    return {
      error: [],
      form: {
        email: null,
        password: null,
      },
    };
  },
  mounted() {
    if (localStorage.getItem("email")) {
      this.$router.push({ path: "/dashboard" });
    }
  },
  methods: {
    login(e) {
      this.error = [];

      if (!this.form.email) {
        //this.error.push("Email is required");
        this.$toast.error("Email is required");
      } else if (!this.validEmail(this.form.email)) {
        //this.error.push("Please enter valid email address");
        this.$toast.error("Please Enter Valid Email Address");
      } else if (!this.form.password) {
        //this.error.push("passowrd is required");
        this.$toast.error("Password is required");
      } else {
        this.axios
          .post("https://www.alegralabs.com/abhijit/api/login.php", this.form)
          .then((response) => {
            //this.$router.push('/home');
            //  console.warn("response",response);
            //console.warn("response.success", response);
            if (response.data.success == "1") {
              this.$session.start();
              this.$session.set("email", response.data.email);
              this.$session.set("name", response.data.name);
              this.$session.set("file", response.data.file);
              localStorage.setItem("email", response.data.email);
           
              this.$router.push({ path: "/dashboard" });
            } else if (response.data.success == "0") {
              this.$toast.error(response.data.message);
            }
          });
      }

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

.signin {
  padding-top: 150px;
}
</style>

