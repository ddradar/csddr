export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  nitro: { preset: 'github-pages' },
  compatibilityDate: '2024-07-11',
  future: { compatibilityVersion: 4 },
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },
  typescript: { strict: false },
})
