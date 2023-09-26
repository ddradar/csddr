export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  nitro: { preset: 'github_pages' },
  routeRules: {
    '/**': { static: true },
  },
  modules: ['@nuxt/devtools'],
  content: { markdown: { toc: { depth: 3 } } },
})
