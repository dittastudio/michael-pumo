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
    class="wrapper wrapper-x wrapper-y"
    :class="block.background"
  >
    <div class="w-full">
      <h3
        v-if="block.headline"
        class="text-48 mb-7 text-heading"
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
