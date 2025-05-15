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
  <p class="flex items-center justify-start gap-2.5 pl-3 pr-4 py-1.5 rounded-30 bg-primary text-12 text-tertiary">
    <span
      class="block size-2 rounded-full shrink-0"
      :class="backgroundColor[color]"
    />

    <span class="block -mt-0.5">
      {{ text }}
    </span>
  </p>
</template>
