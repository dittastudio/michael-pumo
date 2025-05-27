<script lang="ts" setup>
import type { AssetStoryblok, MultilinkStoryblok } from '@/types/storyblok'

interface Props {
  headline?: string
  link?: MultilinkStoryblok
  media?: AssetStoryblok
}

const { headline, link, media } = defineProps<Props>()
</script>

<template>
  <StoryblokLink
    :item="link"
    class="flex flex-col gap-6 relative overflow-hidden transition-opacity duration-200 ease-in-out group-hover/carousel:opacity-20 group-focus-within/carousel:opacity-20 hover:opacity-100 focus:opacity-100"
  >
    <NuxtImg
      v-if="media?.filename && storyblokAssetType(media.filename) === 'image'"
      class="aspect-[2/3] size-full rounded-10 object-cover"
      :src="media.filename"
      provider="storyblok"
      width="300"
      format="webp"
      quality="80"
      :modifiers="{ smart: true }"
      loading="lazy"
      :alt="`Project for ${media.alt || headline}`"
    />

    <h3 class="text-24 text-tertiary">
      {{ headline }}
    </h3>
  </StoryblokLink>
</template>
