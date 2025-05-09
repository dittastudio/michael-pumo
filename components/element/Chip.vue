<script lang="ts" setup>
interface Props {
  color?: 'blue' | 'green' | 'red'
  text?: string
}

const { color = 'green', text = '' } = defineProps<Props>()

const backgroundColor = {
  blue: 'bg-blue',
  green: 'bg-green',
  red: 'bg-red',
}
</script>

<template>
  <p class="flex items-center justify-start gap-2.5 pl-3 pr-4 py-1.5 rounded-30 bg-primary text-14 text-tertiary">
    <span :class="[backgroundColor[color], 'block size-2 rounded-full shrink-0']" />

    {{ text }}
  </p>
</template>
