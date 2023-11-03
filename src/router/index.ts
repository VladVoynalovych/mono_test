import { createRouter, createWebHashHistory } from "vue-router";
import RateProductPage from "@/pages/RateProductPage/index.vue";
import ReviewsPage from "@/pages/ReviewsPage/index.vue";

const routes = [
  {
    path: "/",
    component: RateProductPage,
  },
  {
    path: "/reviews",
    component: ReviewsPage,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
