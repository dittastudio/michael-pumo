<script lang="ts" generic="T" setup>
interface Props {
  items?: T[]
  speed?: number
  pauseOnHover?: boolean
}

const { items = [], speed = 30, pauseOnHover = true } = defineProps<Props>()

const duplicatedItems = computed(() => [...items, ...items])

const isPaused = ref(false)
const marqueeRef = ref<HTMLElement | null>(null)

function handleMouseEnter() {
  if (pauseOnHover) {
    isPaused.value = true
  }
}

function handleMouseLeave() {
  if (pauseOnHover) {
    isPaused.value = false
  }
}

// Calculate animation duration based on speed
const animationDuration = computed(() => (!items?.length) ? '0s' : `${items.length * (100 / speed)}s`)

const animationClasses = computed(() => ({
  'marquee-paused': isPaused.value,
}))

// Set up animation properties
onMounted(() => {
  if (marqueeRef.value) {
    marqueeRef.value.style.setProperty('--animation-duration', animationDuration.value)
  }
})
</script>

<template>
  <div
    ref="marqueeRef"
    class="w-full overflow-hidden relative"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="w-full">
      <ul
        class="marquee-content"
        :class="animationClasses"
      >
        <li
          v-for="(item, index) in duplicatedItems"
          :key="index"
          class="marquee-item"
        >
          <slot
            name="item"
            v-bind="item"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.marquee-content {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  animation: scrolling var(--animation-duration) linear infinite;
}

.marquee-item {
  flex: 0 0 20%; /* Each item takes exactly 20% width */
  min-width: 20%; /* Ensure minimum width is maintained */
}

.marquee-paused {
  animation-play-state: paused;
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
