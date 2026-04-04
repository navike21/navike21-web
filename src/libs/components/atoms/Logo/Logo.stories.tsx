import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Logo } from './Logo'

const meta = {
  title: 'Atoms/Logo',
  component: Logo,
  tags: ['autodocs'],
  args: {
    showText: true,
    size: 'sm',
    textColor: 'black',
    logoColor: 'gradient'
  },
  argTypes: {
    showText: {
      control: { type: 'boolean' }
    },
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    textColor: {
      control: { type: 'radio' },
      options: ['white', 'black', 'gradient']
    },
    logoColor: {
      control: { type: 'radio' },
      options: ['white', 'black', 'gradient']
    },
    classNameTextColor: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const IconOnly: Story = {
  args: {
    showText: false
  }
}

export const Sizes: Story = {
  render: args => (
    <div className="flex flex-col gap-4">
      <Logo {...args} size="xs" />
      <Logo {...args} size="sm" />
      <Logo {...args} size="md" />
      <Logo {...args} size="lg" />
      <Logo {...args} size="xl" />
    </div>
  )
}
