<template>
  <main>
    <div class="banner-header">
      <div class="banner-header__container">
        <v-container>
          <h2 class="banner-header__title">Contact Us</h2>
          <p class="banner-header__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </v-container>
      </div>
    </div>

    <div class="contacts-main">
      <v-container>
        <div class="contacts-main__wrapper">
          <div class="contacts-main__about">
            <img
              class="contacts-main__img"
              src="../assets/img/contacts/img-contact-us.svg"
              alt="photo"
            />
            <div class="contacts-info">
              <h4 class="contacts-info__title">ADDRESS</h4>
              <p class="contacts-info__text">
                Id convallis placerat sit sed duis id amet volutpat quam a,
                pharetra.
              </p>
            </div>
            <div class="contacts-info">
              <h4 class="contacts-info__title">PHONE</h4>
              <ol class="contacts-info__list">
                <li>
                  <a
                    class="contacts-info__link contacts-info__link_icon_phone"
                    href="tel:+7-812-7313-4321"
                    >+7-812-7313-4321</a
                  >
                </li>
                <li>
                  <a
                    class="contacts-info__link contacts-info__link_icon_phone"
                    href="tel:+7-817-0000-1234"
                    >+7-817-0000-1234</a
                  >
                </li>
              </ol>
            </div>
            <div class="contacts-info">
              <h4 class="contacts-info__title">
                ONLINE SERVICE
              </h4>
              <ol class="contacts-info__list">
                <li>
                  <a
                    class="contacts-info__link contacts-info__link_icon_site"
                    href="www.site.com"
                    >www.site.com</a
                  >
                </li>
                <li>
                  <a
                    class="contacts-info__link contacts-info__link_icon_email"
                    href="hello.site@gmail.com"
                    >hello.site@gmail.com</a
                  >
                </li>
              </ol>
            </div>
          </div>
          <div class="contacts-main__form"><FormContacts /></div>
        </div>
      </v-container>
      <div class="map-yandex">
        <div class="map-yandex__wrapper">
          <MapYandex />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FormContacts from "../components/FormContacts.vue";
import MapYandex from "../components/MapYandex.vue";

export default {
  name: "Contacts",
  components: { MapYandex, FormContacts },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mainContacts.scss";
</style>
