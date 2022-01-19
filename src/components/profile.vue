<template>
  <div>
    <navbar></navbar>
    <b-container style="margin-top: 20px">
      <b-row>
        <b-col cols="12" align="center">
          <h4>User Profile</h4>
          <hr />
        </b-col>
        <b-col sm="12" lg="4" align="right">
          <b-img
            thumbnail
            fluid
            v-bind:src="this.form.file"
            alt="Employee Photo"
            style=""
            @click="showSingle"
          ></b-img>
          
          <!-- all props & events -->
            <vue-easy-lightbox
              escDisabled
              moveDisabled
              :visible="visible"
              :imgs="imgs"
              :index="index"
              @hide="handleHide"
            ></vue-easy-lightbox>


        </b-col>
        <b-col sm="12" lg="8">
          <b-card
            title=""
            img-src=""
            img-alt=""
            img-top
            tag="article"
            style=""
            class="mb-2"
          >
            <b-card-text>
              <span> <b>Name : </b> {{ this.form.name }} </span><br />
              <hr />
              <span> <b>Email : </b> {{ this.form.email }} </span><br />
              <hr />
              <span> <b>Mobile Number : </b> {{ this.form.phone }}</span
              ><br />
              <hr />
              <span> <b>Gender : </b> {{ this.form.gender }}</span
              ><br />
              <hr />
              <span> <b>Designation : </b> {{ this.form.designation }}</span
              ><br />
              <hr />
              <span>
                <b>Current Address : </b> {{ this.form.current_address }}</span
              ><br />
              <hr />
              <span>
                <b>Permanent Address : </b>
                {{ this.form.permanent_address }}</span
              ><br />
              <hr />
            </b-card-text>

       
          </b-card>
        </b-col>

        <b-col sm="12" lg="4"> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueEasyLightbox from "vue-easy-lightbox";

Vue.use(VueAxios, axios);

export default {
  name: "profile",
  components: {
    navbar,
    VueEasyLightbox,
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        job: null,
        code: null,
        phone: null,
        password: null,
        file: null,
        id: null,
        gender: null,
        designation: null,
        current_address: null,
        permanent_address: null,
      },

      
        imgs: "", // Img Url , string or Array of string
        visible: false,
        index: 0, // default: 0
        
    };
  },
  methods: {
    getData() {
      const data = this.$session.get("email");
      const url =
        "https://www.alegralabs.com/abhijit/api/user.php?data=" + data;
      Vue.axios.get(url).then((response) => {
        console.log("response", response.data.id);
        this.form.id = response.data.id;
        this.form.name = response.data.name;
        this.form.email = response.data.email;
        this.form.phone = response.data.phone;
        this.form.file = response.data.file;
        this.form.gender = response.data.gender;
        this.form.designation = response.data.designation;
        this.form.current_address = response.data.current_address;
        this.form.permanent_address = response.data.permanent_address;
      });
    },

    showSingle() {
      (this.imgs = this.$session.get("file")),
        // or
        //this.imgs = { title: 'this is a placeholder', src: 'http://via.placeholder.com/350x150' }
        this.show();
    },

    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },

  created: function () {
    this.getData();
  },
};
</script>
