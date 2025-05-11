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
          <div class="w-full px-6 pt-10 pb-6">
            <UiCarousel
              :per-view="1"
              controls-position="bottom"
              :items="[
                {
                  text: 'Michael’s work is of consistently high quality. He continues to be one of our most valued digital resources and we look forward to working together more in future.',
                  name: 'John Doe',
                  subtext: 'CEO, Example Company',
                },
                {
                  text: 'Michael’s work is of consistently high quality. He continues to be one of our most valued digital resources and we look forward to working together more in future.',
                  name: 'Jane Smith',
                  subtext: 'CTO, Another Company',
                },
                {
                  text: 'Michael’s work is of consistently high quality. He continues to be one of our most valued digital resources and we look forward to working together more in future.',
                  name: 'Alice Johnson',
                  subtext: 'Project Manager, Tech Solutions',
                },
              ]"
            >
              <template #item="{ text, name, subtext }">
                <CardQuote
                  :text="text"
                  :name="name"
                  :subtext="subtext"
                />
              </template>
            </UiCarousel>
          </div>
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
