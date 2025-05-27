<script lang="ts" setup>
interface Props {
  timeZone?: string
}

const { timeZone = 'Europe/London' } = defineProps<Props>()

const date = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'full',
  timeZone,
}).format(new Date()).split(' ')

const datetime = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'short',
  timeZone,
}).format(new Date()).replace(/\//g, '-')

const weekday = date[0]
const day = date[1]
const month = date[2]
const year = date[3]
</script>

<template>
  <time
    class="block"
    :datetime="datetime"
  >
    <slot
      name="date"
      v-bind="{ weekday, day, month, year }"
    />
  </time>
</template>
