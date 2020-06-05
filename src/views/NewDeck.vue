<template>
  <Container :title="title">
    <h1>New Deck</h1>
  </Container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Container from "../components/Container.vue";

@Component({
  components: {
    Container
  }
})
export default class NewDeck extends Vue {
  private title = "Cards";
}
</script>
