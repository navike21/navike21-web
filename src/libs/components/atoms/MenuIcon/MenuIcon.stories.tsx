import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { MenuIcon } from './MenuIcon'

import { HeaderProvider } from '@Context/index'
import { useHeaderContext } from '@Context/headerContext.hooks'
import { useEffect } from 'react'

const SetMenuState = ({ open }: { open: boolean }) => {
  const { setToggleMenu } = useHeaderContext()

  useEffect(() => {
    setToggleMenu(open)
  }, [open, setToggleMenu])

  return null
}

const meta = {
  title: 'Atoms/MenuIcon',
  component: MenuIcon,
  tags: ['autodocs'],
  args: {
    className: 'w-10 h-10 stroke-current'
  },
  argTypes: {
    className: {
      control: { type: 'text' }
    }
  },
  decorators: [
    Story => (
      <HeaderProvider>
        <div className="text-primary-text">
          <Story />
        </div>
      </HeaderProvider>
    )
  ]
} satisfies Meta<typeof MenuIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Closed: Story = {
  render: args => (
    <>
      <SetMenuState open={false} />
      <MenuIcon {...args} />
    </>
  )
}

export const Open: Story = {
  render: args => (
    <>
      <SetMenuState open />
      <MenuIcon {...args} />
    </>
  )
}
