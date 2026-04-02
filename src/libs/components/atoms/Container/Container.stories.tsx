import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Container } from '.'

const meta = {
  title: 'Atoms/Container',
  component: Container,
  tags: ['autodocs'],
  args: {
    className: '',
    children: (
      <div className="py-8">
        <div className="text-primary-text font-medium">Container content</div>
        <div className="text-sm">
          This is wrapped by the Container max-width and padding rules.
        </div>
      </div>
    )
  },
  argTypes: {
    className: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: '',
    children: (
      <div className="py-8">
        <div className="text-primary-text font-medium">Container content</div>
        <div className="text-sm">
          This is wrapped by the Container max-width and padding rules.
        </div>
      </div>
    )
  },
  render: args => <Container {...args} />
}
