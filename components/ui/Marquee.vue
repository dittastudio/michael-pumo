<script lang="ts" generic="T" setup>
interface Props {
  items?: T[]
  speed?: number
  classesList?: string
}

const { items = [], speed = 24 } = defineProps<Props>()

const duration = computed(() => (!items?.length) ? '0s' : `${speed}s`)
</script>

<template>
  <div class="marquee w-full flex">
    <ul
      v-for="list in 2"
      :key="list"
      class="marquee__list flex shrink-0"
      :class="classesList"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="shrink-0"
      >
        <slot
          name="item"
          v-bind="item"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.marquee {
  --animation-duration: v-bind(duration);

  &:hover {
    .marquee__list {
      animation-play-state: paused;
    }
  }

  &__list {
    animation: scrolling var(--animation-duration) linear infinite;
  }
}
</style>
