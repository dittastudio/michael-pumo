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
    class="group block relative size-full"
  >
    <NuxtImg
      v-if="media?.filename && storyblokAssetType(media.filename) === 'image'"
      class="size-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-20 group-focus:opacity-20"
      :src="media.filename"
      provider="storyblok"
      width="600"
      format="webp"
      quality="80"
      :modifiers="{ smart: true }"
      loading="lazy"
      :alt="media.alt || headline"
    />

    <div
      v-if="headline"
      class="absolute inset-0 flex items-center justify-center"
    >
      <h4 class="text-30 text-tertiary transition-all duration-300 ease-in-out translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0">
        {{ headline }}
      </h4>
    </div>
  </StoryblokLink>
</template>
