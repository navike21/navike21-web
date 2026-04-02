import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'

import { Modal } from './index'

const meta = {
  title: 'Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    title: 'Default modal',
    isOpen: false,
    position: 'center',
    size: 'medium',
    animation: 'fade',
    showCloseButton: true,
    children: <p>This modal shows how the overlay and panel are rendered.</p>,
    image: ''
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
    },
    image: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

const defaultModalSourceCode = `<Modal
  title="Default modal"
  isOpen={isOpen}
  position="center"
  size="medium"
  animation="fade"
  showCloseButton
  onClose={() => setIsOpen(false)}
>
  <p>This modal shows how the overlay and panel are rendered.</p>
</Modal>`

const withImageModalSourceCode = `<Modal
  title="Modal with image"
  isOpen={isOpen}
  position="center"
  size="medium"
  animation="fade"
  image="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  imagePosition="left"
  onClose={() => setIsOpen(false)}
>
  <p>This modal includes an image column.</p>
</Modal>`

const withoutCloseButtonSourceCode = `<Modal
  isOpen={isOpen}
  showCloseButton={false}
  onClose={() => setIsOpen(false)}
>
  <p>The modal can be rendered without the close button.</p>
</Modal>`

const controlledModalSourceCode = `<Modal
  title="Controlled modal"
  isOpen={isOpen}
  position="center"
  size="medium"
  animation="fade"
  onClose={() => setIsOpen(false)}
>
  <p>This story keeps modal visibility in local state.</p>
</Modal>`

type ModalStoryShellProps = {
  args: Story['args']
  initialOpen: boolean
}

const ModalStoryShell = ({ args, initialOpen }: ModalStoryShellProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen)

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
  args: {
    isOpen: false
  },
  render: args => (
    <ModalStoryShell args={args} initialOpen={args.isOpen || false} />
  ),
  parameters: {
    docs: {
      source: {
        code: defaultModalSourceCode
      }
    }
  }
}

export const WithImage: Story = {
  args: {
    title: 'Modal with image',
    image:
      'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imagePosition: 'left',
    children: <p>This modal includes an image column.</p>,
    isOpen: false
  },
  render: args => (
    <ModalStoryShell args={args} initialOpen={args.isOpen || false} />
  ),
  parameters: {
    docs: {
      source: {
        code: withImageModalSourceCode
      }
    }
  }
}

export const WithoutCloseButton: Story = {
  args: {
    isOpen: false,
    showCloseButton: false,
    children: <p>The modal can be rendered without the close button.</p>
  },
  render: args => (
    <ModalStoryShell args={args} initialOpen={args.isOpen || false} />
  ),
  parameters: {
    docs: {
      source: {
        code: withoutCloseButtonSourceCode
      }
    }
  }
}

export const Controlled: Story = {
  args: {
    title: 'Controlled modal',
    position: 'center',
    size: 'medium',
    animation: 'fade',
    children: <p>This story keeps modal visibility in local state.</p>,
    isOpen: false
  },
  render: args => (
    <ModalStoryShell args={args} initialOpen={args.isOpen || false} />
  ),
  parameters: {
    docs: {
      source: {
        code: controlledModalSourceCode
      }
    }
  }
}
