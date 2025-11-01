// eslint.config.mjs
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import nextPlugin from '@next/eslint-plugin-next'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: [
      'node_modules',
      '.next',
      'dist',
      'build',
      'coverage',
      'public',
      '.vscode',
      '**/*.d.ts' // 👈 ya puedes agregar esta línea si prefieres ignorarlos directamente
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
        ecmaVersion: 'latest'
      },
      globals: {
        React: 'readonly',
        JSX: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'react-refresh': eslintPluginReactRefresh,
      'jsx-a11y': eslintPluginJsxA11y,
      prettier: eslintPluginPrettier,
      next: nextPlugin
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'none',
          printWidth: 80,
          arrowParens: 'avoid',
          endOfLine: 'lf'
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'next/no-img-element': 'off',
      'next/no-html-link-for-pages': 'off',
      'jsx-a11y/alt-text': 'warn',
      semi: ['error', 'never'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-console': 'warn',
      'no-debugger': 'error'
    }
  },

  // 👇 Nuevo bloque específico para declaraciones .d.ts
  {
    files: ['**/*.d.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest'
      }
    },
    rules: {
      'prettier/prettier': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  }
]
