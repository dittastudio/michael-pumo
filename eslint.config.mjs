import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    ignores: [
      'components.338175.json',
      'types/storyblok.d.ts',
    ],
  },
  antfu({
    rules: {
      'antfu/top-level-function': 'off',
      'toml/indent': ['error', 2, { subTables: 1, keyValuePairs: 1 }],
      'curly': 'off',
      'no-console': 'off',
      'node/prefer-global/process': 'off',
      'vue/define-macros-order': 'off',
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/padding-line-between-tags': [
        'error',
        [{ blankLine: 'always', prev: '*', next: '*' }],
      ],
      'vue/custom-event-name-casing': [
        'error',
        'kebab-case',
        {
          ignores: [],
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      'vue/prefer-separate-static-class': 'off',
    },
  }),
)
