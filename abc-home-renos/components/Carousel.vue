<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import images from '@/images-home-carousel.json'

</script>

<template>
  <div class="splide-wrapper">
    <Splide :options="{ rewind: true, type: 'loop' }" aria-label="Vue Splide Example">
      <SplideSlide v-for="(image) in images" >
        <div class="image-wrapper">
          <img :src="'/images/home-page-carousel/' + image" >
        </div>
        <p class="image-title">{{ (image.split('.'))[0] }}</p>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped>
.splide__slide {
  width: 405px!important;
  height: 375px;
  padding: 16px;
}
.splide__slide .image-wrapper {
  /* width: 405px!important;
  height: 375px; */
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(217, 217, 217, 1);
  box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.25);
}
.splide__slide .image-wrapper img {
  height: 100%;
}
.splide-wrapper:deep() .splide__arrows.splide__arrows--ltr {
  position: absolute;
  width: 120px;
  right: 0;
  top: -20px;
}
.splide-wrapper:deep() .splide__arrow {
  width: 40px;
  height: 40px;
  border: #213D62 solid 3px;
  background-color: transparent;
}
.splide-wrapper:deep() .splide__arrow svg {
  fill: #213D62;
  font-size: 20px;
}
.image-title {
  font-size: 24px;
  font-weight: 400;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: center;
  color: #213D62;
}
.splide-wrapper:deep() .splide__pagination {
  display: none;
}
</style>