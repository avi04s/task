<template>
  <div>
    <navbar></navbar>

    <b-container style="margin-top:20px">
      <b-row >
        <b-col cols="4" v-for="(path, index) in path" v-bind:key="index">
          <b-card
            title=""
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
            align="center"
            v-b-modal.modal-1
            v-on:click="showData(path)"
          >
            <b-card-text>
              <img v-bind:src="image[index]" width="50%" />
            </b-card-text>
            <b-card-text>
              <span>Title : {{ title[index] }}</span
              ><br />
              <span>Price : {{ price[index] }}</span
              ><br />
              Path : {{path}} <br>
              INDEX : {{index}}

            
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Title : {{this.modal.title1}}</p>
       <p class="my-4">Price : {{this.modal.price}}</p>
        <p class="my-4">Description : {{this.modal.desc}}</p>

         <p class="my-4">UPC : {{this.modal.upc}}</p>
         <p class="my-4">Product Type : {{this.modal.type}}</p>
         <p class="my-4">Price (excl. tax) : {{this.modal.price1}}</p>
         <p class="my-4">Price (incl. tax) : {{this.modal.price2}}</p>
         <p class="my-4">Tax : {{this.modal.tax}}</p>
         <p class="my-4">Availability : {{this.modal.avail}}</p>
         <p class="my-4">Number of reviews : {{this.modal.review}}</p>
       
    </b-modal>
  </div>
</template>


<script>
import navbar from "./navbar.vue";

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  nam: "book",
  data() {
    return {
      title: null,
      price: null,
      image: null,
      path: null,

      modal:{
          title1:null,
          desc:null,
          td:null,
          upc:null,
          type:null,
          price1:null,
          price2:null,
          tax:null,
          avail:null,
          review:null,

      }
    };
  },
  components: {
    navbar,
  },
  methods: {
    getData() {
      const url = "https://www.alegralabs.com/abhijit/api/book.php";
      Vue.axios.get(url).then((response) => {
        //console.log("response", response.data.path);
        if (response.data) {
          this.title = response.data.title;
          this.price = response.data.price;
          this.image = response.data.img;
          this.path = response.data.path;
        }
      });
    },
    showData(path1){
       console.warn("Path",path1)
        const url =
        "https://www.alegralabs.com/abhijit/api/data.php?path=" + path1;
        Vue.axios.get(url).then((response) => {
            console.log("response", response.data);
            this.modal.title1 = response.data.title;
            this.modal.price = response.data.price;
            this.modal.desc = response.data.desc;
            
            this.modal.upc = response.data.td1[0];
            this.modal.type = response.data.td1[1];
            this.modal.price1 = response.data.td1[2];
            this.modal.price2 = response.data.td1[3];
            this.modal.tax = response.data.td1[4];
            this.modal.avail = response.data.td1[5];
            this.modal.review = response.data.td1[6]; 
        });
    }
  },

  created: function () {
    this.getData();
  },
};
</script>
