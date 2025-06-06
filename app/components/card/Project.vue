<script lang="ts" setup>
import type { AssetStoryblok, MultilinkStoryblok } from '@@/types/storyblok'

interface Props {
  headline?: string
  link?: MultilinkStoryblok
  media?: AssetStoryblok
  progress?: number
}

const { headline, link, media, progress } = defineProps<Props>()

const card = useTemplateRef<HTMLElement | null>('card')
const maxShift = 100
const parallaxState = reactive({
  translateX: 0,
})

const updatePosition = () => {
  if (!card.value) {
    return
  }

  const rect = card.value.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const cardCenterX = rect.left + rect.width / 2
  const positionRatio = cardCenterX / viewportWidth

  parallaxState.translateX = (positionRatio - 0.5) * 2 * maxShift
}

let resizeObserver: ResizeObserver | null = null

watch(() => progress, (newValue) => {
  console.log('progress:', newValue)
  updatePosition()
})

onMounted(async () => {
  await nextTick()

  updatePosition()

  window.addEventListener('resize', updatePosition, { passive: true })

  resizeObserver = new ResizeObserver(() => {
    updatePosition()
  })

  if (card.value) {
    resizeObserver.observe(card.value)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updatePosition)

  if (resizeObserver && card.value) {
    resizeObserver.unobserve(card.value)
    resizeObserver.disconnect()
  }
})
</script>

<template>
  <div ref="card">
    <StoryblokLink
      :item="link"
      class="no-underline flex flex-col gap-6 relative overflow-hidden transition-opacity duration-200 ease-in-out group-hover/carousel:opacity-20 group-focus-within/carousel:opacity-20 hover:opacity-100 focus:opacity-100"
      @focus="updatePosition"
    >
      <div class="relative overflow-hidden w-full aspect-[2/3] rounded-10">
        <NuxtImg
          v-if="media?.filename && storyblokAssetType(media.filename) === 'image'"
          class="absolute top-0 left-1/2 max-w-none w-[calc(100%+225px)] h-full object-cover"
          :style="{ transform: `translateX(calc(${parallaxState.translateX}px - 50%))` }"
          :src="media.filename"
          provider="storyblok"
          width="300"
          format="webp"
          quality="80"
          :modifiers="{ smart: true }"
          loading="lazy"
          :alt="`Project for ${media.alt || headline}`"
        />
      </div>

      <h3 class="text-24 text-tertiary">
        {{ headline }}
      </h3>
    </StoryblokLink>
  </div>
</template>
