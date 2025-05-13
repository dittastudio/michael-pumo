import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    'lenis/nuxt',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.NUXT_STORYBLOK_TOKEN,
      },
    ],
  ],
  ssr: true,
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: false,
    head: {
      htmlAttrs: {
        lang: 'en-GB',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'author', content: 'Michael Pumo' },
        { name: 'msapplication-TileColor', content: '#e87a07' },
        { name: 'theme-color', content: '#e87a07' },
        { name: 'apple-mobile-web-app-title', content: 'Michael Pumo' },
        { 'http-equiv': 'content-language', 'content': 'en-GB' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preload', type: 'font/woff2', href: '/fonts/SaansProportional-VF.woff2', as: 'font', crossorigin: '' },
        { rel: 'preload', type: 'font/woff2', href: '/fonts/SaansItalics-VF.woff2', as: 'font', crossorigin: '' },
      ],
    },
  },
  // css: ['~/assets/css/main.css', process.env.NUXT_STORYBLOK_VERSION === 'draft' ? '@michaelpumo/screen/app.css' : undefined]
  css: ['~/assets/css/app.css'],
  site: {
    url: 'https://michaelpumo.com',
    name: 'Michael Pumo',
  },
  runtimeConfig: {
    public: {
      STORYBLOK_TOKEN: process.env.NUXT_STORYBLOK_TOKEN,
      STORYBLOK_VERSION: process.env.NUXT_STORYBLOK_VERSION,
    },
  },
  features: {
    noScripts: false,
  },
  compatibilityDate: '2025-04-13',
  vite: {
    plugins: [
      tailwindcss(),
      svgLoader({
        svgo: false,
      }),
    ],
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
  eslint: {
    config: {
      standalone: false,
      stylistic: true,
      autoInit: false,
    },
  },
  image: {
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a2.storyblok.com',
    },
    domains: ['storyblok.com', 'michaelpumo.com'],
    quality: 80,
    screens: {
      '2xs': 375,
      'xs': 480,
      'sm': 600,
      'md': 800,
      'lg': 1200,
      'xl': 1440,
      '2xl': 1800,
    },
  },
  sitemap: {
    sources: ['/api/sitemap'],
  },
})
