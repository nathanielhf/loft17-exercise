<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/vue-splide/css';

// export default defineComponent( {
//   components: { Splide, SplideSlide },
// } );

//const config = useRuntimeConfig() 

import images from '@/assets/images-home-carousel.json'

// interface ImageProps {
//   index?: number;
//   url?: string;
// }

// const props = defineProps<ImageProps>();

</script>

<template>
  <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
    <SplideSlide 
      v-for="(image) in images" 
      :src="image" 
    />
  </Splide>
</template>

