import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import api from "../../services/api";

@Module({ namespaced: true })
export default class Deck extends VuexModule {
  private deckId!: string;

  @Mutation
  public setDeckId(id: string): void {
    this.deckId = id;
  }

  @Action
  async createDeck(cards: string[]) {
    try {
      const { data } = await api.get(`deck/new/?cards=${cards}`);

      this.context.commit("setDeckId", data.deck_id);
    } catch (error) {
      throw new Error(error);
    }
  }

  get getDeckId() {
    return this.deckId;
  }
}
