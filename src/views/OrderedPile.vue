<template>
  <Container :title="title">
    <h1>Ordered Pile</h1>
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
export default class OrderedPile extends Vue {
  private title = "Ordered Pile";
}
</script>
