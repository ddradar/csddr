export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  nitro: {
    preset: 'github_pages',
  },
  modules: ['@nuxtjs/plausible', '@nuxt/devtools'],
})
