<template>
  <div class="app__container">
    <header>
      <h1>{{ title }}</h1>
    </header>

    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Container extends Vue {
  @Prop() title!: string;
}
</script>

<style lang="scss" scoped>
.app__container {
  max-width: 1366px;
  margin: 0 auto;
  background-color: #dff4f7;

  header {
    background-color: #1e7500;

    h1 {
      color: #fae500;
      font-size: 30px;
      padding: 20px 0;
      text-align: center;
      text-transform: uppercase;
    }
  }
}
</style>
