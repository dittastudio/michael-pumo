<script lang="ts" setup>
import type { BlockHeroStoryblok } from '@/types/storyblok'
import { useLenis } from 'lenis/vue'

interface Props {
  block: BlockHeroStoryblok
}

const { block } = defineProps<Props>()

const container = useTemplateRef<HTMLElement | null>('container')
const lenis = useLenis()

const scrollDown = () => {
  if (!container.value || !lenis.value) {
    return
  }

  const { bottom } = container.value.getBoundingClientRect()

  lenis.value.scrollTo(
    bottom + window.scrollY,
    {
      duration: 1,
    },
  )
}
</script>

<template>
  <div
    ref="container"
    v-editable="block"
  >
    <div
      class="md:min-h-svh grid md:grid-cols-2"
      :class="block.background"
    >
      <div class="w-full min-h-svh md:min-h-auto p-gutter flex flex-col items-start justify-between">
        <ElementChip
          v-if="block.signal"
          text="Open for new projects"
        />

        <div class="w-full my-auto flex flex-col items-start justify-center gap-7">
          <h1
            v-if="block.headline"
            class="text-48 text-tertiary max-w-[18ch]"
          >
            {{ block.headline }}
          </h1>

          <div
            v-if="storyblokRichTextContent(block.text)"
            class="[&_:is(p):not(:last-child)]:mb-7 text-18 max-w-[40ch]"
          >
            <StoryblokText :html="block.text" />
          </div>

          <button
            v-if="block.cta"
            class="mt-3"
            type="button"
            @click.prevent="scrollDown"
          >
            <ButtonAppearance :text="block.cta" />
          </button>
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
          v-if="block.media?.filename && storyblokAssetType(block.media.filename) === 'image'"
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
