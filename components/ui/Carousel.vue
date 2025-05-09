<script lang="ts" setup>
import { useKeenSlider } from 'keen-slider/vue.es'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import 'keen-slider/keen-slider.min.css'

interface Props {
  items?: any[]
}

const { items } = defineProps<Props>()

const ready = ref(false)
const amount = items?.length ?? 0
const perView = ref(4)
const collection = ref(1)

const isXs = useAtMedia('(max-width: 479px)')
const isSm = useAtMedia('(min-width: 480px) and (max-width: 799px)')
const isMd = useAtMedia('(min-width: 800px) and (max-width: 1199px)')
const isLg = useAtMedia('(min-width: 1200px)')

const setPerView = () => {
  if (isXs.value) {
    perView.value = 1
  }
  else if (isSm.value) {
    perView.value = 2
  }
  else if (isMd.value) {
    perView.value = 3
  }
  else if (isLg.value) {
    perView.value = 4
  }
}

const groups = computed(() => {
  const totalGroups = Math.ceil(amount / perView.value)

  const payload = Array.from({ length: totalGroups }).map((_, idx) => {
    const index = idx * perView.value

    return {
      start: index + perView.value > amount ? amount - perView.value : index,
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
  rubberband: false,
  defaultAnimation: {
    duration: 1000,
    // easing: (t) => t,
  },
  slides: {
    perView: 1,
    spacing: 16,
  },
  breakpoints: {
    '(min-width: 480px)': {
      slides: {
        perView: 2,
        spacing: 16,
      },
    },
    '(min-width: 800px)': {
      slides: {
        perView: 3,
        spacing: 16,
      },
    },
    '(min-width: 1200px)': {
      slides: {
        perView: 4,
        spacing: 16,
      },
    },
  },
  created() {
    setPerView()
  },
  optionsChanged() {
    setPerView()
  },
  slideChanged(s) {
    const slideIndex = s.track.details.rel
    const group = getGroup(slideIndex)

    collection.value = group.collection
  },
})

onMounted(() => {
  ready.value = true
})
</script>

<template>
  <div
    class="w-full transition-opacity duration-500 ease-in-out"
    :class="{
      'opacity-0': !ready,
    }"
  >
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
