import { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'
import { MEDIUM, PRIMARY } from '@Constants/shared'

const meta = {
  title: 'Components/Atoms/Logo',
  component: Logo
} as Meta<typeof Logo>

export default meta

type TStory = StoryObj<typeof meta>

export const LogoComponent: TStory = {
  args: {
    color: PRIMARY,
    size: MEDIUM
  },
  render: args => <Logo {...args} />
}
