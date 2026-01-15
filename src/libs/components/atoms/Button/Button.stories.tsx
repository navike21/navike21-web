import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium'
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary']
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large']
    },
    icon: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
}

export const Sizes: Story = {
  render: args => (
    <div className="flex flex-col gap-4 items-start">
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="medium">
        Medium
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
    </div>
  )
}

export const WithIcon: Story = {
  args: {
    children: 'With icon',
    icon: 'RiHomeLine'
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled'
  }
}
