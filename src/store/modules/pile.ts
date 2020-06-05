import { Module, VuexModule, Action } from "vuex-module-decorators";
import api from "../../services/api";

interface AddToPileProps {
  deckId: string;
  pileName: string;
  cards: string;
}

@Module({ namespaced: true })
export default class Pile extends VuexModule {
  @Action
  async addCardsToPile({ deckId, pileName, cards }: AddToPileProps) {
    try {
      await api.get(`deck/${deckId}/pile/${pileName}/add/?cards=${cards}`);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Action
  async getPiles({ deckId, pileName }: { deckId: string; pileName: string }) {
    try {
      const { data } = await api.get(`deck/${deckId}/pile/${pileName}/list`);
      const cards = data.piles[pileName].cards.map((card: { code: string }) => ({
        value: card.code.startsWith("0") ? "10" : card.code.charAt(0),
        suit: card.code.charAt(2) || card.code.charAt(1)
      }));

      if (pileName === "main") {
        this.context.commit("setDeckCards", cards);
        return;
      }

      this.context.commit("setRotationCard", cards[0]);
    } catch (error) {
      throw new Error(error);
    }
  }
}
