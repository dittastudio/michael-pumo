<script lang="ts" setup>
import type { BlockBentoStoryblok } from '@/types/storyblok'

interface Props {
  block: BlockBentoStoryblok
}

const { block } = defineProps<Props>()

const background = block.background as 'bg-primary' | 'bg-secondary'
</script>

<template>
  <SectionStandard
    v-editable="block"
    :headline="block.headline"
    :text="block.text"
    :background="background"
  >
    <p>Hello</p>
  </SectionStandard>
</template>
