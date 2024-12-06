import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    coverage: {
      provider: 'v8',
      enabled: true,
      all: true,
      reporter: ['json', 'text'],
      include: ['**/*.ts', 'components/content/**/*.vue'],
      exclude: ['.nuxt/**', 'test/**', '**/*.config.ts', '**/*.test.ts'],
    },
  },
})
