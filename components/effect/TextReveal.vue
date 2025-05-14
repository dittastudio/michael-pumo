<script lang="ts" setup>
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

interface Props {
  tag?: string
  delay?: number
  duration?: number
}

const { tag = 'p', delay = 0, duration = 0.5 } = defineProps<Props>()
const text = useTemplateRef<string | null>('text')
const ready = ref(false)

onMounted(async () => {
  if (delay > 0) {
    await wait(delay)
  }

  ready.value = true

  const split = SplitText.create(text.value, { type: 'words, chars' })

  gsap.from(split.chars, {
    duration,
    y: 5,
    autoAlpha: 0,
    stagger: 0.025,
  })
})
</script>

<template>
  <Component
    :is="tag"
    ref="text"
    :class="{
      'opacity-0': !ready,
    }"
  >
    <slot />
  </Component>
</template>
