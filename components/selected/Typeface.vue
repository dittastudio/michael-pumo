<script lang="ts" setup>
interface Props {
  text?: string
}

const { text = 'Aa' } = defineProps<Props>()
</script>

<template>
  <div
    class="@container w-full overflow-hidden"
  >
    <p class="inline-block text-[75cqw] leading-[0.7] text-tertiary whitespace-nowrap">
      {{ text }}
    </p>
  </div>
</template>
