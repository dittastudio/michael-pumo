<script lang="ts" setup>
import { useKeenSlider } from 'keen-slider/vue.es'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import 'keen-slider/keen-slider.min.css'

interface Props {
  items?: any[]
}

const { items } = defineProps<Props>()

const amount = items?.length ?? 0
const perView = 4
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
  initial: 0,
  loop: false,
  mode: 'free-snap',
  defaultAnimation: {
    duration: 1000,
    // easing: (t) => t,
  },
  slides: {
    perView,
    spacing: 16,
  },
  slideChanged(s) {
    const slideIndex = s.track.details.rel
    const group = getGroup(slideIndex)

    collection.value = group.collection
  },
})
</script>

<template>
  <div>
    <div
      v-if="slider"
      class="flex items-center justify-between mb-8"
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
            class="block size-2 rounded-full shrink-0 bg-heading transition-opacity duration-200 ease-out"
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

          <ChevronLeft class="text-heading size-full fill-none" />
        </button>

        <button
          type="button"
          class="shrink-0 cursor-pointer size-6 opacity-30 hover:opacity-100 focus:opacity-100 transition-opacity duration-200 ease-out"
          @click="slider.next()"
        >
          <span class="sr-only">Go to next item</span>

          <ChevronRight class="text-heading size-full fill-none" />
        </button>
      </div>
    </div>

    <ul
      ref="container"
      class="keen-slider !overflow-visible"
    >
      <li
        v-for="item in items"
        :key="item"
        class="keen-slider__slide w-full aspect-[2/3] bg-secondary rounded-5"
      >
        <slot
          name="item"
          v-bind="item"
        />
      </li>
    </ul>
  </div>
</template>
