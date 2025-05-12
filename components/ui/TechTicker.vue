<script lang="ts" setup>
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

// interface Props {
//   block: BlockBentoStoryblok
// }

// const { block } = defineProps<Props>()

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
  <div class="w-full overflow-hidden">
    <ul class="flex gap-2">
      <li
        v-for="(technology, index) in technologies"
        :key="index"
        class="shrink-0 size-12 -outline-offset-1 outline-1 outline-tertiary/20 rounded-5 p-3 hover:outline-tertiary transition-colors duration-200 ease-in-out"
      >
        <Component
          :is="technology"
          class="size-full text-tertiary"
        />
      </li>
    </ul>
  </div>
</template>
