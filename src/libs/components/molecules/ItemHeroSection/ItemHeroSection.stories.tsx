import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { ItemHeroSection } from './ItemHeroSection'

import heroImage from '@Assets/background/modern-office-meeting-room-with-collaborative-atmosphere_1294860-39186.jpg'

const meta = {
  title: 'Molecules/ItemHeroSection',
  component: ItemHeroSection,
  tags: ['autodocs'],
  args: {
    heroImage,
    title: 'Build products faster',
    description:
      'A hero section item with a parallax image and optional call-to-action links.',
    controlActions: [
      {
        href: '/',
        children: 'Get started',
        variant: 'primary',
        size: 'medium'
      },
      {
        href: '/',
        children: 'Learn more',
        variant: 'secondary',
        size: 'medium'
      }
    ]
  },
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } }
  }
} satisfies Meta<typeof ItemHeroSection>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NoActions: Story = {
  args: {
    controlActions: []
  }
}
