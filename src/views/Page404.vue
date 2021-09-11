<template>
  <main>
    <section class="no-found">
      <ul class="no-found__wrapper">
        <li><h1 class="no-found__title">404</h1></li>
        <li><p class="no-found__text">Not Found</p></li>
        <li>
          <p>The resource requested could not be found on this server!</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  margin: 80px;
  height: 60vh;
}
.no-found {
  height: 100%;
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    list-style: none;
    color: #000;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.05em;
    opacity: 0.7;
    text-align: center;
    & li {
      margin-bottom: 5px;
    }
  }
  &__title {
    font-weight: 500;
    font-size: 150px;
    line-height: 74px;
    letter-spacing: 0.04em;
    margin-bottom: 20px;
  }
  &__text {
    font-weight: 500;
    font-size: 25px;
    line-height: 46px;
    letter-spacing: 0.05em;
  }
}
</style>
