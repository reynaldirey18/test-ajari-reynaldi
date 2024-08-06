// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/index.vue";
import Library from "../views/library/index.vue";
import Login from "../views/auth/login.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/home", name: "Home", component: Home },
  { path: "/library", name: "Library", component: Library },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
