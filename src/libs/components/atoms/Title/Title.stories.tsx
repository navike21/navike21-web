import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Title } from './Title'

const meta = {
  title: 'Atoms/Title',
  component: Title,
  tags: ['autodocs'],
  args: {
    title: 'Section title',
    subTitle: 'A short subtitle explaining this section.'
  },
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    subTitle: {
      control: { type: 'text' }
    },
    className: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Title>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutSubtitle: Story = {
  args: {
    subTitle: ''
  }
}
