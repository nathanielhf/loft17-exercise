<template>
  <div class="hero" >
    <div class="hero-text">
      <h1>ABC Home Renovations</h1>
      <p>Let us transform your house into the dream home you've always wanted. We take care of the renovation so you can focus on enjoying the new space!</p>
      <Button class="abc-blue"/>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: url("@/assets/images/abc-hero.jfif");
  height: 990px;
  align-items: center;
  display: flex;
}
.hero-text {
  width: 486px;
}
.hero-text h1 {
  font-size: 80px;
  font-weight: 700;
  line-height: 87px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(33, 61, 98, 1);
  margin-bottom: 0;
}
.hero-text p {
  font-size: 24px;
  font-weight: 400;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: left;
}
.hero-image img {
  width: 1462px;
  height: 990px
}
</style>