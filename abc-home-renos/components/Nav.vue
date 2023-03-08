<template>
  <nav class="nav-bar">
    <NuxtLink to="/"><Logo /></NuxtLink>
    <div class="nav-links">
      <NuxtLink to="/">Home</NuxtLink>|
      <NuxtLink to="/about">About</NuxtLink>|
      <NuxtLink to="/services">Services</NuxtLink>|
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>

.nav-bar {
  border-radius: 20px;
  border: 1px solid rgba(33, 61, 98, 0.2);
  display: flex;
  justify-content: space-between;
  padding: 20px 32px;
  box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.1);
}

.nav-links {
  font-size: 20px;
  text-align: right;
  margin: auto 0px;
  width: 390px;
  display: flex;
  justify-content: space-between;
}

</style>