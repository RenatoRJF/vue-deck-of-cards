import { mount } from "@vue/test-utils";
import Card from "@/components/Card.vue";
import { Card as CardType } from "../../types/card";

describe("Card.vue", () => {
  let card: CardType;

  beforeEach(() => {
    card = { value: "2", suit: "H" };
  });

  test("renders without crashing", () => {
    const wrapper = mount(Card, {
      propsData: { data: card }
    });
    expect(wrapper).toMatchSnapshot();
  });

  test("renders props when passed passed", async () => {
    const wrapper = mount(Card, {
      propsData: { data: card, index: 0 }
    });
    expect(wrapper.find(".value").text()).toBe(card.value);
    expect(wrapper.find("img").attributes("data-img")).toBe(`${card.suit}.png`);
    expect(wrapper).toMatchSnapshot();
  });
});
