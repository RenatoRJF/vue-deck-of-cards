<template>
  <div class="card">
    <div class="card__content" :style="`animation-delay: ${index / 10}s`">
      <div class="card__value-suit">
        <span class="value">{{ data.value }}</span>
        <img
          :src="require(`../assets/${data.suit}.png`)"
          class="suit"
          alt="card symbol"
          :data-img="`${data.suit}.png`"
        />
      </div>

      <div class="card__value-suit bottom">
        <span class="value">{{ data.value }}</span>
        <img :src="require(`../assets/${data.suit}.png`)" class="suit" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Card as CardType } from "../types/card";

@Component
export default class Card extends Vue {
  @Prop() data!: CardType;
  @Prop() index!: number;
}
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;
  box-sizing: border-box;
  width: 20%;
  min-width: 230px;
  opacity: 1;
}

@keyframes animate-card {
  0% {
    opacity: 0;
  }
  99% {
    opacity: 1;
  }
}

.card__content {
  background-color: #fff;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: animate-card 0.3s ease-in;
  -o-animation: animate-card 0.3s ease-in;
  -moz-animation: animate-card 0.3s ease-in;
  -webkit-animation: animate-card 0.3s ease-in;
}

.card__value-suit {
  padding: 20px 30px;
  display: flex;
  align-items: center;

  .value {
    font-size: 35px;
    font-weight: bold;
  }

  .suit {
    transform: rotate(180deg);
    margin: 0 5px;
  }

  &.bottom {
    transform: rotate(180deg);
  }
}
</style>
