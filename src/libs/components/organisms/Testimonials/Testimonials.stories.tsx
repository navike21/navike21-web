import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Testimonials } from './Testimonials'

const meta = {
  title: 'Organisms/Testimonials',
  component: Testimonials,
  tags: ['autodocs']
} satisfies Meta<typeof Testimonials>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="py-12">
      <Testimonials />
    </div>
  )
}
