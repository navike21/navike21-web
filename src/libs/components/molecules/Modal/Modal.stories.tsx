import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Modal } from './index'

const meta = {
  title: 'Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    title: 'Default modal',
    isOpen: true,
    position: 'center',
    size: 'medium',
    animation: 'fade',
    showCloseButton: true,
    children: <p>This modal shows how the overlay and panel are rendered.</p>
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right', 'center']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'full']
    },
    animation: {
      control: { type: 'select' },
      options: ['fade', 'slide', 'scale', 'none']
    },
    imagePosition: {
      control: { type: 'select' },
      options: ['left', 'right']
    }
  }
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

const ControlledModalStory = (args: Story['args']) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex min-h-120 items-center justify-center bg-slate-50 p-6">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
      >
        Open modal
      </button>

      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export const Default: Story = {
  args: {},
  render: args => <ControlledModalStory {...args} />
}

export const WithImage: Story = {
  args: {
    title: 'Modal with image',
    image: 'https://via.placeholder.com/400',
    imagePosition: 'left',
    children: <p>This modal includes an image column.</p>
  },
  render: args => <ControlledModalStory {...args} />
}

export const WithoutCloseButton: Story = {
  args: {
    showCloseButton: false,
    children: <p>The modal can be rendered without the close button.</p>
  },
  render: args => <ControlledModalStory {...args} />
}

export const Controlled: Story = {
  args: {
    title: 'Controlled modal',
    position: 'center',
    size: 'medium',
    animation: 'fade',
    children: <p>This story keeps modal visibility in local state.</p>
  },
  render: args => <ControlledModalStory {...args} />
}
