import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { HeaderProvider } from '@Context/index'

import { LayoutScroll } from '.'

const meta = {
  title: 'Molecules/LayoutScroll',
  component: LayoutScroll,
  tags: ['autodocs'],
  args: {
    children: (
      <div className="min-h-[200vh] pt-36">
        <div className="container max-w-3xl mx-auto w-[80%]">
          <h2 className="text-2xl font-medium text-primary-text">
            Scroll to see header background behavior
          </h2>
          <p className="mt-4">
            This story renders LayoutScroll (Lenis + motion frame loop) with a
            tall page to allow scrolling.
          </p>
        </div>
      </div>
    )
  },
  decorators: [
    Story => (
      <HeaderProvider>
        <Story />
      </HeaderProvider>
    )
  ]
} satisfies Meta<typeof LayoutScroll>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
