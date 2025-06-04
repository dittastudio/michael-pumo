<script lang="ts" setup>
import type { RichtextStoryblok } from '@@/types/storyblok'

interface Props {
  html?: RichtextStoryblok
}

const { html } = defineProps<Props>()
</script>

<template>
  <StoryblokRichText
    v-if="html"
    :doc="html"
  />
</template>
