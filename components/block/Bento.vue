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

import Ditta from '@/assets/logos/ditta.svg'
import Foolproof from '@/assets/logos/foolproof.svg'
import Greggs from '@/assets/logos/greggs.svg'
import Hex from '@/assets/logos/hex.svg'
import Hoxton from '@/assets/logos/hoxton.svg'
import Limesharp from '@/assets/logos/limesharp.svg'
import Mof from '@/assets/logos/mof.svg'
import Parallel from '@/assets/logos/parallel.svg'
import RaggedEdge from '@/assets/logos/ragged-edge.svg'
import Rotate from '@/assets/logos/rotate.svg'
import Someone from '@/assets/logos/someone.svg'
import Structure from '@/assets/logos/structure.svg'
import Studio206 from '@/assets/logos/studio-206.svg'

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

const clients = [
  {
    logo: Studio206,
    url: 'https://studio206.dev',
    classes: 'h-6',
  },
  {
    logo: Ditta,
    url: 'https://ditta.studio',
    classes: 'h-6',
  },
  {
    logo: Foolproof,
    url: 'https://foolproof.co.uk',
    classes: 'h-8',
  },
  {
    logo: Greggs,
    url: 'https://greggs.com',
    classes: 'h-6',
  },
  {
    logo: Hex,
    url: 'https://www.hexdigital.com',
    classes: 'h-6',
  },
  {
    logo: Hoxton,
    url: 'https://thehoxton.com',
    classes: 'h-6',
  },
  {
    logo: Limesharp,
    url: 'https://limesharp.net',
    classes: 'h-8',
  },
  {
    logo: Mof,
    url: 'https://www.matterofform.com',
    classes: 'h-6',
  },
  {
    logo: Parallel,
    url: 'https://studioparallel.co.uk',
    classes: 'h-7.5',
  },
  {
    logo: RaggedEdge,
    url: 'https://raggededge.com',
    classes: 'h-5.5',
  },
  {
    logo: Rotate,
    url: 'https://studiorotate.com',
    classes: 'h-6',
  },
  {
    logo: Someone,
    url: 'https://someoneinlondon.com',
    classes: 'h-6',
  },
  {
    logo: Structure,
    url: 'https://www.designbystructure.com',
    classes: 'h-6',
  },
]
</script>

<template>
  <SectionStandard
    v-editable="block"
    :headline="block.headline"
    :text="block.text"
    :background="background"
  >
    <div class="w-full flex flex-col gap-gutter-md">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[300px_auto_300px] gap-4">
        <CardStandard
          class="col-span-2 md:col-span-1 md:order-1 lg:order-0 lg:col-span-1 lg:row-span-2"
          headline="London-based"
          text="I’m based in London and primarily work remotely, though I’m available to attend your London office upon request."
          :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
        />

        <CardStandard
          class="col-span-2 md:col-span-3 lg:col-span-1 lg:row-span-2 overflow-x-hidden"
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
          class="col-span-2 sm:col-span-1"
          headline="Technology"
          text="I’m a freelance digital web designer and frontend developer focusing on modern web technologies."
          :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
        >
          <template #bottom>
            <div class="-mx-6 mask-sides">
              <UiMarquee
                :items="technologies"
                classes-list="gap-2.5 pr-2.5"
              >
                <template #item="item">
                  <div class="size-12 -outline-offset-1 outline-1 outline-tertiary/20 rounded-5 p-3 hover:outline-tertiary transition-colors duration-200 ease-in-out">
                    <Component
                      :is="item"
                      class="size-full text-tertiary"
                    />
                  </div>
                </template>
              </UiMarquee>
            </div>
          </template>
        </CardStandard>

        <CardStandard
          class="col-span-2 sm:col-span-1"
          headline="Web design"
          text="Using tools such as Figma I can create bespoke pixel-perfect web design."
          :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
        >
          <template #bottom>
            <div class="flex flex-col gap-gutter">
              <div class="w-full aspect-[5/2] bg-tertiary/20" />
            </div>
          </template>
        </CardStandard>
      </div>

      <div class="w-full mask-sides">
        <UiMarquee
          :items="clients"
          :speed="60"
          classes-list="gap-gutter pr-gutter"
        >
          <template #item="item">
            <NuxtLink
              :to="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-auto opacity-20 hover:opacity-100 transition-opacity duration-200 ease-in-out"
              :class="item.classes"
            >
              <Component
                :is="item.logo"
                class="size-full text-tertiary"
              />
            </NuxtLink>
          </template>
        </UiMarquee>
      </div>
    </div>
  </SectionStandard>
</template>
