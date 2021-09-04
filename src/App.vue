<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <button-up />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
    ButtonUp: () => import("./components/ButtonUp.vue"),
  },
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
#app {
  font-family: "Roboto", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}
@media (max-width: 1156px) {
  .container {
    padding: 0 32px;
  }
}
@media (max-width: 767px) {
  .container {
    padding: 0 16px;
  }
}
</style>
