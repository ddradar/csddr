export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  nitro: { preset: 'github_pages' },
  modules: ['@nuxt/devtools'],
})
