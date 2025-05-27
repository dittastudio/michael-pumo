<script lang="ts" generic="T" setup>
interface Props {
  items?: T[]
}

const { items = [] } = defineProps<Props>()
</script>

<template>
  <ul class="group/accordion w-full flex flex-col">
    <li
      v-for="(item, index) in items"
      :key="index"
    >
      <slot
        name="item"
        v-bind="{ ...item, isLast: index + 1 === items.length }"
      />
    </li>
  </ul>
</template>
