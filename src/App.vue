<template>
  <v-app>
    <Header />
    <router-view />
    <Footer />
    <button-up />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    ButtonUp: () => import("./components/ButtonUp.vue"),
  },
};
</script>

<style lang="scss">
@import "./assets/scss/app";
</style>
