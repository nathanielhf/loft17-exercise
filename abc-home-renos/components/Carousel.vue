<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import images from '@/images-home-carousel.json'

</script>

<template>
  <Splide :options="{ rewind: true, type: 'loop' }" aria-label="Vue Splide Example">
    <SplideSlide v-for="(image) in images" >
      <div class="image-wrapper">
        <img :src="'/images/home-page-carousel/' + image" >
      </div>
    </SplideSlide>
  </Splide>
</template>

<style scoped>
.splide__slide {
  width: auto!important;
  margin: 16px;
}
.splide__slide .image-wrapper {
  width: 405px!important;
  height: 375px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(217, 217, 217, 1);
  box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.25);
}
.splide__slide .image-wrapper img {
  height: 100%;
}
</style>