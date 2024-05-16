import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: [
    {
      directory: '../src/stories/docs',
      files: '*.mdx'
    },
    {
      directory: '../src/stories/components',
      files: '*.stories.@(js|jsx|mjs|ts|tsx)'
    },
    {
      directory: '../src/stories/examples',
      files: '*.stories.@(js|jsx|mjs|ts|tsx)'
    }
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {}
}
export default config
