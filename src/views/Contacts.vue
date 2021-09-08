<template>
  <main>
    <div class="contacts_header">
      <div class="container">
        <h2 class="heading-contacts">Contact Us</h2>
        <p class="text_top_contacts">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

    <div class="contacts_form container">
      <div class="contacts_info">
        <img
          class="img_contact_us"
          src="../assets/img/main/contacts/contact_us.svg"
          alt="photo"
        />
        <div class="contacts_info_block">
          <h4 class="heading-mini heading-mini_contacts">ADDRESS</h4>
          <p class="text p_text_contacts">
            Id convallis placerat sit sed duis id amet volutpat quam a,
            pharetra.
          </p>
        </div>
        <div class="contacts_info_block">
          <h4 class="heading-mini heading-mini_contacts">PHONE</h4>
          <ol>
            <li>
              <a class="phone_a" href="tel:+7-812-7313-4321"
                >+7-812-7313-4321</a
              >
            </li>
            <li>
              <a class="phone_a" href="tel:+7-817-0000-1234"
                >+7-817-0000-1234</a
              >
            </li>
          </ol>
        </div>
        <div class="contacts_info_block">
          <h4 class="heading-mini heading-mini_contacts">ONLINE SERVICE</h4>
          <ol>
            <li><a class="site_a" href="www.site.com">www.site.com</a></li>
            <li>
              <a class="email_a" href="hello.site@gmail.com"
                >hello.site@gmail.com</a
              >
            </li>
          </ol>
        </div>
      </div>

      <form class="form">
        <h4 class="heading-mini heading-mini_form">SEND US MESSAGE</h4>
        <div class="input-text_block">
          <p class="text_form">Full Name:</p>
          <input class="input-text" type="text" placeholder="Your Name" />
        </div>
        <div class="input-text_block">
          <p class="text_form">Email:</p>
          <input class="input-text" type="email" placeholder="Your Email" />
        </div>
        <div class="input-text_block">
          <p class="text_form">Message:</p>
          <textarea
            class="input-text input-textarea"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button class="button-submit" type="submit">submit</button>
      </form>
    </div>
    <div class="map_yandex">
      <div class="container">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd94c273236254271d973f3cde47c5bcb17db4abd844545c3c3f84a4ba227f24&amp;source=constructor"
          width="100%"
          height="478"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.contacts_header {
  margin-top: 47px;
  background: linear-gradient(253.6deg, #98d0fc 2.46%, #3481d7 93.24%);
  background: url(../assets/img/main/contacts/background_contact.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 51px 0 49px;
}
.heading-contacts {
  font-weight: 500;
  font-size: 44px;
  text-align: center;
  line-height: 74px;
  letter-spacing: 0.04em;
  color: #ffffff;
  padding-bottom: 16px;
}
.text_top_contacts {
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.6);
  max-width: 780px;
  margin: 0px auto;
}

.contacts_form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 57px 0px 96px;
}
.img_contact_us {
  margin-bottom: 56px;
}
.contacts_info_block {
  margin-bottom: 40px;
}
.heading-mini_contacts {
  letter-spacing: 0.04em;
  margin-bottom: 24px;
}
.p_text_contacts {
  font-weight: 300;
  letter-spacing: 0.04em;
  opacity: 0.6;
  max-width: 300px;
}
.contacts_info_block ol li a {
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.04em;
  color: #1f3f68;
}

.phone_a::before {
  content: url(../assets/img/main/contacts/phone.svg);
  margin-right: 18px;
}
.site_a::before {
  content: url(../assets/img/main/contacts/site.svg);
  margin-right: 18px;
}
.email_a::before {
  content: url(../assets/img/main/contacts/email.svg);
  margin-right: 18px;
}

.form {
  padding: 56px;
  background: #ffffff;
  box-shadow: 5px 10px 50px rgba(16, 112, 177, 0.2);
  border-radius: 10px;
  max-width: 540px;
  flex-basis: 540px;
  box-sizing: border-box;
}
.heading-mini_form {
  letter-spacing: 0.04em;
  margin-bottom: 48px;
}
.input-text_block {
  margin-bottom: 32px;
}
.text_form {
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.04em;
  color: #1f3f68;
  opacity: 0.8;
  margin-bottom: 8px;
}

.input-text {
  border: 1px solid #356ead;
  box-sizing: border-box;
  border-radius: 10px;
  opacity: 0.4;
  width: 100%;
  height: 72px;
  font-size: 30px;
}
.input-textarea {
  resize: none;
  height: 144px;
}
.input-text::placeholder {
  padding: 21px 36px;
  font-weight: 300;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.04em;
  color: #1f3f68;
  opacity: 0.4;
}
.button-submit {
  background: #5a98d0;
  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  outline: none;
  padding: 23px 0;
  margin-top: 40px;
  width: 100%;
}
.map_yandex {
  margin-bottom: 64px;
}
</style>
