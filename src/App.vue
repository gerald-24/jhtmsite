<template>
  <v-app class="app">
    <home-navigation></home-navigation>
    <router-view></router-view>
  </v-app>
</template>

<script>
import HomeNavigation from "./components/designs/navigations/navigation";
export default {
  name: "App",

  components: {
    HomeNavigation,
  },

  data: () => ({
    //
  }),
};
</script>
<style >
.home {
  background-size: auto;
}
.v-application--wrap {
  background-image: url("https://newevolutiondesigns.com/images/freebies/black-wallpaper-10.jpg");
  background-size: cover;
  /* background-color: rgb(128, 236, 255); */
}
#overlay {
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
#hov:hover .child,
#hov:focus .child {
  transform: scale(1.2);
}
</style>
