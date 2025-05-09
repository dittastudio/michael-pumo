<script lang="ts" setup>
interface Props {
  text?: string
}

const { text = '' } = defineProps<Props>()
</script>

<template>
  <span class="inline-block px-12 py-4 rounded-30 bg-tertiary text-16 text-primary font-medium">
    {{ text }}
  </span>
</template>
