import { Module, VuexModule, Action } from "vuex-module-decorators";
import api from "../../services/api";

@Module({ namespaced: true })
export default class Card extends VuexModule {
  @Action
  async createCards({ deckId, cards }: { deckId: string; cards: string }) {
    if (!cards) return;

    const numOfCards = cards.split(",").length;

    try {
      // Draw cards into the deck
      await Promise.all(
        [...Array(numOfCards).keys()].map(() => api.get(`deck/${deckId}/draw/?cards=${cards}`))
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
