<template>
  <div>
    <b-container>
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
                  <b-row>
                    <b-col class="mb-5" sm="12">
                      <h5>Apply as a Employee</h5>
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
                          placeholder="First name"
                          required
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
                          required
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
                          type="email"
                          placeholder="Last Name"
                          required
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
                          placeholder="Your Phone"
                          required
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
                          type="email"
                          placeholder="Password"
                          required
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
                          type="email"
                          placeholder="Confirm Password"
                          required
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
                          placeholder="Enter Your Answer"
                          required
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
                      <b-button variant="info">Register</b-button>
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-tab>
              <b-tab title="Hirer">
                <b-card-text class="mt-4">
                  <b-row>
                    <b-col class="mb-5" sm="12">
                      <h5>Apply as a Hirer</h5>
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
                          placeholder="First name"
                          required
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
                          required
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
                          type="email"
                          placeholder="Last Name"
                          required
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
                          placeholder="Phone Number"
                          required
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
                          type="email"
                          placeholder="Location"
                          required
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
                          placeholder="Profession"
                          required
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
                          type="email"
                          placeholder="Password"
                          required
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
                          placeholder="Confirm Password"
                          required
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
                      <b-button variant="info">Register</b-button>
                    </b-col>
                  </b-row>
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
      selected: "A",
      options: [
        { item: "Male", name: "Male" },
        { item: "Female", name: "Female" },
      ],
    };
  },
};
</script>

<style scoped>
.fab {
  font-size: 50px;
  color: white;
}
#outerRow {
  background: linear-gradient(90deg, rgba(6,9,84,1) 19%, rgba(19,223,224,1) 90%);
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
