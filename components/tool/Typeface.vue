<script lang="ts" setup>
import { useAppStore } from '@/stores/app'

interface Props {
  text?: string
}

const { text = 'Aa' } = defineProps<Props>()

const appStore = useAppStore()
</script>

<template>
  <button
    class="@container w-full overflow-hidden"
    type="button"
    @click="appStore.setTypeface(appStore.getTypeface === 'saans' ? 'comic-neue' : 'saans')"
  >
    <span class="text-[75cqw] leading-[0.7] text-tertiary whitespace-nowrap">
      {{ text }}
    </span>
  </button>
</template>
