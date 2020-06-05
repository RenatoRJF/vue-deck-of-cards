import { sortBy } from "lodash";

import { DEFAULT_SUITS, DEFAULT_VALUES } from "../helpers/constants";

import { Card } from "../types/card";

const getIndex = (item: string, list: string[]) => list.findIndex(s => s === item);

export default function orderCards(collection: Card[], rotation: Card) {
  // order values
  const rtValueIndex = getIndex(rotation.value, DEFAULT_VALUES);
  const values = [...DEFAULT_VALUES.slice(rtValueIndex), ...DEFAULT_VALUES.slice(0, rtValueIndex)];

  // order suits
  const rtSuitIndex = getIndex(rotation.suit, DEFAULT_SUITS);
  const suits = [...DEFAULT_SUITS.slice(rtSuitIndex), ...DEFAULT_SUITS.slice(0, rtSuitIndex)];

  // order cards by suit
  const sortedCollection = sortBy(collection, (item: Card) => suits.indexOf(item.suit));

  // order cards values
  return suits.reduce((acc, cur) => {
    const data = sortedCollection.filter((item: Card) => item.suit === cur);

    return acc.concat(sortBy(data, item => values.indexOf(item.value)) as []);
  }, []);
}
