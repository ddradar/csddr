export default defineNuxtConfig({
  compatibilityDate: '2024-07-11',
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/eslint', '@nuxt/image'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  nitro: { preset: 'github-pages' },
  content: {
    experimental: { sqliteConnector: 'native' },
  },
})
