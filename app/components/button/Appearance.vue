<script lang="ts" setup>
interface Props {
  text?: string
  size?: 'small' | 'medium' | 'large'
}

const { text = '', size = 'medium' } = defineProps<Props>()

const sizes = {
  small: 'px-8 py-3 text-14',
  medium: 'px-12 py-4 text-16',
  large: 'px-12 py-6 text-18',
} as const
</script>

<template>
  <span class="group/button relative inline-block">
    <span
      class="
        relative
        z-1
        inline-block
        rounded-30
        bg-tertiary
        text-primary
        font-medium
      "
      :class="sizes[size]"
    >
      {{ text }}
    </span>

    <span
      class="
        pointer-events-none
        bg-conic-gradient
        absolute
        -inset-1
        block
        rounded-30
        z-0
        blur-xl
        transition-[opacity,scale]
        ease-out
        duration-2000
        opacity-0
        scale-75
        group-hover/button:duration-500
        group-hover/button:opacity-100
        group-hover/button:scale-100
      "
    />

    <!-- blur-lg opacity-0 group-hover/button:opacity-90 -->
  </span>
</template>
