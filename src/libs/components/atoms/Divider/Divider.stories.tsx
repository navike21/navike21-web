import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Divider } from './Divider'

const meta = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  args: {
    orientation: 'horizontal',
    align: 'center',
    color: 'light'
  },
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical']
    },
    align: {
      control: { type: 'radio' },
      options: ['start', 'center', 'end']
    },
    color: {
      control: { type: 'radio' },
      options: ['light', 'dark', 'gradient']
    },
    className: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Divider>

export default meta

type Story = StoryObj<typeof meta>

export const LineOnly: Story = {
  args: {
    children: null
  }
}

export const WithText: Story = {
  args: {
    children: 'OR'
  }
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    children: 'OR'
  },
  render: args => (
    <div className="h-40">
      <Divider {...args} />
    </div>
  )
}

export const color: Story = {
  args: {
    color: 'gradient',
    children: 'OR'
  },
  render: args => (
    <div className="h-40">
      <Divider {...args} />
    </div>
  )
}
