<script lang="ts" setup>
import type { RichtextStoryblok } from '@/types/storyblok'

interface Props {
  text?: RichtextStoryblok | string
  name?: string
  subtext?: string
}

const { text, name, subtext } = defineProps<Props>()
</script>

<template>
  <figure class="flex flex-col gap-10 items-start justify-start">
    <blockquote
      cite="#"
      class="text-tertiary"
    >
      <p
        v-if="text && typeof text === 'string'"
        class="text-30 text-pretty"
      >
        {{ text }}
      </p>

      <div
        v-else-if="typeof text !== 'string' && storyblokRichTextContent(text)"
        class="[&_:is(p):not(:last-child)]:mb-4 [&]:text-30"
      >
        <StoryblokText :html="text" />
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
