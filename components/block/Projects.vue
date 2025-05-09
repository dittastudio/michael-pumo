<script lang="ts" setup>
import type { BlockProjectsStoryblok } from '@/types/storyblok'

interface Props {
  block: BlockProjectsStoryblok
}

const { block } = defineProps<Props>()
</script>

<template>
  <div
    v-editable="block"
    class="w-full overflow-x-hidden"
    :class="block.background"
  >
    <div class="w-full px-gutter pt-20 pb-50">
      <h3
        v-if="block.headline"
        class="text-48 mb-7 text-tertiary"
      >
        {{ block.headline }}
      </h3>

      <div
        v-if="storyblokRichTextContent(block.text)"
        class="pb-gutter [&_:is(p):not(:last-child)]:mb-7 [&]:text-18 max-w-[40ch]"
      >
        <StoryblokText :html="block.text" />
      </div>

      <UiCarousel :items="block.projects">
        <template #item="{ headline, link, media }">
          <StoryblokLink
            :item="link"
            class="group block relative size-full"
          >
            <NuxtImg
              v-if="media?.filename && storyblokAssetType(media.filename) === 'image'"
              class="size-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-20 group-focus:opacity-20"
              :src="media.filename"
              provider="storyblok"
              width="1000"
              format="webp"
              quality="80"
              :modifiers="{ smart: true }"
            />

            <div
              v-if="headline"
              class="absolute inset-0 flex items-center justify-center"
            >
              <h4 class="text-30 text-tertiary transition-all duration-500 ease-in-out translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0">
                {{ headline }}
              </h4>
            </div>
          </StoryblokLink>
        </template>
      </UiCarousel>
    </div>
  </div>
</template>
