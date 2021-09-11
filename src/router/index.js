import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/PageIndex.vue";

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
      import(/* webpackChunkName: "about" */ "../views/PageContacts.vue"),
  },
  {
    path: "*",
    name: "Page404",
    component: () =>
      import(/* webpackChunkName: "Page404" */ "../views/Page404.vue"),
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
    Page404: "Not found",
  }[routeName];
};

router.afterEach((to) => {
  document.title = getTitleByRouteName(to.name);
});

export default router;
