import type { AssetStoryblok } from '@/types/storyblok'
import type { ISbStoryData } from 'storyblok-js-client'
import type { Ref } from 'vue'

interface SEO {
  seo_title?: string
  seo_description?: string
  seo_image?: AssetStoryblok
}

export const useStoryblokSetup = async <T extends SEO>(story: Ref<ISbStoryData<T> | null>) => {
  if (!story.value) {
    throw createError({
      statusCode: 404,
      statusMessage: `Page not found`,
      fatal: true,
    })
  }

  const { seo_title, seo_description, seo_image } = story.value.content
  const imageOptions = { width: 1200, height: 630, smart: true, quality: 90 }

  useSeoMeta({
    title: seo_title ?? story.value.name,
    description: seo_description,
    ogTitle: seo_title ?? story.value.name,
    ogDescription: seo_description,
    ogImage: storyblokImage(seo_image?.filename, imageOptions) || null,
    ogType: 'website',
    twitterTitle: seo_title ?? story.value.name,
    twitterCard: 'summary_large_image',
    twitterImage: storyblokImage(seo_image?.filename, imageOptions) || null,
  })

  onMounted(() => {
    if (story.value) {
      useStoryblokBridge(story.value.id, (evStory: any) => (story.value = evStory), {
        preventClicks: true,
      })
    }
  })
}
