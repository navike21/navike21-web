import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Almazen } from './Almazen'
import { Anker } from './Anker'
import { Beats } from './Beats'
import { Carbyne } from './Carbyne'
import { Circurela } from './Circurela'
import { ColegioLaUnion } from './ColegioLaUnion'
import { Eurogourmet } from './Eurogourmet'
import { HammerBlocs } from './HammerBlocs'
import { RkPower } from './RkPower'
import { TentacionesGourmet } from './TentacionesGourmet'

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
