<template>
  <div>
    <b-nav align="right" style="background-color: black">
      <b-nav-item active>
        <span style="color:white"> 
          <i class="far fa-envelope"></i>
        </span>
      </b-nav-item>

      <b-nav-item><span style="color:white"><i class="far fa-bell"></i> </span></b-nav-item>
      <b-nav-item><span style="color:white"><i class="fas fa-sign-out-alt"></i> Logout </span></b-nav-item>
    </b-nav>
    <sidebar-menu :menu="menu" />
    <router-view></router-view>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    // HelloWorld,
  },

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
          href: "/forms",
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
};
</script>
