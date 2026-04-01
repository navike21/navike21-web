import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from '.'

const meta = {
  title: 'Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: {
    children: 'Chip',
    variant: 'default',
    size: 'medium'
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'informative', 'error']
    },
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium', 'large']
    },
    icon: {
      control: { type: 'text' }
    },
    deleteable: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: args => (
    <div className="flex flex-wrap gap-2 items-center">
      <Chip {...args} variant="default">
        Default
      </Chip>
      <Chip {...args} variant="success">
        Success
      </Chip>
      <Chip {...args} variant="warning">
        Warning
      </Chip>
      <Chip {...args} variant="informative">
        Informative
      </Chip>
      <Chip {...args} variant="error">
        Error
      </Chip>
    </div>
  )
}

export const Sizes: Story = {
  render: args => (
    <div className="flex flex-wrap gap-2 items-center">
      <Chip {...args} size="xsmall">
        X-Small
      </Chip>
      <Chip {...args} size="small">
        Small
      </Chip>
      <Chip {...args} size="medium">
        Medium
      </Chip>
      <Chip {...args} size="large">
        Large
      </Chip>
    </div>
  )
}

export const WithIcon: Story = {
  args: {
    children: 'With Icon',
    icon: 'RiHomeLine'
  }
}

export const Deleteable: Story = {
  args: {
    children: 'Deleteable',
    deleteable: true,
    deleteButtonProps: {
      'aria-label': 'Remove chip'
    }
  }
}

export const DeleteableAllSizes: Story = {
  render: args => (
    <div className="flex flex-wrap gap-2 items-center">
      <Chip {...args} size="xsmall" deleteable>
        X-Small
      </Chip>
      <Chip {...args} size="small" deleteable>
        Small
      </Chip>
      <Chip {...args} size="medium" deleteable>
        Medium
      </Chip>
      <Chip {...args} size="large" deleteable>
        Large
      </Chip>
    </div>
  )
}

export const DisabledDelete: Story = {
  args: {
    children: 'Cannot remove',
    deleteable: true,
    deleteButtonProps: {
      disabled: true,
      'aria-label': 'Remove chip'
    }
  }
}
