export default {
  path: "/admin",
  name: "Admin",
  component: () => import("@/layouts/admin.vue"),
  redirect: "/admin/dashboard",
  children: [
    {
      path: "dash",
      name: "Admin Dashboard",
      component: () => import("@/pages/admin/dashboard.vue"),
    },
  ],
};
