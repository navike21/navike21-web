import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Card, ItemCard, ItemLinkCard } from '.'

const meta = {
  title: 'Atoms/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    showLine: true
  },
  argTypes: {
    showLine: {
      control: { type: 'boolean' }
    },
    className: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div className="max-w-sm">
      <Card {...args}>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-medium text-center leading-6 text-primary-text">
            Card
          </h3>
          <p className="text-center text-sm">
            Simple content inside the Card component.
          </p>
        </div>
      </Card>
    </div>
  )
}

export const Item: Story = {
  render: () => (
    <div className="max-w-sm">
      <ItemCard
        title="ItemCard"
        description="Card with title, description and icon."
        icon="RiHomeLine"
      />
    </div>
  )
}

export const ItemLink: Story = {
  render: () => (
    <div className="max-w-sm">
      <ItemLinkCard
        href="/"
        title="ItemLinkCard"
        description="Clickable card rendered as a Next.js Link."
        icon="RiArrowRightLine"
      />
    </div>
  )
}
