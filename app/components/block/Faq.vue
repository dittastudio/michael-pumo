<script lang="ts" setup>
import type { BlockFaqStoryblok } from '@@/types/storyblok'

interface Props {
  block: BlockFaqStoryblok
}

const { block } = defineProps<Props>()
</script>

<template>
  <div
    v-editable="block"
    class="w-full px-gutter py-gutter-xl"
    :class="block.background"
  >
    <div class="w-full mx-auto md:max-w-[615px]">
      <h3
        v-if="block.headline"
        class="text-18 mb-2"
      >
        {{ block.headline }}
      </h3>

      <UiAccordion
        v-if="block.faq"
        :items="block.faq"
      >
        <template #item="{ question, answer, isLast }">
          <UiAccordionItem
            v-if="question && answer"
            :headline="question"
            :text="answer"
            :is-last="isLast"
          />
        </template>
      </UiAccordion>
    </div>
  </div>
</template>
