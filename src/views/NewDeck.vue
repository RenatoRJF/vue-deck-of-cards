<template>
  <Container :title="title">
    <NewDeckForm />
  </Container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import Container from "../components/Container.vue";
import NewDeckForm from "../components/NewDeckForm.vue";
import { Card } from "../types/card";

@Component({
  components: {
    Container,
    NewDeckForm
  }
})
export default class Cards extends Vue {
  private title = "Card";
  private cardsList = [...Array(10).keys()].map(
    (): Card => ({ value: "", suit: "", isValid: true })
  );
  private rotationCard = { value: "", suit: "", isValid: true };
  private isFormEmpty = false;

  onSubmit() {
    Promise.resolve();
  }
}
</script>
