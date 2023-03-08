<template>
  <div class="button-menu">
    <div class="six-column">
      <Button class="abc-grey" />
      <Button class="abc-grey" />
      <Button class="abc-grey" />
      <Button class="abc-grey" />
      <Button class="abc-grey" />
      <Button class="abc-grey" />
    </div>
  </div>
</template>

<style scoped>
.button-menu {
  background-color: #EAEAEA;
  padding: 38px 0;
}
.six-column {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}


</style>