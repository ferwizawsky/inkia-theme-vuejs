export default {
  path: "/admin",
  name: "Admin",
  component: () => import("@/layouts/admin.vue"),
  redirect: "/admin/dashboard",
  children: [
    {
      path: "dashboard",
      name: "Admin Dashboard",
      component: () => import("@/pages/admin/dashboard.vue"),
    },
    {
      path: "dashboardchartjs",
      name: "Admin Dashboard Chart Js",
      component: () => import("@/pages/admin/dashboardChartJs.vue"),
    },
    {
      path: "invoice",
      name: "Admin invoice",
      component: () => import("@/pages/admin/invoice/index.vue"),
    },
    {
      path: "invoice/:name/:id",
      name: "Admin invoice Detail",
      component: () => import("@/pages/admin/invoice/id.vue"),
    },
    {
      path: "invoice/:name",
      name: "Admin invoice Action",
      component: () => import("@/pages/admin/invoice/id.vue"),
    },
  ],
};
