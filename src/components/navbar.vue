<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#" v-b-toggle.sidebar-1>
          <i class="fas fa-bars"></i>
        </b-nav-item>
        <b-navbar-brand href="#" class="ml-2">NavBar</b-navbar-brand>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <!--<b-nav-item href="#">
          <span style="color: white">
            <i class="far fa-envelope"></i>
          </span>
        </b-nav-item>
        <b-nav-item href="#">
          <span style="color: white"><i class="far fa-bell"></i> </span>
        </b-nav-item>-->
        <b-nav-item href="#">
          <span style="color: white">
            Hello, {{ this.$session.get("name") }}
          </span>
        </b-nav-item>
        <!--<b-nav-item href="#" v-on:click="logout">
          <span style="color: white"
            ><i class="fas fa-sign-out-alt"></i> Logout
          </span>
        </b-nav-item>-->
      </b-navbar-nav>
    </b-navbar>

    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-1 py-2">
        <b-list-group>
          <b-list-group-item  to="/dashboard">
            <span> <i class="fas fa-home-lg-alt"></i> </span>
            <span style="padding-top: 7px; padding-left: 8px">Dashboard</span>
          </b-list-group-item>
          <b-list-group-item button v-b-toggle.collapse-1>
            <span> <i class="fas fa-cog"></i></span>
            <span style="padding-top: 7px; padding-left: 8px">Setting</span>
            <span style="padding-left: 8px; float: right">
              <i class="fas fa-angle-down"></i>
            </span>
          </b-list-group-item>

          <b-collapse id="collapse-1" class="mt-2">
            <b-list-group>
            
                <b-list-group-item to="/profile">
                  <span style="padding-left: 20px">
                    <i class="fas fa-user"></i
                  ></span>
                  <span style="padding-top: 7px; padding-left: 8px"
                    >Profile</span
                  >
                </b-list-group-item>
            
              <b-list-group-item  to="/edit-profile">
                <span>
                  <i class="fas fa-user-edit" style="padding-left: 20px"></i
                ></span>
                <span style="padding-top: 7px; padding-left: 8px"
                  >Edit Profile</span
                >
              </b-list-group-item>

              <b-list-group-item to="/change-password">
                <span>
                  <i class="fas fa-lock" style="padding-left: 20px"></i
                ></span>
                <span style="padding-top: 7px; padding-left: 8px"
                  >Change Password</span
                >
              </b-list-group-item>
            </b-list-group>
          </b-collapse>

          <b-list-group-item button v-on:click="logout">
            <span style=""><i class="fas fa-sign-out-alt"></i> Logout </span>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "navbar",

  data() {
    return {};
  },
  methods: {
    logout() {
     
          
       
          if(localStorage.getItem("remember_me")=="true"){
            this.$session.destroy();
            localStorage.removeItem("email");
            this.$router.push({ path: "/" });
            
          }
          else{

            this.$session.destroy();
            localStorage.removeItem("email");
            localStorage.removeItem("email1");
            localStorage.removeItem("password");
            localStorage.removeItem("remember_me");
            this.$router.push({ path: "/" });

          }
      
    },
  },
};
</script>
