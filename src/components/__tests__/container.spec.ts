import { shallowMount } from "@vue/test-utils";
import Container from "@/components/Container.vue";

describe("Container.vue", () => {
  it("renders props.title when passed", () => {
    const title = "Cards";
    const wrapper = shallowMount(Container, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
    expect(wrapper).toMatchSnapshot();
  });
});
