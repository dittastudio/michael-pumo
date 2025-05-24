<script lang="ts" setup>
import { VueLenis } from 'lenis/vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const route = useRoute()

const globalClasses = computed(() => [
  `theme-${appStore.getTheme} typeface-${appStore.getTypeface}`,
  storyblokEditor(route.query) ? 'is-storyblok-editor' : '',
])

useHead({
  htmlAttrs: {
    lang: 'en',
    class: globalClasses,
  },
})

useSeoMeta({
  titleTemplate: title => (title ? `${title} - Michael Pumo` : 'Michael Pumo'),
  robots: 'index, follow',
})

useScriptPlausibleAnalytics({
  domain: 'michaelpumo.com',
  extension: ['file-downloads', 'outbound-links'],
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
