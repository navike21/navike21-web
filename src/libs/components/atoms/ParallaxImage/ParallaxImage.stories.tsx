import type { Meta, StoryObj } from '@storybook/react'

import { ParallaxImage } from '.'

import sampleImage from '@Assets/images/technology-expert-developing-userfriendly-software-by-understanding-requirements-endusers.jpg'

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
