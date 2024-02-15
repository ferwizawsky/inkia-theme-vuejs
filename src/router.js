import { createRouter, createWebHistory } from "vue-router";
// import { useOption } from "@/stores/option";
// import { useAuth } from "@/stores/auth";

import adminRoute from "@/routes/admin";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/index.vue"),
    meta: {
      public: false,
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
  adminRoute,
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // document.title = to.name + " | " + useOption().name;
  // const token = useAuth().token;

  // if (!to.meta?.public && !token) {
  //   next("/login");
  // } else next();
  // console.log(token);
  next();
});

export default router;
