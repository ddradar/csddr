export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/eslint', '@nuxt/image'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  nitro: { preset: 'github-pages' },
  compatibilityDate: '2024-07-11',
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },
  icon: { provider: 'iconify' },
})
