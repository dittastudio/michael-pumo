<script lang="ts" setup>
import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'

const [container] = useKeenSlider({
  loop: false,
  mode: 'free-snap',
  slides: {
    perView: 4,
    spacing: 15,
  },
})
</script>

<template>
  <div
    ref="container"
    class="keen-slider !overflow-visible"
  >
    <div
      v-for="i in 10"
      :key="i"
      class="keen-slider__slide w-full aspect-[2/3] bg-secondary rounded-5"
    >
      {{ i }}
    </div>
  </div>
</template>
