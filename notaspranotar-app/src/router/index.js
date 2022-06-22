import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PoemsView from "../views/PoemsView.vue";
import MapView from "../views/MapView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sobre",
      name: "about",
      component: AboutView,
    },
    {
      path: "/poemas",
      name: "poems",
      component: PoemsView,
    },
    {
      path: "/mapa",
      name: "map",
      component: MapView,
    },
  ],
});

export default router;
