<script lang="ts" setup>
// import type { SettingsStoryblok } from '@/types/storyblok'

// const settings = await useStoryblokStory<SettingsStoryblok>('/settings')
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

useMenu(false)
</script>

<template>
  <div>
    <NuxtPage />

    <DevGuide />
  </div>
</template>
