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

    <b-container class="bv-example-row" style="margin-top: 120px">
      <b-row>
        <b-col></b-col>
        <b-col sm="12" lg="4" align="center">
          <h4></h4>
          <h4>Update Your Profile</h4>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col></b-col>

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
          <form @submit="login" enctype=multipart/form-data>

            <b-input-group>
              <b-form-input
                class="LoginInput"
                size="lg"
                placeholder="Id"
                v-model="form.id" readonly 
              >
              </b-form-input>
            </b-input-group>

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
                v-model="form.email" readonly
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
              <b-form-file
                v-model="form.file"
                :state="Boolean(form.file)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                ref="form.file"
                v-on:change="onChangeFileUpload()"
              ></b-form-file>
            </b-input-group>

            <div class="mt-3">
              Selected file: {{ form.file ? form.file.name : "" }}
            </div>
           
               <div v-if="form.file" align="center">
                 <hr>
                 <h6>Uploaded Photo:</h6>
                 <img v-bind:src="this.form.file" alt="profile pic" style="width:20%">
               </div>
            


            <b-button
              type="submit"
              class="mb-2"
              block
              variant="primary"
              style="color: white"
              >Update Profile</b-button
            >
          </form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
//import router from 'vue-router'
import navbar from "./navbar.vue";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "profile",

  components: {
    navbar,
  },

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
        file: null,
        id: null,
      },
      data: null,
       check:false,
      correct:false,
    };
  },

  methods: {

     passwordCheck(){
      //console.warn(this.form.password);
  

      if(/[a-z]/.test(this.form.password)){
        this.correct=true;
        this.check=false;
        
      }
      else{
        this.correct = false;
        this.check=true
      }

      if(/\d/.test(this.form.password)){
        this.correct=true;
        this.check=false;
      }
      else{
        this.correct = false;
        this.check=true
      }

      if(/[A-Z]/.test(this.form.password)){
        this.correct=true;
        this.check=false;
      }
      else{
        this.correct = false;
        this.check=true
      }
      var re = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/

      if(re.test(this.form.password)){
        this.correct=true;
        this.check=false;
      }
      else{
        this.correct = false;
        this.check=true
      }

      
    
    },

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
      } /*else if (!this.form.file) {
        this.$toast.error("Profile Photo is required");
      }*/ else {
        
       // console.warn("File",this.form.file.name);
     
       let formData = new FormData();
       formData.append('id', this.form.id);
       formData.append('file', this.form.file);
       formData.append('name', this.form.name);
       formData.append('email', this.form.email);


       // this.form.file = e.target.files[0];  
      
        this.axios
          .post("https://www.alegralabs.com/abhijit/api/update.php",formData ,{
            headers: {
              'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL'
            }, 
          })
          .then((response) => {
            //this.$router.push('/home');
            //console.warn("response", response);
            //console.warn("response.success", response.data.success);

                 console.warn("response check", response);
                if (response.data.success == "1") {
                    
                   // this.form.id = response.data.id;
                    this.form.name = response.data.name;
                    this.form.email = response.data.email;
                    this.form.phone = response.data.id;
                    this.form.file = response.data.file;
                    this.$session.set("file", response.data.file);
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

    getData() {
      const data = this.$session.get("email");
      const url = "https://www.alegralabs.com/abhijit/api/user.php?data=" + data;
      Vue.axios.get(url).then((response) => {
        console.log(response.data.id);
        this.form.id = response.data.id;
        this.form.name = response.data.name;
        this.form.email = response.data.email;
        this.form.phone = response.data.id;
        this.form.file = response.data.file;
      });
    },

    onChangeFileUpload(e){
       // this.form.file = this.$refs.form.file.files[0];
        this.form.file = e.target.files[0];
      // this.form.file = files[0];
      }
  },

  created: function () {
    this.getData();
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

