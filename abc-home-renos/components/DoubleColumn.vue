<script setup lang="ts">
interface DoubleColumnProps {
  title?: String,
  paragraph?: String,
  image?: String
}

const props = defineProps<DoubleColumnProps>();


</script>

<template>
  <div class="double-column">
    <div class="image-column">
      <slot name="image"></slot>
    </div>
    <div class="text-column">
      <header><slot name="header"></slot></header>
      <main><slot></slot></main>
      <Button class="abc-blue" />
    </div>
  </div>
</template>

<style scoped>
.reverse {
  grid-auto-flow: dense;
}
.reverse .image-column {
  grid-column: 2;
}
.image-column {
  width: 678px;
  height: 642px;
  display: flex;
}
.text-column {
  text-align: left;
  margin-left: 15%;
  margin-top: auto;
  margin-bottom: auto;
}
</style>