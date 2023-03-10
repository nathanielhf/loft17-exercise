<template>
  <div class="baseboard"><a href="/">Privacy Policy</a></div>
</template>

<style scoped>
.baseboard {
  height: 84px;
  display: flex;
}
.baseboard::before {
  content: "";
  height: inherit;
  position: absolute;
  background-color: rgba(33, 61, 98, 1);
  width: 100vw;
  left: 0;
  z-index: -1;
}
.baseboard a {
  margin: auto 0;
  color: #FFFFFF;
  text-decoration: none;
}
</style>