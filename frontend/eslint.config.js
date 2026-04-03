import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      globals: globals.browser
    }
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'no-unused-vars': 'warn'
    }
  }
]