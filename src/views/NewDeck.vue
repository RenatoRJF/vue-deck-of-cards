<template>
  <Container :title="title">
    <NewDeckForm @onSubmit="onSubmit" />
  </Container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";

import Container from "../components/Container.vue";
import NewDeckForm from "../components/NewDeckForm.vue";

const deck = namespace("deck");
const card = namespace("card");
const pile = namespace("pile");

@Component({
  components: {
    Container,
    NewDeckForm
  }
})
export default class Cards extends Vue {
  private title = "Card";

  @deck.Action
  private createDeck!: (cards: string) => Promise<string>;

  @card.Action
  private createCards!: (params: { deckId: string; cards: string }) => void;

  @pile.Action
  private addCardsToPile!: (params: { deckId: string; pileName: string; cards: string }) => void;

  async onSubmit(event: { cards: string; rotationCard: string }) {
    const { cards, rotationCard } = event;

    const deckId = await this.createDeck(cards);
    await this.createCards({ deckId, cards });
    await this.addCardsToPile({ deckId, pileName: "main", cards });
    await this.addCardsToPile({
      deckId,
      pileName: "rotation",
      cards: rotationCard
    });

    this.$router.push({ path: `/deck/${deckId}` });
  }
}
</script>
