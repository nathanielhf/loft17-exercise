<script setup lang="ts">
interface ButtonProps {
  color?: string
}

const props = defineProps<ButtonProps>();
</script>

<template>
  <div class="button abc-blue"></div>
</template>

<style scoped>
.button {
  width: 188px;
  height: 56px;
  border-radius: 12px;
}
</style>