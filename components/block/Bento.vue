<script lang="ts" setup>
import type { BlockBentoStoryblok } from '@/types/storyblok'
import Astro from '@/assets/icons/astro.svg'
import Css from '@/assets/icons/css.svg'
import Figma from '@/assets/icons/figma.svg'
import Git from '@/assets/icons/git.svg'
import Gsap from '@/assets/icons/gsap.svg'
import Netlify from '@/assets/icons/netlify.svg'
import Next from '@/assets/icons/next.svg'
import Nuxt from '@/assets/icons/nuxt.svg'
import React from '@/assets/icons/react.svg'
import Supabase from '@/assets/icons/supabase.svg'
import Tailwind from '@/assets/icons/tailwind.svg'
import Ts from '@/assets/icons/ts.svg'
import Vite from '@/assets/icons/vite.svg'
import Vue from '@/assets/icons/vue.svg'

interface Props {
  block: BlockBentoStoryblok
}

const { block } = defineProps<Props>()

const background = block.background as 'bg-primary' | 'bg-secondary'
const technologies = [
  Astro,
  Css,
  Figma,
  Git,
  Gsap,
  Netlify,
  Next,
  Nuxt,
  React,
  Supabase,
  Tailwind,
  Ts,
  Vite,
  Vue,
]
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
            :items="block.testimonials"
          >
            <template #item="{ quote, name, subtext }">
              <CardTestimonial
                :quote="quote"
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
      >
        <template #bottom>
          <!-- <UiTechTicker /> -->

          <UiMarquee :items="technologies">
            <template #item="item">
              <div class="shrink-0 size-12 -outline-offset-1 outline-1 outline-tertiary/20 rounded-5 p-3 hover:outline-tertiary transition-colors duration-200 ease-in-out">
                <Component
                  :is="item"
                  class="size-full text-tertiary"
                />
              </div>
            </template>
          </UiMarquee>
        </template>
      </CardStandard>

      <CardStandard
        headline="Web design"
        text="Using tools such as Figma I can create bespoke pixel-perfect web design."
        :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
      />
    </div>
  </SectionStandard>
</template>
