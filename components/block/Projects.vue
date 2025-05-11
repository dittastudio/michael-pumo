<script lang="ts" setup>
import type { BlockProjectsStoryblok } from '@/types/storyblok'

interface Props {
  block: BlockProjectsStoryblok
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
    <UiCarousel :items="block.projects">
      <template #item="{ headline, link, media }">
        <CardProject
          :headline="headline"
          :link="link"
          :media="media"
        />
      </template>
    </UiCarousel>
  </SectionStandard>
</template>
