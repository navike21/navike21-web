import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { ParallaxImage } from '.'

import sampleImage from '@Assets/background/man-using-laptop-night-top-view-web-banner-with-copy-space.jpg'

const meta = {
  title: 'Atoms/ParallaxImage',
  component: ParallaxImage,
  tags: ['autodocs'],
  args: {
    img: sampleImage,
    alt: 'Sample parallax image',
    className: 'relative h-64 rounded-lg'
  },
  argTypes: {
    alt: {
      control: { type: 'text' }
    },
    className: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof ParallaxImage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <div className="max-w-2xl">
      <ParallaxImage {...args} />
    </div>
  )
}
