<template>
  <div style="height: 139px">
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
  </div>
</template>

<style scoped>
.button-menu {
  background-color: #EAEAEA;
  padding: 38px 0;
  position: absolute;
  width: 100vw;
  left: 0;
}
.six-column {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 1280px;
  margin: 0 auto;
  position: relative;
}
</style>