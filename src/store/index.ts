import Vue from "vue";
import Vuex from "vuex";

import Deck from "./modules/deck";
import Card from "./modules/card";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    deck: Deck,
    card: Card
  }
});
