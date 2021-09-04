<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <router-link to="/"
          ><img src="../assets/img/logo.svg" alt="index"
        /></router-link>
        <router-link to="/about"
          ><img src="../assets/img/Contacts.svg" alt="Contacts"
        /></router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  &__nav {
    display: flex;
    justify-content: space-between;
    padding-top: 34px;
  }
}

@media (max-width: 1024px) {
  .header {
    &__nav {
      padding-top: 47px;
    }
  }
}

@media (max-width: 767px) {
  .header {
    &__nav {
      padding-top: 16px;
    }
  }
}
</style>
