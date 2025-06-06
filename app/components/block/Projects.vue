<script lang="ts" setup>
import type { BlockProjectsStoryblok } from '@@/types/storyblok'

interface Props {
  block: BlockProjectsStoryblok
}

const { block } = defineProps<Props>()

const background = block.background as 'bg-primary' | 'bg-secondary'

const isXs = useAtMedia('(max-width: 479px)')
const isSm = useAtMedia('(min-width: 480px) and (max-width: 799px)')
const isMd = useAtMedia('(min-width: 800px) and (max-width: 1199px)')
const isLg = useAtMedia('(min-width: 1200px)')

const perView = computed(() => {
  if (isXs.value) {
    return 1
  }
  else if (isSm.value) {
    return 2
  }
  else if (isMd.value) {
    return 3
  }
  else if (isLg.value) {
    return 4
  }
  return 4
})
</script>

<template>
  <SectionStandard
    v-editable="block"
    class="overflow-x-hidden"
    :headline="block.headline"
    :headline-a11y="block.headline_a11y"
    :text="block.text"
    :background="background"
  >
    <UiCarousel
      :per-view="perView"
      :items="block.projects"
    >
      <template #item="{ headline, link, media, progress }">
        <CardProject
          :headline="headline"
          :link="link"
          :media="media"
          :progress="progress"
        />
      </template>
    </UiCarousel>
  </SectionStandard>
</template>
