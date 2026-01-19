import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        '.next/',
        'out/',
        'coverage/',
        'storybook-static/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/*.stories.{ts,tsx}',
        '**/*.types.{ts,tsx}',
        '**/mockData',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        'src/app/**',
        'src/libs/assets/**',
        'src/libs/sources/**',
        'src/libs/i18n/**',
        'src/libs/constants/**',
        'src/types/**',
        'src/libs/types/**',
        'src/libs/components/**/index.ts',
        'src/libs/context/index.ts',
      ],
      include: ['src/**/*.{ts,tsx}'],
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90
      }
    },
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: [
      'node_modules',
      '.next',
      'out',
      'coverage',
      'storybook-static',
      'src/app/**',
      'src/types/**',
      'src/libs/types/**',
      'src/libs/assets/**',
      'src/libs/sources/**',
      'src/libs/i18n/**'
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Assets': path.resolve(__dirname, './src/libs/assets'),
      '@Components': path.resolve(__dirname, './src/libs/components'),
      '@Constants': path.resolve(__dirname, './src/libs/constants'),
      '@Context': path.resolve(__dirname, './src/libs/context'),
      '@Hooks': path.resolve(__dirname, './src/libs/hooks'),
      '@I18n': path.resolve(__dirname, './src/libs/i18n'),
      '@Pages': path.resolve(__dirname, './src/views/pages'),
      '@Sources': path.resolve(__dirname, './src/libs/sources'),
      '@Styles': path.resolve(__dirname, './src/libs/styles'),
      '@Types': path.resolve(__dirname, './src/libs/types'),
      '@Helpers': path.resolve(__dirname, './src/libs/helpers'),
      '@Views': path.resolve(__dirname, './src/views'),
    }
  }
})
