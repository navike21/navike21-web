// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  // === Base configs ===
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended'
  ),

  // === Ignored paths ===
  {
    ignores: [
      'node_modules',
      '.next',
      'dist',
      'public',
      '.pnp.*',
      'coverage',
      'coverage/**',
      '*.config.js',
      '.vscode',
      '.env',
      '.env.*',
      '**/*.d.ts'
    ]
  },

  // === Exception for Next.js layouts & pages ===
  {
    files: ['src/app/**/layout.{ts,tsx}', 'src/app/**/page.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off'
    }
  },

  // === Global rules ===
  {
    plugins: {
      'react-refresh': eslintPluginReactRefresh
    },
    rules: {
      // === Formatting ===
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

      // === Syntax ===
      semi: ['error', 'never'],
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],

      // === Naming conventions ===
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'interface', format: ['PascalCase'], prefix: ['I'] },
        { selector: 'typeAlias', format: ['PascalCase'], prefix: ['T'] },
        { selector: 'enum', format: ['PascalCase'], prefix: ['E'] },
        { selector: 'typeParameter', format: ['PascalCase'], prefix: ['T'] },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase']
        },
        { selector: 'function', format: ['camelCase', 'PascalCase'] }
      ],

      // === Code clarity ===
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/jsx-handler-names': 'off',

      // === React 19 + Compiler safe ===
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  }
]

export default eslintConfig
