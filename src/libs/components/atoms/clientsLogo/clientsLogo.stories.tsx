import type { Meta, StoryObj } from '@storybook/react'

import {
  Almazen,
  Anker,
  Beats,
  Carbyne,
  Circurela,
  ColegioLaUnion,
  Eurogourmet,
  HammerBlocs,
  RkPower,
  TentacionesGourmet
} from './index'

const meta = {
  title: 'Atoms/clientsLogo',
  component: Almazen,
  tags: ['autodocs'],
  args: {
    isColor: false,
    className: 'w-40 h-auto'
  },
  argTypes: {
    isColor: {
      control: { type: 'boolean' }
    },
    className: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Almazen>

export default meta

type Story = StoryObj<typeof meta>

export const Single: Story = {}

export const Gallery: Story = {
  render: args => (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center">
      <Almazen {...args} />
      <Anker {...args} />
      <Beats {...args} />
      <Carbyne {...args} />
      <Circurela {...args} />
      <ColegioLaUnion {...args} />
      <Eurogourmet {...args} />
      <HammerBlocs {...args} />
      <RkPower {...args} />
      <TentacionesGourmet {...args} />
    </div>
  )
}
