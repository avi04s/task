<template>
  <div>

    <navbar></navbar>

    <b-container>
      <b-row>
        <b-col cols="12" align="center" style="margin-top: 50px">
          <b-card
            bg-variant="dark"
            text-variant="white"
            title="Login Details"
            img-src=""
            img-alt="Image"
            img-top
            tag="article"
            style=""
            class="mb-2"
          >
            <b-card-text>
              <div v-if="this.$session.get('file')" align="center">
                <hr />
                <h6>Uploaded Photo:</h6>
                
                  <img
                    v-bind:src="this.$session.get('file')"
                    alt="profile pic"
                    style="width: 20%"
                    @click="showSingle"
                  />
          
              </div>
              Hello, {{ this.$session.get("name") }} <br />
              Your Register Email : {{ this.$session.get("email") }}

            

              <!-- all props & events -->
              <vue-easy-lightbox
                escDisabled
                moveDisabled
                :visible="visible"
                :imgs="imgs"
                :index="index"
                @hide="handleHide"
              ></vue-easy-lightbox>
              
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

import VueEasyLightbox from "vue-easy-lightbox";
import navbar from "./navbar.vue";

export default {
  name: "dashboard",
  components: {
    navbar,
    VueEasyLightbox,
  },

  data() {
    return {
      imgs: "", // Img Url , string or Array of string
      visible: false,
      index: 0, // default: 0
    };
  },

  created() {
    /*if (localStorage.getItem("remember_me") != "true") {
      window.addEventListener("beforeunload", function () {
        // e.preventDefault();
        //e.returnValue = "";

        // this.$session.destroy();
        // this.$router.push({ path: "/" });
        localStorage.removeItem("email");
        localStorage.removeItem("remember_me");
      });
    }*/
  },
  methods: {
    showSingle() {
      (this.imgs = this.$session.get('file')),
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
};
</script>

<style scoped>
</style>


