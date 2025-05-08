<script lang="ts" setup>
import type { BlockTextStoryblok } from '@/types/storyblok'

interface Props {
  block: BlockTextStoryblok
}

const { block } = defineProps<Props>()
</script>

<template>
  <div v-editable="block">
    <div
      v-if="storyblokRichTextContent(block.text)"
      class="wrapper grid gap-x-[var(--app-inner-gutter)] grid-cols-2 md:grid-cols-12"
    >
      <div class="[&_p:not(:last-child)]:mb-6 [&_p]:text-(--color-heading) [&_p]:text-26 col-span-full md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4">
        <h3
          v-if="block.headline"
          class="text-18 mb-2"
        >
          {{ block.headline }}
        </h3>

        <StoryblokText
          :html="block.text"
        />
      </div>
    </div>
  </div>
</template>
