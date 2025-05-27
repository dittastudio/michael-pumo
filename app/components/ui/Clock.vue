<script lang="ts" setup>
interface Props {
  timeZone?: string
}

const { timeZone = 'Europe/London' } = defineProps<Props>()

const clock = useTemplateRef<HTMLDivElement | null>('clock')
const time = ref('')
const zone = ref('')
const raf = ref<number | undefined>(undefined)

const getTimeNow = (): string[] =>
  new Intl.DateTimeFormat('en-GB', {
    timeStyle: 'long',
    timeZone,
  })
    .format(new Date())
    .split(' ')

const updateClock = () => {
  const [timeNow, timeZone] = getTimeNow()

  time.value = timeNow
  zone.value = timeZone
  raf.value = window.requestAnimationFrame(updateClock)
}

onMounted(() => {
  raf.value = window.requestAnimationFrame(updateClock)
})

onUnmounted(() => {
  if (raf.value) {
    window.cancelAnimationFrame(raf.value)
  }
})
</script>

<template>
  <time
    ref="clock"
    class="block"
    :datetime="time"
  >
    <slot
      name="clock"
      v-bind="{ time, zone }"
    />
  </time>
</template>
