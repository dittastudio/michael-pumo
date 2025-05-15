<script lang="ts" setup>
import type { RichtextStoryblok } from '@/types/storyblok'
import { onClickOutside } from '@vueuse/core'

interface Props {
  headline?: string
  text?: RichtextStoryblok
  isLast?: boolean
}

const { headline, text, isLast = false } = defineProps<Props>()

const container = useTemplateRef<HTMLDivElement>('container')
const content = useTemplateRef<HTMLDivElement>('content')
const toggled = ref(false)
const id = toId(headline || '') || undefined

const toggle = () => {
  toggled.value = !toggled.value
}

const height = computed(() => toggled.value ? content.value?.scrollHeight : 0)

onClickOutside(container, () => toggled.value = false)
</script>

<template>
  <div
    ref="container"
    class="w-full transition-opacity duration-200 ease-in-out group-hover/accordion:opacity-20 hover:opacity-100"
    :class="{ 'border-b-1 border-b-tertiary/10': !isLast }"
  >
    <h4 v-if="headline">
      <button
        class="text-tertiary text-26 cursor-pointer pt-2.5 pb-3 text-left"
        type="button"
        :aria-expanded="toggled"
        :aria-controls="id"
        @click="toggle"
        @keydown.enter="toggle"
      >
        {{ headline }}
      </button>
    </h4>

    <div
      :style="{
        height: `${height}px`,
      }"
      class="overflow-hidden transition-all duration-500 ease-outExpo"
    >
      <div
        v-if="storyblokRichTextContent(text)"
        :id="id"
        ref="content"
        class="[&_:is(p):not(:last-child)]:mb-7 text-18 pb-16"
      >
        <StoryblokText :html="text" />
      </div>
    </div>
  </div>
</template>
