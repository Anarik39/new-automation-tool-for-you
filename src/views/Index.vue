<template>
  <main>
    <div class="top">
      <div class="container top_content">
        <div class="top_info">
          <h1 class="top_heading">New Automation Tool for Your</h1>
          <p class="text-top">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            tristique vulputate ultrices ut mauris tellus at. Posuere
            sollicitudin odio tellus elit.
          </p>
          <form>
            <button class="button_top_index">See Our Project</button>
          </form>
        </div>
      </div>
    </div>

    <div class="what-we-do container">
      <h3 class="heading heading_content">
        What we do to help our client grow in digital era
      </h3>
      <div class="cards">
        <div class="card">
          <img class="img_card" src="../assets/img/card_1.svg" alt="card_1" />
          <h4 class="heading-mini heading-mini_what-we-do">
            Make Your business To Be Better Famous In Internet
          </h4>
          <p class="text text_what-we-do">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a class="link_learn_more" href="#">Learn more</a>
        </div>
        <div class="card">
          <img class="img_card" src="../assets/img/card_2.svg" alt="card_2" />
          <h4 class="heading-mini heading-mini_what-we-do">
            Bring Technology To Your Comfrotable Home
          </h4>
          <p class="text text_what-we-do">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a class="link_learn_more" href="#">Learn more</a>
        </div>
        <div class="card">
          <img class="img_card" src="../assets/img/card_3.svg" alt="card3" />
          <h4 class="heading-mini heading-mini_what-we-do">
            Build Your Digital Product That Suitable For Your Need
          </h4>
          <p class="text text_what-we-do">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a class="link_learn_more" href="#">Learn more</a>
        </div>
      </div>
    </div>
    <div class="project container">
      <h3 class="heading heading_content">Our Finished Project</h3>
      <p class="text text_project">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <div class="project_item">
        <img class="project_img" src="../assets/img/item_1.png" alt="photo" />
        <p class="text_on_img text_on_img_first">Smart Home Installation</p>
      </div>
      <div class="project_parent">
        <div class="project_item project_item_margin">
          <img class="project_img" src="../assets/img/item_2.png" alt="photo" />
          <p class="text_on_img text_on_img_parent">Sparklite App</p>
        </div>
        <div class="project_item">
          <img class="project_img" src="../assets/img/item_3.png" alt="photo" />
          <p class="text_on_img text_on_img_parent">Car-Rapetition App</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mainIndex";
</style>
