<script lang="ts" setup>
import type { RichtextStoryblok } from '@/types/storyblok'

interface Props {
  headline?: string
  text?: RichtextStoryblok | string
  background?: 'primary' | 'secondary'
}

const { headline, text, background = 'primary' } = defineProps<Props>()

const backgrounds = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
} as const
</script>

<template>
  <div
    class="flex flex-col gap-2 items-start justify-start p-6 rounded-10"
    :class="backgrounds[background as keyof typeof backgrounds]"
  >
    <slot name="top" />

    <div class="flex flex-col gap-2 items-start justify-start">
      <h3
        v-if="headline"
        class="text-24 text-tertiary"
      >
        {{ headline }}
      </h3>

      <p
        v-if="text && typeof text === 'string'"
        class="text-14"
      >
        {{ text }}
      </p>

      <div
        v-else-if="typeof text !== 'string' && storyblokRichTextContent(text)"
        class="[&_:is(p):not(:last-child)]:mb-4 [&]:text-14"
      >
        <StoryblokText :html="text" />
      </div>
    </div>

    <slot name="bottom" />
  </div>
</template>
