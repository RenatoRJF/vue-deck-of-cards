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

@Component({
  components: {
    Container,
    NewDeckForm
  }
})
export default class Cards extends Vue {
  private title = "Card";

  @deck.Getter
  private getDeckId!: string;

  @deck.Action
  private createDeck!: (cards: string) => void;

  async onSubmit(event: { cards: string }) {
    const { cards } = event;

    await this.createDeck(cards);

    this.$router.push({ path: `/deck/${this.getDeckId}` });
  }
}
</script>
