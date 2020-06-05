import { DEFAULT_SUITS, DEFAULT_VALUES } from "../helpers/constants";

export default function isCardValid(card: string): boolean {
  let currentCard = card;

  // edge case for 10 value
  if (currentCard.startsWith("10")) {
    currentCard = currentCard.replace("10", "0");
  }

  // it has two characters
  if (currentCard.length < 2) return false;

  // it starts with a valid value
  if (!DEFAULT_VALUES.includes(currentCard.charAt(0).toLocaleUpperCase())) return false;

  // it ends with a valid suit
  if (!DEFAULT_SUITS.includes(currentCard.charAt(1).toLocaleUpperCase())) return false;

  return true;
}
