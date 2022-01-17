<template>
  <div>
    <navbar></navbar>


    <b-container>
      <b-row>
        <b-col cols="12" align="center" style="margin-top:50px">
          <b-card bg-variant="dark" text-variant="white" 
            title="Login Details"
            img-src=""
            img-alt="Image"
            img-top
            tag="article"
            style=""
            class="mb-2"
          >
            <b-card-text>
              
               <div v-if="this.$session.get('file')" align="center" >
                 <hr>
                 <h6>Uploaded Photo: </h6>
                <img v-bind:src="this.$session.get('file')" alt="profile pic" style="width:20%">
              </div>
              Hello, {{ this.$session.get("name") }} <br>
              Your Register Email : {{ this.$session.get("email") }}
            </b-card-text>

          
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import navbar from "./navbar.vue";
export default {
  name: "dashboard",
  components: {
    navbar,
  },
};
</script>

<style scoped>
</style>


