// @ts-check
import prettier from 'eslint-config-prettier'
import oxlint from 'eslint-plugin-oxlint'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  prettier,
  ...oxlint.buildFromOxlintConfigFile('./.oxlintrc.json')
)
