import { createRouter, createWebHashHistory } from "vue-router";
import RateProduct from "@/components/RateProduct/index.vue";

const routes = [
  {
    path: "/",
    component: RateProduct,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
