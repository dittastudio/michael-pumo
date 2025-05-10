<script lang="ts" setup>
import { useAppStore } from '@/stores/app'

interface Props {
  border?: 'primary' | 'secondary'
}

const { border = 'primary' } = defineProps<Props>()

const appStore = useAppStore()

const colours = {
  accent: 'bg-accent',
  secondary: 'bg-secondary',
  muted: 'bg-muted',
  tertiary: 'bg-tertiary',
} as const

const borders = {
  primary: 'border-primary',
  secondary: 'border-secondary',
} as const

const indexes = [
  'z-[4]',
  'z-[3]',
  'z-[2]',
  'z-[1]',
]
</script>

<template>
  <button
    class="w-full"
    type="button"
    @click="appStore.setTheme(appStore.getTheme === 'light' ? 'dark' : 'light')"
  >
    <span class="w-full h-full flex">
      <span
        v-for="(colour, name, index) in colours"
        :key="colour"
        class="w-[40%]"
        :class="[index !== 0 ? '-ml-[15%]' : '', indexes[index]]"
      >
        <span
          class="block w-full aspect-square rounded-full"
          :class="['border-2', borders[border], colour]"
        />

        <span class="sr-only">{{ name }}</span>
      </span>
    </span>
  </button>
</template>
