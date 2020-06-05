import Vue from "vue";
import Vuex from "vuex";

import Deck from "./modules/deck";
import Card from "./modules/card";
import Pile from "./modules/pile";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    deck: Deck,
    card: Card,
    pile: Pile
  }
});
