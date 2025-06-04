<script lang="ts" setup>
import type { PageStoryblok } from '@@/types/storyblok'

interface Props {
  content: PageStoryblok
}

const { content } = defineProps<Props>()
</script>

<template>
  <div>
    <template
      v-for="(block) in content.blocks"
      :key="block._uid"
    >
      <section v-if="block.component === 'block_hero'">
        <BlockHero :block />
      </section>
    </template>

    <article>
      <template
        v-for="(block) in content.blocks"
        :key="block._uid"
      >
        <section v-if="block.component === 'block_bento'">
          <BlockBento :block />
        </section>

        <section v-else-if="block.component === 'block_faq'">
          <BlockFaq :block />
        </section>

        <section v-else-if="block.component === 'block_play'">
          <BlockPlay :block />
        </section>

        <section v-else-if="block.component === 'block_projects'">
          <BlockProjects :block />
        </section>

        <section v-else-if="block.component === 'block_text'">
          <BlockText :block />
        </section>
      </template>
    </article>
  </div>
</template>
