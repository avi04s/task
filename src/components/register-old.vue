<template>
  <div>

       
              

    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <h1>Register Form</h1>
        </b-col>
      </b-row>
      <b-row>
        <!-- <b-col></b-col>-->
        <b-col>
          <b-card class="mt-3" header="Form Data Result">
             
            

                

                <p v-if="error.length">
                      
                    <b>Please Correct the following error : </b>
                    <ul>
                        <li v-for="err in error" v-bind:key="err.id">{{err}}</li>
                    </ul>
                
                </p>
            

      
            <b-form form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Email Address"
                label-for="input-1"
                description="We'll never share your email with anyone else."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="Enter Email"
                  
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Full Name"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.username"
                  type="text"
                  placeholder="Full Name"
                  
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-grou-3"
                label="Select Gender"
                label-for="input-3"
              >
                <b-form-select
                  id="input-group-3"
                  v-model="form.gender"
                  :options="gender"
                  
                >
                </b-form-select>
              </b-form-group>

              <b-form-group id="input-group-4" label="Hobbies">
                <b-form-checkbox-group id="checkbox-4" v-model="form.hobbies">
                  <b-form-checkbox value="cricket"> Cricket </b-form-checkbox>
                  <b-form-checkbox value="football"> Football </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <b-form-group
                label="Do You Know Hindi ?"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio
                  v-model="form.language"
                  :aria-describedby="ariaDescribedby"
                  name="language"
                  value="Yes"
                  >Yes</b-form-radio
                >
                <b-form-radio
                  v-model="form.language"
                  :aria-describedby="ariaDescribedby"
                  name="language"
                  value="No"
                  >No</b-form-radio
                >
              </b-form-group>

              <b-form-file
                v-model="form.file1"
                :state="Boolean(form.file1)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..." 
              ></b-form-file>
              <h6 class="mt-3">
                Selected file: {{ form.file1 ? form.file1.name : "" }}
              </h6>


              

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="mt-3" header="Form Data Result">
            
            <pre class="m-0">Email ID : {{ form.email }}</pre>
            <pre class="m-0">Username : {{ form.username }}</pre>
            <pre class="m-0">Gender : {{ form.gender }}</pre>
            <pre class="m-0">Hobbies : {{ form.hobbies }}</pre>
            <pre class="m-0">Do you know Hindi : {{ form.language }}</pre>
            <pre class="m-0">File Name : {{ form.file1 ? form.file1.name : "" }}</pre>

          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      error: [],
      form: {
        email: "",
        username: "",
        gender: null,
        hobbies: [],
        file1: null,
        language: "",
      },

gender: [{ text: "Select One", value: null }, "Male", "Female"],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      this.error = [];


      if (!this.form.email) {
        this.error.push("Email Required");
      }

      if (!this.form.username) {
        this.error.push("Name Required");
      }

      if (!this.form.gender) {
        this.error.push("Select Gender");
      }

      if (!this.form.hobbies.length) {
        this.error.push("Select your hobbies");
      }

      if (!this.form.file1) {
        this.error.push("Upload Photo");
      }

      if (!this.form.language) {
        this.error.push("Select Option Yes or No");
      }
      
      

      

      event.preventDefault();

      // alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      this.form.email = "";
      this.form.username = "";
      this.form.gender = "";
      this.form.hobbies = [];
      this.form.file1 = "";
      this.form.language = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
