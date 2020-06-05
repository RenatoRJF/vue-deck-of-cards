import { shallowMount } from "@vue/test-utils";
import NewDeckForm from "@/components/NewDeckForm.vue";

describe("NewDeckForm.vue", () => {
  it("renders without crashing", () => {
    const wrapper = shallowMount(NewDeckForm);
    expect(wrapper).toMatchSnapshot();
  });
});
