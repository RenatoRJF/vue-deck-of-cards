import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: { name: "deck-new" }
  },
  {
    path: "/deck/new",
    name: "deck-new",
    component: () => import(/* webpackChunkName: "cards" */ "../views/NewDeck.vue")
  },
  {
    path: "/deck/:deckId",
    name: "ordered-pile",
    component: () => import(/* webpackChunkName: "ordered-pile" */ "../views/OrderedPile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
