<template>
  <div class="page-wrapper">
    <Nav />
    <div class="main-wrapper">
      <slot />
    </div>
    <Footer />
    <Baseboard />
  </div>
</template>

<style>
  html {
    font-family: "Inter";
  }
</style>