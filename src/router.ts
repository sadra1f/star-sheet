import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/print-a3",
      name: "print-a3",
      component: () => import("@/views/PrintViewA3.vue"),
    },
    {
      path: "/print-a4",
      name: "print-a4",
      component: () => import("@/views/PrintViewA4.vue"),
    },
    {
      path: "/print-a5",
      name: "print-a5",
      component: () => import("@/views/PrintViewA5.vue"),
    },
  ],
});

export default router;
