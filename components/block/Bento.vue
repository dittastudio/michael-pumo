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
    <div class="grid grid-cols-[300px_auto_300px] gap-4">
      <CardStandard
        class="row-span-2"
        headline="London-based"
        text="I’m based in London and primarily work remotely, though I’m available to attend your London office upon request."
        :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
      />

      <CardStandard
        class="row-span-2 overflow-x-hidden"
        :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
      >
        <template #top>
          <UiCarousel
            :items="[
              {
                headline: 'Project 1',
              },
              {
                headline: 'Project 2',
              },
              {
                headline: 'Project 3',
              },
            ]"
          >
            <template #item="{ headline }">
              <p>{{ headline }}</p>
            </template>
          </UiCarousel>
        </template>
      </CardStandard>

      <CardStandard
        headline="Technology"
        text="I’m a freelance digital web designer and frontend developer focusing on modern web technologies."
        :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
      />

      <CardStandard
        headline="Web design"
        text="Using tools such as Figma I can create bespoke pixel-perfect web design."
        :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
      />
    </div>
  </SectionStandard>
</template>
