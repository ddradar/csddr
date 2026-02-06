export default defineNuxtConfig({
  compatibilityDate: '2024-07-11',
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/eslint', '@nuxt/image'],
  experimental: {
    extractAsyncDataHandlers: true,
    typedPages: true,
    typescriptPlugin: true,
  },
  nitro: {
    preset: 'github-pages',
    compressPublicAssets: true,
  },
  vite: {
    vue: { features: { optionsAPI: false } },
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  content: {
    experimental: { sqliteConnector: 'native' },
  },
})
