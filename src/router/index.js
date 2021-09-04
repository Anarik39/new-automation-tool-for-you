import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contacts.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const getTitleByRouteName = (routeName) => {
  return {
    Index: "Page index",
    Contacts: "Page Contacts",
  }[routeName];
};

router.afterEach((to) => {
  document.title = getTitleByRouteName(to.name);
});

export default router;
