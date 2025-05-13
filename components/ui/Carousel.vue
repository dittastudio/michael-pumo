<script lang="ts" generic="T" setup>
import type { KeenSliderOptions } from 'keen-slider'
import { useKeenSlider } from 'keen-slider/vue.es'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import 'keen-slider/keen-slider.min.css'

interface Props<T> {
  items?: T[]
  options?: KeenSliderOptions
  perView?: number
  spacing?: number
  controlsPosition?: 'top' | 'bottom'
  classesControls?: string
  classesSlide?: string
}

const {
  items,
  perView = 1,
  spacing = 16,
  controlsPosition = 'top',
  classesControls = '',
  classesSlide = '',
} = defineProps<Props<T>>()

const ready = ref(false)
const amount = items?.length ?? 0
const collection = ref(1)

const groups = computed(() => {
  const totalGroups = Math.ceil(amount / perView)

  const payload = Array.from({ length: totalGroups }).map((_, idx) => {
    const index = idx * perView

    return {
      start: index + perView > amount ? amount - perView : index,
      collection: idx + 1,
    }
  })

  return payload
})

const getGroup = (num: number) => {
  const g = groups.value

  for (let i = 0; i < g.length; i++) {
    const current = g[i]
    const next = g[i + 1]

    if (next) {
      if (num >= current.start && num < next.start) {
        return current
      }
    }
    else {
      if (num >= current.start) {
        return current
      }
    }
  }

  return g[0]
}

const [container, slider] = useKeenSlider({
  loop: false,
  mode: 'free-snap',
  dragSpeed: 0.5,
  rubberband: true,
  defaultAnimation: {
    duration: 1000,
    // easing: (t) => t,
  },
  slides: {
    perView,
    spacing,
  },
  slideChanged(s) {
    const slideIndex = s.track.details.rel
    const group = getGroup(slideIndex)

    collection.value = group.collection
  },
})

watch(() => perView, (newValue) => {
  slider.value?.update({
    slides: {
      perView: newValue,
      spacing,
    },
  })
})

onMounted(() => {
  ready.value = true
})
</script>

<template>
  <div
    class="@container/carousel size-full flex flex-col justify-between gap-8 transition-opacity duration-500 ease-in-out"
    :class="{
      'opacity-0': !ready,
    }"
  >
    <div
      v-if="slider"
      class="flex items-center justify-between"
      :class="[
        classesControls,
        {
          'order-last': controlsPosition === 'bottom',
        }]"
    >
      <div class="flex items-center justify-start gap-2">
        <button
          v-for="(group, idx) in groups"
          :key="idx"
          type="button"
          @click="slider.moveToIdx(group.start)"
        >
          <span class="sr-only">Go to group {{ group.collection }}</span>

          <span
            class="block size-2 rounded-full shrink-0 bg-tertiary transition-opacity duration-200 ease-out"
            :class="{
              'opacity-30': group.collection !== collection,
            }"
          />
        </button>
      </div>

      <div class="flex items-center justify-end gap-2">
        <button
          type="button"
          class="shrink-0 cursor-pointer size-6 opacity-30 hover:opacity-100 focus:opacity-100 transition-opacity duration-200 ease-out"
          @click="slider.prev()"
        >
          <span class="sr-only">Go to previous item</span>

          <ChevronLeft class="text-tertiary size-full fill-none" />
        </button>

        <button
          type="button"
          class="shrink-0 cursor-pointer size-6 opacity-30 hover:opacity-100 focus:opacity-100 transition-opacity duration-200 ease-out"
          @click="slider.next()"
        >
          <span class="sr-only">Go to next item</span>

          <ChevronRight class="text-tertiary size-full fill-none" />
        </button>
      </div>
    </div>

    <ul
      ref="container"
      class="keen-slider !overflow-visible"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="keen-slider__slide w-full"
        :class="classesSlide"
      >
        <slot
          name="item"
          v-bind="item"
        />
      </li>
    </ul>
  </div>
</template>
