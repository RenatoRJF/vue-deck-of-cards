import { Module, VuexModule, Action } from "vuex-module-decorators";
import api from "../../services/api";

@Module({ namespaced: true })
export default class Deck extends VuexModule {
  @Action
  async createDeck(cards: string[]): Promise<string> {
    try {
      const { data } = await api.get(`deck/new/?cards=${cards}`);

      return data.deck_id;
    } catch (error) {
      throw new Error(error);
    }
  }
}
