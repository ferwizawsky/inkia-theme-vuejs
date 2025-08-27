import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/style.css";
import App from "./App.vue";
import router from "@/router";

const pinia = createPinia();
const app = createApp(App);
if (localStorage.getItem("theme") == "dark")
  document.documentElement.classList.add("dark");
app.use(router);
app.use(pinia);
app.mount("#app");
