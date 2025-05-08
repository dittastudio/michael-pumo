<script lang="ts" setup>
interface Props {
  error: {
    statusCode: number
    statusMessage: string
  }
}

const { error } = defineProps<Props>()

console.log(error)

useHead({
  title:
    error?.statusCode && error?.statusMessage
      ? `${error?.statusCode} ${error?.statusMessage}`
      : 'An unexpected error occurred',
})
</script>

<template>
  <div>
    Error Page: {{ error.statusCode }} {{ error.statusMessage }}
  </div>
</template>
