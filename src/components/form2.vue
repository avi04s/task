<template>
  <div>
    <Toasts
      :show-progress="true"
      :rtl="false"
      :max-messages="5"
      :time-out="3000"
      :closeable="true"
    ></Toasts>
    <b-container style="margin-top: 100px">
      <b-row id="outerRow">
        <b-col sm="3" id="leftCol">
          <i class="fab fa-airbnb"></i>
          <h5 class="text-white">Welcome</h5>
          <p class="text-white">
            You are 30 seconds away from earninig your own <br />
            money!
          </p>

          <b-button id="loginBtn" variant="light">Login</b-button>
        </b-col>
        <b-col sm="9">
          <b-card id="card" title="" sub-title="">
            <b-tabs pills align="right">
              <b-tab title="Employee" active>
                <b-card-text class="mt-4">
                  <form @submit="signUp">
                    <b-row>
                      <b-col class="mb-5" sm="12">
                        <h5>Apply as a Employee</h5>
                        <span v-if="error.length">
                          <h3>Please correct the following errors</h3>

                          <h6
                            v-for="e in error"
                            v-bind:key="e.id"
                            style="color: red"
                          >
                            {{ e }}
                          </h6>
                        </span>
                      </b-col>
                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="First name"
                            v-model="efirstname"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="email"
                            placeholder="Your Email"
                            v-model="email"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Last Name"
                            v-model="elastname"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Your Phone"
                            v-model="ephone"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="password"
                            placeholder="Password"
                            v-model="epassword"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col>
                        <b-form-select
                          id=""
                          class=""
                          size=""
                          :options="[
                            {
                              text: 'Please Select Your Security Question',
                              value: null,
                            },
                            'A',
                            'B',
                          ]"
                          :value="null"
                          v-model="equestion"
                        ></b-form-select>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="password"
                            placeholder="Confirm Password"
                            v-model="econfirmpassword"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Enter Your Answer"
                            v-model="eanswer"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col align="left">
                        <b-form-radio-group
                          v-model="selected"
                          :options="options"
                          class="mb-3"
                          value-field="item"
                          text-field="name"
                          disabled-field="notEnabled"
                        ></b-form-radio-group>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col align="right">
                        <b-button
                          type="submit"
                          variant="info"
                          style="color: white"
                          >Register</b-button
                        >
                      </b-col>
                    </b-row>
                  </form>
                </b-card-text>
              </b-tab>
              <b-tab title="Hirer">
                <b-card-text class="mt-4">
                  <form @submit="signUp1">
                    <b-row>
                      <b-col class="mb-5" sm="12">
                        <h5>Apply as a Hirer</h5>

                        <span v-if="error1.length">
                          <h3>Please correct the following errors</h3>

                          <h6
                            v-for="e1 in error1"
                            v-bind:key="e1.id"
                            style="color: red"
                          >
                            {{ e1 }}
                          </h6>
                        </span>
                      </b-col>

                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="First name"
                            v-model="hfirstname"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="email"
                            placeholder="Your Email"
                            v-model="hmail"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Last Name"
                            v-model="hlastname"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Phone Number"
                            v-model="hphone"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Location"
                            v-model="hlocation"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Profession"
                            v-model="hprofession"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Password"
                            v-model="hpassword"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col>
                        <b-form-group
                          id="input-group-1"
                          label=""
                          label-for="input-1"
                          description=""
                        >
                          <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Confirm Password"
                            v-model="hconfirmpassword"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col align="left">
                        <b-form-radio-group
                          v-model="hgender"
                          :options="options1"
                          class="mb-3"
                          value-field="item"
                          text-field="name"
                          disabled-field="notEnabled"
                        ></b-form-radio-group>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col align="right">
                        <b-button
                          type="submit"
                          variant="info"
                          style="color: white"
                          >Register</b-button
                        >
                      </b-col>
                    </b-row>
                  </form>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
  name: "form2",

  data() {
    return {
      error: [],
      error1: [],
      efirstname: null,
      email: null,
      elastname: null,
      ephone: null,
      epassword: null,
      econfirmpassword: null,
      equestion: null,
      eanswer: null,
      selected: null,
      options: [
        { item: "Male", name: "Male" },
        { item: "Female", name: "Female" },
      ],

      options1: [
        { item: "Male", name: "Male" },
        { item: "Female", name: "Female" },
      ],

      hfirstname: null,
      hmail: null,
      hlastname: null,
      hphone: null,
      hlocation: null,
      hprofession: null,
      hpassword: null,
      hconfirmpassword: null,
      hgender: null,
    };
  },
  methods: {
    signUp(e) {
      this.error = [];
      if (!this.efirstname) {
        //this.error.push("Firstname is required");
        this.$toast.error("Firstname is required");
      }

      if (!this.email) {
       // this.error.push("Email is required");
        this.$toast.error("Email is required");
      }

      if (!this.elastname) {
       // this.error.push("Last Name is required");
        this.$toast.error("Last Name is required");
      }

      if (!this.ephone) {
       // this.error.push("Phone is required");
        this.$toast.error("Phone is required");
      }

      if (!this.epassword) {
       // this.error.push("Password is required");
        this.$toast.error("Password is required");
      }

      if (!this.equestion) {
       // this.error.push("Question is required");
        this.$toast.error("Question is required");
      }

      if (!this.econfirmpassword) {
      //  this.error.push("Confirm Password is required");
        this.$toast.error("Confirm Password is required");
      }

      if (!this.selected) {
        //this.error.push("Gender is required");
        this.$toast.error("Gender is required");
      }

      e.preventDefault();
    },

    signUp1(e) {
      this.error1 = [];

      if (!this.hfirstname) {
        //this.error1.push("Firstname is required");
        this.$toast.error("Firstname is required");
      }

      if (!this.hmail) {
      //  this.error1.push("Email is required");
        this.$toast.error("Email is required");
      }

      if (!this.hlastname) {
        //this.error1.push("Last Name is required");
        this.$toast.error("Last Name is required");
      }

      if (!this.hphone) {
        //this.error1.push("Phone is required");
        this.$toast.error("Phone is required");
      }

      if (!this.hpassword) {
       // this.error1.push("Password is required");
        this.$toast.error("Password is required");
      }

      if (!this.hconfirmpassword) {
       // this.error1.push("Confirm Password is required");
        this.$toast.error("Confirm Password is required");
      }

      if (!this.hlocation) {
       // this.error1.push("Location is required");
        this.$toast.error("Location is required");
      }

      if (!this.hprofession) {
        //this.error1.push("Password is required");
        this.$toast.error("Password is required");
      }

      if (!this.hgender) {
        //this.error1.push("Gender is required");
        this.$toast.error("Gender is required");
        
      }

      e.preventDefault();
    },
  },
};
</script>

<style scoped>
.fab {
  font-size: 50px;
  color: white;
}
#outerRow {
  background: linear-gradient(
    90deg,
    rgba(6, 9, 84, 1) 19%,
    rgba(19, 223, 224, 1) 90%
  );
}
#card {
  border-top-left-radius: 90px 60%;
  border-bottom-left-radius: 90px 60%;
  margin: 20px;
  padding-left: 70px;
  padding-right: 40px;
}

#leftCol {
  padding-left: 40px;
  padding-top: 160px;
}
</style>
