import { mount, Wrapper } from "@vue/test-utils";
import NewDeckForm from "@/components/NewDeckForm.vue";

describe("NewDeckForm.vue", () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = mount(NewDeckForm);
  });

  test("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("empty form", () => {
    test("show required error message", async () => {
      let requiredMessage = wrapper.find(".error__message");
      expect(requiredMessage.exists()).toBeFalsy();

      wrapper.find("form").trigger("submit.prevent");
      await wrapper.vm.$nextTick();

      requiredMessage = wrapper.find(".error__message");
      expect(requiredMessage.text()).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("form filled up", () => {
    let input1: Wrapper<Vue>;
    let rotationInput: Wrapper<Vue>;
    let form: Wrapper<Vue>;

    beforeEach(() => {
      form = wrapper.find("form");
      input1 = wrapper.find("#input0");
      rotationInput = wrapper.find("#rotation");
    });

    test("update props values when form is filled", async () => {
      const input1Value = "2S";
      const rotationInputValue = "3H";

      expect(wrapper.vm.$data.cardsList[0].value).toBe("");
      expect(wrapper.vm.$data.rotationCard.value).toBe("");

      input1.setValue(input1Value);
      rotationInput.setValue(rotationInputValue);

      await wrapper.vm.$nextTick();

      expect(wrapper.vm.$data.cardsList[0].value).toBe(input1Value);
      expect(wrapper.vm.$data.rotationCard.value).toBe(rotationInputValue);
      expect(wrapper).toMatchSnapshot();
    });

    test("show `invalid card` error message", async () => {
      let invalidFieldMessage = wrapper.find(".input__error-message");
      input1.setValue("2X");

      expect(invalidFieldMessage.exists()).toBeFalsy();

      form.trigger("submit.prevent");
      await wrapper.vm.$nextTick();
      invalidFieldMessage = wrapper.find(".input__error-message");

      expect(invalidFieldMessage.text()).toBeTruthy();
      expect(wrapper).toMatchSnapshot();
    });

    test("emit `onSubmit` event when form is submitted", async () => {
      input1.setValue("4S");
      rotationInput.setValue("5H");
      form.trigger("submit.prevent");

      await wrapper.vm.$nextTick();

      expect(wrapper.emitted("onSubmit")).toBeTruthy();
    });
  });
});
