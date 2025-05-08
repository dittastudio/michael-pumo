<script lang="ts" setup>
import type { BlockHeroStoryblok } from '@/types/storyblok'

interface Props {
  block: BlockHeroStoryblok
}

const { block } = defineProps<Props>()
</script>

<template>
  <div
    v-editable="block"
  >
    <div
      class="min-h-svh grid grid-cols-2"
      :class="block.background"
    >
      <div class="wrapper wrapper-x wrapper-y flex flex-col items-start justify-between">
        <ElementChip text="Open for new projects" />

        <div class="w-full my-auto flex flex-col items-start justify-center gap-7">
          <h1
            v-if="block.headline"
            class="text-48 text-heading max-w-[18ch]"
          >
            {{ block.headline }}
          </h1>

          <div
            v-if="storyblokRichTextContent(block.text)"
            class="[&_:is(p):not(:last-child)]:mb-7 [&]:text-18 max-w-[40ch]"
          >
            <StoryblokText :html="block.text" />
          </div>

          <StoryblokLink
            v-if="block.link"
            :item="block.link"
            class="mt-3"
          >
            <ButtonAppearance :text="block.cta" />
          </StoryblokLink>
        </div>

        <div
          v-if="storyblokRichTextContent(block.footnote)"
          class="[&_:is(p):not(:last-child)]:mb-7 [&]:text-12"
        >
          <StoryblokText :html="block.footnote" />
        </div>
      </div>

      <div>
        <NuxtImg
          v-if="block.media?.filename && storyblokAssetType(block.media.filename)"
          class="w-full h-full object-cover"
          :src="block.media.filename"
          provider="storyblok"
          width="1000"
          format="webp"
          quality="80"
          :modifiers="{ smart: true }"
        />
      </div>
    </div>
  </div>
</template>
