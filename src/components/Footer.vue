<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="container">
        <div class="footer__top footer-top">
          <div class="footer-top__left">
            <div class="footer-top__title">
              Intersted to woek with our team?
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <v-dialog v-model="dialog" max-width="540px">
            <template v-slot:activator="{ on }">
              <button class="footer-top__link" v-on="on">
                Let’s Talk
              </button>
            </template>
            <div class="dialog">
              <FormContacts />
              <button
                class="dialog__btn dialog__btn_position-main"
                @click="dialog = false"
              >
                ✕
              </button>
            </div>
          </v-dialog>
        </div>
      </div>
      <hr class="footer__hr" />
      <div class="container">
        <ol class="footer__info footer-info">
          <li class="footer-info__li">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </li>
          <li class="footer-info__li">
            <a href="tel:+7-812-7313-4321">+7-812-7313-4321</a>
          </li>
          <li class="footer-info__li">
            <a href="mailto:hello.site@gmail.com">hello.site@gmail.com</a>
          </li>
        </ol>
        <div class="footer__copy">2021 All rights reserved. &copy;</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: { FormContacts: () => import("./FormContacts.vue") },
  name: "Footer",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/footer";
</style>
