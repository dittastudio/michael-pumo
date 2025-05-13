<script lang="ts" setup>
interface Props {
  text?: string
  size?: 'small' | 'medium' | 'large'
}

const { text = '', size = 'medium' } = defineProps<Props>()

const sizes = {
  small: 'px-8 py-3 text-14',
  medium: 'px-12 py-4 text-16',
  large: 'px-12 py-4 text-16',
} as const
</script>

<template>
  <span
    class="inline-block rounded-30 bg-tertiary text-primary font-medium"
    :class="sizes[size]"
  >
    {{ text }}
  </span>
</template>
