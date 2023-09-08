module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
