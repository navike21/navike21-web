import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from '.'

const meta = {
  title: 'Molecules/Slider',
  component: Slider,
  tags: ['autodocs'],
  args: {
    options: {
      perPage: 2,
      gap: '1rem',
      pagination: true,
      arrows: true
    },
    children: [
      <div
        key="1"
        className="bg-white rounded-lg shadow-md shadow-gray-900/20 p-6"
      >
        Slide 1
      </div>,
      <div
        key="2"
        className="bg-white rounded-lg shadow-md shadow-gray-900/20 p-6"
      >
        Slide 2
      </div>,
      <div
        key="3"
        className="bg-white rounded-lg shadow-md shadow-gray-900/20 p-6"
      >
        Slide 3
      </div>
    ]
  },
  argTypes: {
    children: {
      control: false
    }
  }
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SingleSlide: Story = {
  args: {
    children: (
      <div className="bg-white rounded-lg shadow-md shadow-gray-900/20 p-6">
        Single slide
      </div>
    ),
    options: {
      perPage: 1,
      pagination: true,
      arrows: true
    }
  }
}
