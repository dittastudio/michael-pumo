<script lang="ts" setup>
import type { StoryblokRichtext } from '#storyblok-types'

interface Props {
  html?: StoryblokRichtext
}

const { html } = defineProps<Props>()
</script>

<template>
  <StoryblokRichText
    v-if="html"
    :doc="html"
  />
</template>
