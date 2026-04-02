import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { HeaderProvider } from '@Context/index'

import { BgHeader, Header } from '.'

const meta = {
  title: 'Molecules/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <HeaderProvider>
        <div className="min-h-screen bg-white">
          <BgHeader />
          <Story />
          <main className="pt-32 p-6">
            <div className="text-primary-text font-medium">Page content</div>
            <p className="text-sm">Scroll to see header solid state.</p>
            <div className="h-[200vh]" />
          </main>
        </div>
      </HeaderProvider>
    )
  ]
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
