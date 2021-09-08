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
#app,
button,
input,
select,
textarea {
  font-family: "Roboto", sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.container {
  padding: 0;
}
.v-application p {
  margin-bottom: 0;
}
.v-toolbar__content {
  padding: 0;
}
@media (min-width: 1156px) {
  .container {
    max-width: 1140px;
  }
}

@media (max-width: 1155px) {
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
