<script lang="ts" setup>
import type { RichtextStoryblok } from '@/types/storyblok'

interface Props {
  headline?: string
  text?: RichtextStoryblok
  background?: 'bg-primary' | 'bg-secondary'
}

const { headline, text, background = 'bg-primary' } = defineProps<Props>()
</script>

<template>
  <div
    class="w-full px-gutter pt-20 pb-50 flex flex-col gap-gutter"
    :class="background"
  >
    <div class="w-full flex flex-col gap-7">
      <h3
        v-if="headline"
        class="text-48 text-tertiary"
      >
        {{ headline }}
      </h3>

      <div
        v-if="storyblokRichTextContent(text)"
        class="[&_:is(p):not(:last-child)]:mb-7 [&]:text-18 max-w-[40ch]"
      >
        <StoryblokText :html="text" />
      </div>
    </div>

    <slot />
  </div>
</template>
