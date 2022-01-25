<template>
  <div>
    <navbar></navbar>

    <b-container>
      <b-row>
        <b-col cols="4" v-for="(images, index) in images" v-bind:key="index">
          <b-card
            title=""
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
            align="center"
          >
            <b-card-text>
              <img v-bind:src="images" width="50%" />
              <br>
              {{title[index]}}<br>
              <span class="text-danger">RS. {{price[index]}}</span>
            </b-card-text>
            <b-card-text>
              
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "laptop",
  components: {
    navbar,
  },
  data() {
    return {
      images: null,
      title:null,
      price:null,
    };
  },
  methods: {
    getData() {
      const url = "https://www.alegralabs.com/abhijit/api/laptop.php";
      Vue.axios.get(url).then((response) => {
        console.log("response", response.data);
        if (response.data) {
          this.images = response.data.images;
          this.title = response.data.title;
          this.price = response.data.price;
        }
      });
    },
  },

  created: function () {
    this.getData();
  },
};
</script>
