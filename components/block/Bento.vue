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
        :padded="false"
        :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
      >
        <template #top>
          <UiCarousel
            :per-view="1"
            :spacing="0"
            controls-position="bottom"
            classes-controls="px-14 pb-14"
            classes-slide="px-14 pt-14"
            :items="[
              {
                text: 'Michael’s work is of consistently high quality. He continues to be one of our most valued digital resources and we look forward to working together more in the future.',
                name: 'Matt Bland',
                subtext: 'Managing director at Ragged Edge',
              },
              {
                text: 'Incredibly thorough and professional in bringing our new website to life. As designers, we can be quite picky about how things work but he took the challenge and developed every single aspect, beautifully.',
                name: 'Renata Garcia',
                subtext: 'Producer at Moth',
              },
              {
                text: `Working with Michael has always been a smooth process from initial concepts to problem-solving, right through to every aspect of the development stages. He's our go-to digital partner.`,
                name: 'Paul Fox',
                subtext: 'Creative director at Parallel',
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
