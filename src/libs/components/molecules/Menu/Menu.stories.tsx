import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { HeaderProvider } from '@Context/index'
import { useHeaderContext } from '@Context/headerContext.hooks'
import { useEffect } from 'react'

import { Menu } from '.'

const SetMenuState = ({ open }: { open: boolean }) => {
  const { setToggleMenu } = useHeaderContext()

  useEffect(() => {
    setToggleMenu(open)
  }, [open, setToggleMenu])

  return null
}

const meta = {
  title: 'Molecules/Menu',
  component: Menu,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <HeaderProvider>
        <Story />
      </HeaderProvider>
    )
  ]
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Open: Story = {
  render: () => (
    <>
      <SetMenuState open />
      <Menu />
    </>
  )
}

export const Closed: Story = {
  render: () => (
    <>
      <SetMenuState open={false} />
      <Menu />
    </>
  )
}
