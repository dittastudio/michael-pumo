<script lang="ts" setup>
import type { BlockBentoStoryblok } from '@/types/storyblok'

interface Props {
  block: BlockBentoStoryblok
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
    </div>
  </div>
</template>
