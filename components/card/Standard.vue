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

const attrs = useAttrs()
const isButton = attrs.role === 'button' || attrs.tabindex === '0'
</script>

<template>
  <div
    class="flex flex-col gap-6 items-start justify-between p-6 rounded-10"
    :class="[
      backgrounds[background],
      {
        'cursor-pointer select-none outline-1 outline-transparent hover:outline-accent focus:outline-accent transition-[outline] duration-300': isButton,
      },
    ]"
  >
    <div
      v-if="$slots.top"
      class="w-full my-auto"
    >
      <slot name="top" />
    </div>

    <div
      v-if="headline || text"
      class="flex flex-col gap-2 items-start justify-start"
    >
      <h3
        v-if="headline"
        class="text-24 text-tertiary"
      >
        {{ headline }}
      </h3>

      <p
        v-if="text && typeof text === 'string'"
        class="text-14 text-pretty"
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

    <div
      v-if="$slots.bottom"
      class="w-full my-auto"
    >
      <slot name="bottom" />
    </div>
  </div>
</template>
