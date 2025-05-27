<script lang="ts" setup>
import type { DefineComponent } from 'vue'

interface Props {
  name?: string
  logo?: DefineComponent
}

const { name, logo } = defineProps<Props>()
</script>

<template>
  <div
    class="size-12 -outline-offset-1 outline-1 outline-tertiary/20 rounded-5 p-3 hover:outline-tertiary transition-colors duration-200 ease-in-out bg-primary/80"
    :title="name"
  >
    <Component
      :is="logo"
      v-if="logo"
      class="size-full text-tertiary"
    />

    <p
      v-if="name"
      class="sr-only"
    >
      {{ name }}
    </p>
  </div>
</template>
