import react from '@vitejs/plugin-react'
import path from 'path'
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
        '**/*.d.ts',
        '**/*.config.*',
        '**/mockData',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        'src/app/**',
        'src/libs/assets/**',
        'src/libs/sources/**',
        'src/libs/i18n/**',
        'src/libs/constants/**',
        'src/types/**'
      ],
      include: ['src/**/*.{ts,tsx}'],
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 70,
        statements: 70
      }
    },
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', '.next', 'out', 'coverage']
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
      '@Helpers': path.resolve(__dirname, './src/libs/helpers')
    }
  }
})
