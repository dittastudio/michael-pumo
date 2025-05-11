<script lang="ts" setup>
import type { BlockPlayStoryblok } from '@/types/storyblok'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

interface Props {
  block: BlockPlayStoryblok
}

const { block } = defineProps<Props>()

const play = ref(false)

const setTypeface = () => {
  appStore.setTypeface(appStore.getTypeface === 'saans' ? 'comic-neue' : 'saans')
}

const setTheme = () => {
  appStore.setTheme(appStore.getTheme === 'light' ? 'dark' : 'light')
}
</script>

<template>
  <div
    v-editable="block"
    class="w-full"
    :class="block.background"
  >
    <div class="w-full px-gutter pt-20 pb-50 flex flex-col gap-gutter">
      <div>
        <h3
          v-if="block.headline"
          class="text-48 mb-7 text-tertiary"
        >
          {{ block.headline }}
        </h3>

        <div
          v-if="storyblokRichTextContent(block.text)"
          class="[&_:is(p):not(:last-child)]:mb-7 [&]:text-18 max-w-[40ch]"
        >
          <StoryblokText :html="block.text" />
        </div>
      </div>

      <div class="flex justify-center gap-4">
        <CardStandard
          class="w-75"
          headline="Typeface"
          :text="`You are currently viewing ${appStore.getTypeface === 'saans' ? 'Saans' : 'Comic Neue 🤣'} typeface ${appStore.getTypeface === 'saans' ? 'by Displaay Type Foundry' : 'from Google Fonts'}. Maybe you'd like to switch things up?`"
          :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
          role="button"
          tabindex="0"
          @click="setTypeface"
          @keydown.enter="setTypeface"
        >
          <template #top>
            <div class="w-full">
              <SelectedTypeface text="Aa" />
            </div>
          </template>
        </CardStandard>

        <CardStandard
          class="w-75"
          headline="Palette"
          :text="`Are things a little ${appStore.getTheme === 'dark' ? 'dark' : 'light'} around here? Switch up the palette mode to suit your preference.`"
          :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
          role="button"
          tabindex="0"
          @click="setTheme"
          @keydown.enter="setTheme"
        >
          <template #top>
            <div class="w-full px-2 pt-6">
              <SelectedPalette />
            </div>
          </template>
        </CardStandard>

        <CardStandard
          class="w-75"
          headline="Vibes"
          text="Sit back, relax and listen to the sound of the ocean waves crashing on the shore as you sip a piña colada 🏝️."
          :background="block.background === 'bg-primary' ? 'secondary' : 'primary'"
          role="button"
          tabindex="0"
          @click="play = !play"
          @keydown.enter="play = !play"
        >
          <template #top>
            <div class="w-full px-2 pt-6">
              <SelectedAudio :play="play" />
            </div>
          </template>
        </CardStandard>
      </div>
    </div>
  </div>
</template>
