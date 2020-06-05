import { groupBy } from "lodash";
import Combinatorics from "js-combinatorics";

import { Card } from "../types/card";

export default function fullHouseCombination(collection: Card[]): Card[][] {
  const possibilities = [];
  let possibility;

  const cmb = Combinatorics.combination(collection, 5);

  while ((possibility = cmb.next())) possibilities.push(possibility);

  return possibilities.filter(p => {
    const groups = groupBy(p, "value");
    const values = Object.keys(groups);
    const occurrences = values.map(v => groups[v].length);
    return (
      values.length >= 2 &&
      ((occurrences[0] === 2 && occurrences[1] === 3) ||
        (occurrences[0] === 3 && occurrences[1] === 2))
    );
  });
}
