import type { Meta, StoryObj } from '@storybook/react'

import { Clients } from '.'

const meta = {
  title: 'Organisms/Clients',
  component: Clients,
  tags: ['autodocs']
} satisfies Meta<typeof Clients>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="p-6">
      <Clients />
    </div>
  )
}
