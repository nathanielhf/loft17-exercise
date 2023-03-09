<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/vue-splide/css';

export default defineComponent( {
  components: { Splide, SplideSlide },
} );
// const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
    <SplideSlide 
      v-for="(image) in IMAGES_HOME_CAROUSEL" 
      :src="image" 
    />
  </Splide>
</template>

