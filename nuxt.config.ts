export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    '@nuxt/eslint',
    '@nuxt/image',
  ],
  nitro: { preset: 'github-pages' },
  compatibilityDate: '2024-07-11',
  future: { compatibilityVersion: 4 },
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': components => {
      const globals = components.filter(c =>
        ['UButton', 'UIcon', 'UBadge'].includes(c.pascalName)
      )

      globals.forEach(c => (c.global = true))
    },
  },
  routeRules: {
    '/api/search.json': { prerender: true },
  },
  devtools: { enabled: true },
  typescript: { strict: false },
})
