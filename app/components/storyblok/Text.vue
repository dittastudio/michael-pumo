<script lang="ts" setup>
import type { StoryblokRichtext } from '#storyblok-types'
import type { StoryblokRichTextNode } from '@storyblok/vue'
import { NuxtLink } from '#components'

const resolvers = {
  [MarkTypes.LINK]: (node: StoryblokRichTextNode<VNode>) => {
    const isEmail = node.attrs?.linktype === 'email'

    return h(NuxtLink, {
      to: isEmail ? `mailto:${node.attrs?.href}` : storyblokSlug(node.attrs?.href),
      target: isEmail ? '_blank' : node.attrs?.target,
    }, { default: () => node.text ?? '' })
  },
}

interface Props {
  html?: StoryblokRichtext | undefined
}

const { html } = defineProps<Props>()
</script>

<template>
  <StoryblokRichText
    v-if="html"
    :doc="html"
    :resolvers="resolvers"
  />
</template>
