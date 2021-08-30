import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "*",
    redirect: "/",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    // beforeEnter: (to, from, next) => {
    //   if (!store.getters.isAuthenticated) {
    //     next();
    //   } else {
    //     next("/");
    //   }
    // },
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/Account.vue"),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(store.getters.isAuthenticated);

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.getters.isAuthenticated
  ) {
    next({ name: "Login" });
  } else {
    next();
  }
});
export default router;
