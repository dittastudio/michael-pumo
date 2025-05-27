<script lang="ts" setup>
interface Props {
  text?: string
}

const { text = 'Aa' } = defineProps<Props>()
</script>

<template>
  <div class="@container w-full overflow-hidden">
    <p class="-mt-2 inline-block text-[75cqw] leading-[0.85] text-tertiary whitespace-nowrap">
      {{ text }}
    </p>
  </div>
</template>
