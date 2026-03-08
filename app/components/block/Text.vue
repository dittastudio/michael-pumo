<script lang="ts" setup>
import type { BlockText } from '#storyblok-components'

interface Props {
  block: BlockText
}

const { block } = defineProps<Props>()
const background = block.background as 'bg-primary' | 'bg-secondary'
</script>

<template>
  <div
    v-editable="block"
    class="w-full px-gutter py-gutter-xl"
    :class="background"
  >
    <div class="w-full mx-auto md:max-w-153.75">
      <h3
        v-if="block.headline"
        class="text-18 mb-2"
      >
        {{ block.headline }}
      </h3>

      <EffectTextFiller
        v-if="storyblokRichTextContent(block.text)"
        class="[&_:is(p):not(:last-child)]:mb-7 text-tertiary text-24 sm:text-26"
      >
        <StoryblokText :html="block.text" />
      </EffectTextFiller>
    </div>
  </div>
</template>
