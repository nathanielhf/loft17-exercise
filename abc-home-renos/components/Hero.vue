<template>
  <div class="hero" >
    <div class="hero-gradient">
      <div class="hero-text">
        <h1>ABC Home Renovations</h1>
        <p>Let us transform your house into the dream home you've always wanted. We take care of the renovation so you can focus on enjoying the new space!</p>
        <Button class="abc-blue"/>
      </div>
    </div>
    <div class="hero-image">
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 982px;
  align-items: center;
  display: flex;
}
.hero-gradient {
  width: 75%;
  background-image: linear-gradient(to right, white 45%, transparent);
}
.hero-image {
  background-image: url(/_nuxt/assets/images/abc-hero.jfif);
  display: block;
  position: absolute;
  top: -140px;
  right: -60px;
  width: 1462px;
  height: 1130px;
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
}
.hero-text {
  width: 486px;
  background-image: linear-gradient(to right, white, transparent);
  padding: 50% 0px;
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