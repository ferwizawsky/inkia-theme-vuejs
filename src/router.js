import { createRouter, createWebHistory } from "vue-router";
import { useOption } from "@/stores/option";

import adminRoute from "@/routes/admin";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/admin",
    // component: () => import("./pages/index.vue"),
    // meta: {
    //   public: false,
    // },
  },
  {
    path: "/login2",
    name: "Login2",
    component: () => import("@/pages/login2.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/404",
    name: "404 Not Found",
    component: () => import("@/pages/404.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
  adminRoute,
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.name + " | " + useOption().name;
  const token = useOption().token;

  if (!to.meta?.public && !token) {
    next("/login");
  } else next();
  // console.log(token);
  // next();
});

export default router;
