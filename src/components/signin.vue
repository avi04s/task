<template>
  <div>
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
            <span><i class="fab fa-twitter"></i> Login Via Twitter</span>
          </b-button>
          <b-button id="facebook" block variant="primary">
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
            
              <h6 v-for="e in error" v-bind:key="e.id" style="color:red">
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
                v-model="email"
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
                v-model="password"
              >
              </b-form-input>
            </b-input-group>

            <b-button type="submit" class="mb-2 mt-2" block variant="primary"
              >Sign In</b-button
            >
            <span>
              Create an account <b-button variant="link" to="/form1">Sign Up</b-button>
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
      email: null,
      password: null,
      
    };
  },
  methods: {
    login(e) {
      this.error = [];
    
      if(!this.email){
          this.error.push("Email is required");
      }
      else if(!this.validEmail(this.email) ){
          this.error.push("Please enter valid email address")
      }
      
      if(!this.password){
          this.error.push("passowrd is required");
      }
   
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
#facebook{
  background-color:
   #3b5998;
}

#twitter{
  background-color: #1DA1F2;
}

.signin{
    padding-top:100px;
   
}
</style>

