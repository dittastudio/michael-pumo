<script lang="ts" setup>
import type { RichtextStoryblok } from '@@/types/storyblok'

interface Props {
  headline?: string
  headlineA11y?: boolean
  text?: RichtextStoryblok
  background?: 'bg-primary' | 'bg-secondary'
}

const { headline, headlineA11y, text, background = 'bg-primary' } = defineProps<Props>()
</script>

<template>
  <div
    class="w-full px-gutter pb-50 flex flex-col gap-20"
    :class="[
      background,
      {
        'pt-25 lg:pt-40': (!headline || headlineA11y) && !storyblokRichTextContent(text),
        'pt-25': (headline && !headlineA11y) || storyblokRichTextContent(text),
      },
    ]"
  >
    <div
      v-if="headline || storyblokRichTextContent(text)"
      :class="{
        '@container/overview-headline w-full flex flex-col gap-7': (headline || storyblokRichTextContent(text)) && !headlineA11y,
        'sr-only': headline && headlineA11y && !storyblokRichTextContent(text),
      }"
    >
      <h2
        v-if="headline"
        :class="{
          'text-tertiary text-40 @md/overview-headline:text-48': !headlineA11y,
        }"
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
