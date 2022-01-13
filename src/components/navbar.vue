<template>
  <div>
    <b-nav align="right" style="background-color: #4e5e6a">
      
      <b-nav-item active>
        <span style="color: white">
          <i class="far fa-envelope"></i>
        </span>
      </b-nav-item>

      <b-nav-item
        ><span style="color: white"><i class="far fa-bell"></i> </span
      ></b-nav-item>
      <b-nav-item>
        <span style="color: white">
          Hello, {{ this.$session.get("name") }}
        </span>
      </b-nav-item>
      <b-nav-item style="" v-on:click="logout"
        ><span style="color: white"
          ><i class="fas fa-sign-out-alt"></i> Logout
        </span></b-nav-item
      >
    </b-nav>

    <sidebar-menu :menu="menu" style="background-color: #4e5e6a">
      <div slot="header"></div>
      <div slot="footer"></div>
      <span slot="toggle-icon">
        <i class="fas fa-toggle-on"></i>
      </span>
      <span slot="dropdown-icon">
        <i class="fas fa-arrow-down"></i>
      </span>
    </sidebar-menu>
  </div>
</template>

<script>
export default {
  name: "navbar",

  data() {
    return {
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Dashboard",
          icon: "fa fa-user",
        },
        {
          href: "/signin",
          title: "Signin",
          icon: "fa fa-user",
        },
        {
          href: "#",
          title: "Forms",
          icon: "fa fa-chart-area",
          child: [
            {
              href: "/form1",
              title: "Form 1",
            },
            {
              href: "/form2",
              title: "Form 2",
            },
          ],
        },
      ],
    };
  },
  methods:{
    logout(){
      this.$session.destroy();
      this.$router.push({ path: "/" });
    }
  }
};
</script>
