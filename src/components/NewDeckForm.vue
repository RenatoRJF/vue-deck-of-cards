<template>
  <form class="cards__form" @submit.prevent="handleSubmit">
    <p v-if="isFormEmpty" class="error__message">
      Please, fill up at least one field width a valid card.
    </p>

    <div class="form__inputs">
      <label v-for="(card, index) in cardsList" :key="index" class="input__wrapper">
        <span>Card {{ index + 1 }}</span>

        <input
          data-card
          v-model="cardsList[index].value"
          placeholder="Enter card"
          :tabindex="index + 1"
          :class="{ error: !cardsList[index].isValid }"
        />

        <p v-if="!cardsList[index].isValid" class="input__error-message">Invalid card</p>
      </label>
    </div>

    <div class="rotation__card">
      <h3>Rotation Card</h3>

      <div class="rotation__input">
        <input
          data-rotation-card
          placeholder="Enter Card"
          v-model="rotationCard.value"
          tabindex="11"
          :class="{ error: !rotationCard.isValid }"
        />

        <p v-if="!rotationCard.isValid" class="input__error-message">Invalid card</p>
      </div>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import Container from "../components/Container.vue";
import NewDeckForm from "../components/NewDeckForm.vue";
import { Card } from "../types/card";
import { isCardValid } from "../helpers";

@Component({
  components: {
    Container,
    NewDeckForm
  }
})
export default class Cards extends Vue {
  private cardsList = [...Array(10).keys()].map(
    (): Card => ({ value: "", suit: "", isValid: true })
  );
  private rotationCard = { value: "", suit: "", isValid: true };
  private isFormEmpty = false;
  private onSubmit!: (event: EventTarget) => void;

  async handleSubmit() {
    const cards = this.cardsList.filter(card => card.value);
    // Validate if form is empty
    this.isFormEmpty = cards.length === 0;
    if (this.isFormEmpty) return;

    // validate if there is some field invalid
    this.cardsList = this.cardsList.map(card => ({
      ...card,
      isValid: card.value ? isCardValid(`${card.value}${card.suit}`) : true
    }));

    if (this.cardsList.find(card => !card.isValid)) return;

    // validate if rotation card is valid
    this.rotationCard.isValid = isCardValid(`${this.rotationCard.value}${this.rotationCard.suit}`);

    if (this.rotationCard.value && this.rotationCard.isValid) {
      // add rotation card to list of cards
      const formattedCards =
        cards
          .map(card => (card.value.startsWith("10") ? card.value.replace("10", "0") : card.value))
          .join(",") + `,${this.rotationCard.value}`;

      this.$emit("onSubmit", { cards: formattedCards, rotationCard: this.rotationCard.value });
      return;
    }

    this.rotationCard.isValid = false;
  }
}
</script>
<style lang="scss" scoped>
.cards__form {
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
}

.form__inputs {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

input {
  border: 1px solid #ccc;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  outline: none;
  padding: 10px;
  max-height: 37px;
  text-transform: uppercase;
  transition: border-color 0.1s ease-in, box-shadow 0.1s ease-out;

  &:focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  &::placeholder {
    text-transform: capitalize;
  }

  &::-moz-placeholder {
    text-transform: capitalize;
  }

  &::-webkit-input-placeholder {
    text-transform: capitalize;
  }
}

.input__wrapper {
  box-sizing: border-box;
  padding: 5px;
  margin-bottom: 20px;
  width: calc(100% / 5);

  span {
    color: #b5b6b7;
    display: block;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  input {
    width: 100%;
  }
}

.rotation__card {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  h3 {
    color: #343434;
    font-size: 30px;
    margin-right: 20px;
  }

  input {
    width: 250px;
  }
}

.error__message {
  color: #cc0000;
  padding: 10px 0 0 30px;
}

input.error {
  border-color: #cc0000;
}

.input__error-message {
  color: #cc0000;
  position: relative;
  padding: 0;
  margin: 5px;
  font-size: 12px;
}

button {
  background-color: #1c0063;
  border: 0;
  border-radius: 20px;
  color: #fae500;
  display: block;
  font-size: 20px;
  font-weight: 600;
  margin: 50px auto;
  min-width: 150px;
  outline: none;
  padding: 15px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
}
</style>
