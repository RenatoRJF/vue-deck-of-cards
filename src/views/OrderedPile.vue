<template>
  <div>
    <router-link to="/">New Deck</router-link>

    <Container :title="'Ordered Pile'">
      <div class="pile">
        <Card v-for="(card, index) in cards" :key="index" :index="index" :data="card" />
      </div>

      <div class="pile__details">
        <h3>Rotation Card: {{ rotationCard.value }}{{ rotationCard.suit }}</h3>

        <h3>High Card: {{ highestCard }}</h3>

        <div class="full__house-combination">
          <h3 v-if="fullHouseComb.length === 0">Full House Combo: None</h3>
          <div v-else>
            <h3>Full House Combo:</h3>

            <ul class="comnination__list">
              <li v-for="combination in fullHouseComb" :key="combination">{{ combination }}</li>
            </ul>

            <p>
              <strong>{{ fullHouseComb.length }}</strong> combinations
            </p>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Container from "../components/Container.vue";
import Card from "../components/Card.vue";
import { Card as CardType } from "../types/card";

import { orderCards, fullHouseCombination } from "../helpers";

const pile = namespace("pile");

@Component({
  components: {
    Container,
    Card
  }
})
export default class OrderedPile extends Vue {
  private fullHouseComb: string[] = [];
  private rotationCard = "";
  private cards: CardType[] = [];
  private highestCard = "";

  async mounted() {
    const { deckId } = this.$route.params;

    await this.getPiles({ deckId, pileName: "main" });
    await this.getPiles({ deckId, pileName: "rotation" });

    this.cards = orderCards(this.getDeckCards, { value: "2", suit: "H" });
    this.rotationCard = this.getRotationCard;
    this.highestCard = `${this.cards[0].value}${this.cards[0].suit}`;

    if (this.cards.length >= 5) {
      this.fullHouseComb = fullHouseCombination(this.cards).map(h =>
        h.map(c => `${c.value}${c.suit}`).join(", ")
      );
    }
  }

  @pile.Getter
  private getDeckCards!: CardType[];
  @pile.Getter
  private getRotationCard!: string;

  @pile.Action
  private getPiles!: (params: { deckId: string; pileName: string }) => void;
}
</script>

<style lang="scss" scoped>
.pile {
  margin: 20px 50px;
  background-color: #d8d8d8;
  border: 1px solid #979797;
  display: flex;
  flex-wrap: wrap;
}

.pile__details {
  padding: 20px 0 50px 100px;

  h3 {
    font-size: 25px;
  }
}

.comnination__list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  li {
    display: block;
    background-color: #fff;
    padding: 5px 10px;
    margin: 5px;
    font-weight: bold;
    color: #545454;
  }
}
</style>
