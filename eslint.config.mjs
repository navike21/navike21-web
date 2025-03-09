import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended'
  ),
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          trailingComma: 'none',
          arrowParens: 'avoid',
          printWidth: 80,
          endOfLine: 'auto'
        }
      ],
      'linebreak-style': 'off',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-unused-vars': ['error'],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          prefix: ['T']
        },
        { selector: 'enum', format: ['PascalCase'], prefix: ['E'] },
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I']
        }
      ]
    }
  }
]

export default eslintConfig
