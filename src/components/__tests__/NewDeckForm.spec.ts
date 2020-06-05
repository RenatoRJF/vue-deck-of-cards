import { shallowMount, mount } from "@vue/test-utils";
import NewDeckForm from "@/components/NewDeckForm.vue";

describe("NewDeckForm.vue", () => {
  it("renders without crashing", () => {
    const wrapper = shallowMount(NewDeckForm);
    expect(wrapper).toMatchSnapshot();
  });

  it("emit onSubmit event when form is submitted", async () => {
    const wrapper = mount(NewDeckForm);

    wrapper.vm.$emit("onSubmit", {});

    wrapper.find("[data-card]").setValue("2S");
    wrapper.find("[data-rotation-card]").setValue("3H");

    wrapper.find("form").trigger("submit.prevent");

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("onSubmit")).toBeTruthy();
  });
});
