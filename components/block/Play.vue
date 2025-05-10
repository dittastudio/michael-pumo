<script lang="ts" setup>
import type { BlockPlayStoryblok } from '@/types/storyblok'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

interface Props {
  block: BlockPlayStoryblok
}

const { block } = defineProps<Props>()
</script>

<template>
  <div
    v-editable="block"
    class="w-full"
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
        class="[&_:is(p):not(:last-child)]:mb-7 [&]:text-18 max-w-[40ch]"
      >
        <StoryblokText :html="block.text" />
      </div>

      <div class="flex justify-center gap-4">
        <CardStandard
          class="w-75"
          headline="Typeface"
          :text="`You are currently viewing ${appStore.getTypeface === 'saans' ? 'Saans' : 'Comic Neue 🤣'} typeface ${appStore.getTypeface === 'saans' ? 'by Displaay Type Foundry' : 'from Google Fonts'}. Click to change your selection.`"
          :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
        >
          <template #top>
            <div class="w-full">
              <ToolTypeface text="Aa" />
            </div>
          </template>
        </CardStandard>

        <CardStandard
          class="w-75"
          headline="Palette"
          :text="`You are currently viewing the ${appStore.getTheme} palette. Click to toggle through a selection of alternative palettes.`"
          :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
        >
          <template #top>
            <div class="w-full px-2 pt-6">
              <ToolPalette />
            </div>
          </template>
        </CardStandard>

        <CardStandard
          class="w-75"
          headline="Vibes"
          text="You are currently viewing the dark mood. Click to toggle through a selection of alternative moods."
          :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
        />
      </div>
    </div>
  </div>
</template>
