<template>
  <Container :title="title">
    <NewDeckForm @onSubmit="onSubmit" />
  </Container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import Container from "../components/Container.vue";
import NewDeckForm from "../components/NewDeckForm.vue";

@Component({
  components: {
    Container,
    NewDeckForm
  }
})
export default class Cards extends Vue {
  private title = "Card";

  onSubmit(event: EventTarget) {
    console.log(event);
  }
}
</script>
