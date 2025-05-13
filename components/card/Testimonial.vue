<script lang="ts" setup>
import type { RichtextStoryblok } from '@/types/storyblok'

interface Props {
  quote?: RichtextStoryblok | string
  name?: string
  subtext?: string
}

const { quote, name, subtext } = defineProps<Props>()
</script>

<template>
  <figure class="h-full flex flex-col items-start justify-between gap-10">
    <blockquote
      cite="#"
      class="text-tertiary"
    >
      <p
        v-if="quote && typeof quote === 'string'"
        class="text-30 max-w-[40ch] text-pretty"
      >
        {{ quote }}
      </p>

      <div
        v-else-if="typeof quote !== 'string' && storyblokRichTextContent(quote)"
        class="[&_:is(p):not(:last-child)]:mb-4 text-30 max-w-[40ch] text-pretty"
      >
        <StoryblokText :html="quote" />
      </div>
    </blockquote>

    <figcaption
      v-if="name || subtext"
      class="flex flex-col gap-2 items-start justify-start"
    >
      <cite
        v-if="name"
        class="block text-18 text-tertiary not-italic"
      >
        {{ name }}
      </cite>

      <span
        v-if="subtext"
        class="block text-14"
      >
        {{ subtext }}
      </span>
    </figcaption>
  </figure>
</template>
