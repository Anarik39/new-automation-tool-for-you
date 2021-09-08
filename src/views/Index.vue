<template>
  <main>
    <section class="promo">
      <v-container>
        <div class="promo__wrapper">
          <h1 class="promo__title">New Automation Tool for Your</h1>
          <p class="promo__text text-index">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            tristique vulputate ultrices ut mauris tellus at. Posuere
            sollicitudin odio tellus elit.
          </p>
          <button @click="scrollToProjects" class="promo__btn">
            See Our Project
          </button>
        </div>
      </v-container>
    </section>

    <section class="company-about">
      <v-container>
        <div class="company-about__wrapper">
          <h3 class="title-index">
            What we do to help our client grow in digital era
          </h3>
          <div class="company-about__cards">
            <div class="card">
              <img
                class="card__img"
                src="../assets/img/main/index/cards/card-1.svg"
                alt="photo"
              />
              <div class="card__info">
                <h4 class="card__title">
                  Make Your business To Be Better Famous In Internet
                </h4>
                <p class="card__text text-index">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a class="card__link" href="#">Learn more</a>
              </div>
            </div>
            <div class="card">
              <img
                class="card__img"
                src="../assets/img/main/index/cards/card-2.svg"
                alt="photo"
              />
              <div class="card__info">
                <h4 class="card__title">
                  Bring Technology To Your Comfrotable Home
                </h4>
                <p class="card__text text-index">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a class="card__link" href="#">Learn more</a>
              </div>
            </div>
            <div class="card">
              <img
                class="card__img"
                src="../assets/img/main/index/cards/card-3.svg"
                alt="photo"
              />
              <div class="card__info">
                <h4 class="card__title">
                  Build Your Digital Product That Suitable For Your Need
                </h4>
                <p class="card__text text-index">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a class="card__link" href="#">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <section class="projects">
      <v-container>
        <div class="projects__wrapper">
          <div class="projects__info">
            <h3 class="title-index">Our Finished Project</h3>
            <p class="projects__text text-index">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div class="projects__items">
            <div
              class="project-item"
              v-for="(item, id) in projects"
              :key="id"
              :class="{ 'project-item_first': id === 0 }"
              @click="openDialogProject(id)"
            >
              <img class="project-item__img" :src="item.img" alt="photo" />
              <p
                :class="{
                  'project-item__text_position-first': id === 0,
                  'project-item__text_position-parent': id === 1 || id === 2,
                }"
                class="project-item__text"
              >
                {{ item.text }}
              </p>
            </div>
            <v-dialog v-model="dialog" width="50%">
              <img :src="imgProject" alt="photo" />
              <v-btn color="blue" dark @click="dialog = false">
                CLOSE
              </v-btn>
            </v-dialog>
          </div>
        </div>
      </v-container>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      imgProject: null,
      dialog: false,
      projects: [
        {
          img: require("../assets/img/main/index/projects/item-1.png"),
          text: "Car-Rapetition App",
        },
        {
          img: require("../assets/img/main/index/projects/item-2.png"),
          text: "Sparklite App",
        },
        {
          img: require("../assets/img/main/index/projects/item-3.png"),
          text: "Car-Rapetition App",
        },
      ],
    };
  },
  methods: {
    scrollToProjects() {
      document
        .querySelector(".projects")
        .scrollIntoView({ behavior: "smooth" });
    },
    openDialogProject(id) {
      this.imgProject = this.projects[id].img;
      this.dialog = true;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mainIndex";
</style>
