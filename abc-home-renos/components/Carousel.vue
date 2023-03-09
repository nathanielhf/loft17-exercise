<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import images from '@/images-home-carousel.json'

</script>

<template>
  <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
    <SplideSlide v-for="(image) in images" >
      <img :src="'/images/home-page-carousel/' + image" >
    </SplideSlide>
  </Splide>
</template>

