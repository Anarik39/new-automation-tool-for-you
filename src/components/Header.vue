<template>
  <v-app-bar app elevate-on-scroll color="#ffffff">
    <v-container>
      <nav class="header__nav">
        <router-link to="/"
          ><img src="../assets/img/header/index.svg" alt="Index"
        /></router-link>
        <router-link to="/contacts"
          ><img src="../assets/img/header/contacts.svg" alt="Contacts"
        /></router-link>
      </nav>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.header {
  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & img {
      vertical-align: top;
    }
  }
}
</style>
