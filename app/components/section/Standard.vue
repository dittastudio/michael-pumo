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
    class="w-full px-gutter pt-20 pb-50 flex flex-col gap-20"
    :class="background"
  >
    <div
      v-if="headline || storyblokRichTextContent(text)"
      class="@container/overview-headline w-full flex flex-col gap-7"
    >
      <h2
        v-if="headline"
        class="text-tertiary text-40 @md/overview-headline:text-48"
      >
        {{ headline }}
      </h2>

      <div
        v-if="storyblokRichTextContent(text)"
        class="[&_:is(p):not(:last-child)]:mb-7 text-18 max-w-[40ch]"
      >
        <StoryblokText :html="text" />
      </div>
    </div>

    <slot />
  </div>
</template>
