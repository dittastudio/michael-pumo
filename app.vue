<script lang="ts" setup>
import { VueLenis } from 'lenis/vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const customisations = computed(() => `theme-${appStore.getTheme} typeface-${appStore.getTypeface}`)

useHead({
  htmlAttrs: {
    lang: 'en',
    class: customisations,
  },
})

const route = useRoute()

const globalClasses = computed(() => ({
  'is-storyblok-editor': storyblokEditor(route.query),
}))

useHead({
  htmlAttrs: {
    class: globalClasses,
  },
})

useSeoMeta({
  titleTemplate: title => (title ? `${title} - Michael Pumo` : 'Michael Pumo'),
  robots: 'index, follow',
})
</script>

<template>
  <VueLenis root>
    <NuxtPage />

    <AppFooter />

    <DevOnly>
      <DevGuide />
    </DevOnly>
  </VueLenis>
</template>
