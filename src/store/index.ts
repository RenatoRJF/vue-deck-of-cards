import Vue from "vue";
import Vuex from "vuex";

import Deck from "./modules/deck";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    deck: Deck
  }
});
