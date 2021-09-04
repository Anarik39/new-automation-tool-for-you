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
          <router-link class="footer-top__link" to="/contacts"
            >Let’s Talk</router-link
          >
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
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background: #316099;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  &__wrapper {
    padding: 91px 0 64px;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__hr {
    opacity: 0.4;
    color: #ffffff;
    margin: 96px 0 64px;
  }
  &__info {
    display: grid;
    grid-template-columns: 316px 1fr 1fr;
    grid-gap: 76px;
    padding-left: 21px;
  }
  &__copy {
    padding-top: 60px;
    opacity: 0.4;
    letter-spacing: 0.05em;
  }
}

.footer-top {
  &__left {
    max-width: 500px;
  }
  &__title {
    max-width: 340px;
    font-size: 36px;
    line-height: 46px;
    margin-bottom: 32px;
    letter-spacing: 0.05em;
  }
  & p {
    opacity: 0.6;
    letter-spacing: 0.06em;
  }
  &__link {
    padding: 15px 80px;
    background: #5a98d0;
    cursor: pointer;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #ffffff;
    transition: 0.4s;
    &:hover {
      border-radius: 20px;
      background: #ffffff;
      color: #5a98d0;
    }
  }
}

.footer-info {
  letter-spacing: 0.05em;
  &__li {
    padding-left: 19px;
  }
  & p {
    width: 300px;
  }
  & a {
    color: #ffffff;
    transition: 0.4s;
    &:hover {
      opacity: 0.6;
    }
  }
}

@media (max-width: 1156px) {
  .footer {
    &__wrapper {
      padding-top: 47px;
    }
    &__top {
      padding: 0 92px 0 92px;
    }
    &__hr {
      margin-top: 55px;
    }
    &__info {
      grid-template-columns: 1fr;
      grid-gap: 19px;
      padding-left: 111px;
    }
    &__copy {
      padding: 52px 0 0 94px;
    }
  }
  .footer-top {
    &__left {
      max-width: 336px;
    }
    &__title {
      margin-bottom: 22px;
    }
    & p {
      letter-spacing: 0.05em;
    }
    &__link {
      margin-top: 42px;
      padding: 5px 30px;
    }
  }
  .footer-info {
    &__li {
      padding-left: 42px;
    }
    & p {
      width: 100%;
    }
  }
}
@media (max-width: 767px) {
  .footer {
    &__wrapper {
      padding: 18px 0 32px;
      text-align: center;
    }
    &__top {
      flex-direction: column;
      padding: 0;
    }
    &__hr {
      margin: 35px 0 32px;
    }
    &__info {
      text-align: left;
      grid-template-columns: 1fr;
      grid-gap: 17px;
      padding-left: 18px;
      line-height: 19px;
    }
    &__copy {
      padding-top: 32px;
      padding-left: 0;
    }
  }
  .footer-top {
    &__left {
      max-width: 100%;
    }
    &__title {
      font-size: 24px;
      line-height: 28px;
      max-width: 200px;
      margin: 0 auto 28px;
      letter-spacing: 0;
    }
    &__link {
      margin-top: 32px;
      padding: 5px 18px;
    }
  }
  .footer-info {
    &__li {
      padding-left: 23px;
    }
    & p {
      width: 100%;
    }
  }
}
</style>
