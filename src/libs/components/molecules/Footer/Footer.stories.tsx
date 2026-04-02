import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Footer } from '.'

const meta = {
  title: 'Molecules/Footer',
  component: Footer,
  tags: ['autodocs']
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1" />
      <Footer />
    </div>
  )
}
