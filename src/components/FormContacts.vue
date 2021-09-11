<template>
  <form class="contacts-form" @submit="checkForm($event)">
    <div class="contacts-form__wrapper">
      <h4 class="contacts-form__title">SEND US MESSAGE</h4>
      <div class="contacts-form__container">
        <label class="contacts-form__label">
          <p>Full Name:</p>
          <input
            class="contacts-form__input"
            type="text"
            placeholder="Your Name"
            v-model="userName"
            :class="{ 'error-input': errors.name }"
          />
          <transition name="fade">
            <p class="error" v-if="errors.name">{{ errors.name }}</p>
          </transition>
        </label>
        <label class="contacts-form__label">
          <p>Email:</p>
          <input
            class="contacts-form__input"
            type="email"
            placeholder="Your Email"
            v-model="email"
            :class="{ 'error-input': errors.email }"
          />
          <transition name="fade">
            <p class="error" v-if="errors.email">
              {{ errors.email }}
            </p>
          </transition>
        </label>
        <label class="contacts-form__label">
          <p>Message:</p>
          <textarea
            class="contacts-form__input contacts-form__input_size_textarea"
            placeholder="Your Message"
            v-model="userText"
          ></textarea>
        </label>
      </div>
      <button type="submit" class="contacts-form__btn">
        SUBMIT
      </button>
      <v-dialog v-model="dialog" max-width="500px">
        <div class="dialog">
          <v-card color="#5a98d0" dark class="pa-6">
            Done! Wait for an answer
          </v-card>
          <button
            class="dialog__btn dialog__btn_position-done"
            @click="dialog = false"
          >
            ✕
          </button>
        </div>
      </v-dialog>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "FormContacts",
  data() {
    return {
      userName: null,
      email: null,
      userText: null,
      errors: {},
      dialog: false,
    };
  },
  methods: {
    checkForm(event) {
      event.preventDefault();
      this.errors = {};

      if (!this.userName) {
        this.errors.name = "Name required.";
      }
      if (!this.email) {
        this.errors.email = "Email required.";
      } else if (!this.validEmail(this.email)) {
        this.errors.email = "Valid email required.";
      }

      if (!Object.keys(this.errors).length) {
        this.dialog = true;
        setTimeout(() => (this.dialog = false), 2000);
        this.submit();
      }
    },

    validEmail(email) {
      const checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return checkEmail.test(email);
    },

    submit() {
      const data = {
        name: this.userName,
        email: this.email,
        comment: this.userText,
      };
      axios
        .post("https://vue-study.skillbox.cc/api/orders", data, {
          params: {
            userAccessKey: this.getAccessKey,
          },
        })
        .then((data) => {
          /* this.dialog = true;
        setTimeout(() => (this.dialog = false), 2000); */
          console.log(data);
        })
        .catch((data) => {
          console.log(data.response.data.error);
        });
    },
  },

  computed: {
    ...mapGetters(["getAccessKey"]),
  },

  mounted() {
    this.$store.dispatch("accessKeyData");
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/formContacts";
.dialog-footer {
  position: relative;
  &__btn {
    position: absolute;
    top: 30px;
    right: 30px;
    color: #5a98d0;
    background: #ffffff;
    width: 30px;
    height: 30px;
    border: 1px solid #5a98d0;
    transition: 0.4s;
    border-radius: 10px;
    &:hover {
      background: #5a98d0;
      color: #ffffff;
    }
  }
}
.error {
  border-radius: 0 0 10px 10px;
  color: white;
  text-align: center;
}
.error-input {
  border: 1px solid red;
  border-radius: 10px 10px 0 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
