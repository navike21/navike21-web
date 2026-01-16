import type { StorybookConfig } from '@storybook/nextjs-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {}
  },
  viteFinal: async viteConfig => {
    viteConfig.plugins = [...(viteConfig.plugins ?? []), tsconfigPaths()]
    return viteConfig
  }
}

export default config
