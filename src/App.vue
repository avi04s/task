<template>
  <div>
  


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
