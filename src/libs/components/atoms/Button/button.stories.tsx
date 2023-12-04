import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { MEDIUM, PRIMARY } from '@Constants/shared'

const meta = {
  title: 'Components/Atoms/Button',
  component: Button,
  tags: ['autodocs']
} as Meta<typeof Button>

export default meta

type TStory = StoryObj<typeof meta>

export const ButtonComponent: TStory = {
  args: {
    children: "Hi i'm button",
    size: MEDIUM,
    outline: false,
    disabled: false,
    color: PRIMARY
  },
  render: args => <Button {...args} />
}

export const Outline: TStory = {
  args: {
    children: "Hi i'm button",
    size: MEDIUM,
    outline: true,
    disabled: false
  },
  render: args => <Button {...args} />
}

export const Disabled: TStory = {
  args: {
    children: "Hi i'm button",
    size: MEDIUM,
    outline: false,
    disabled: true
  },
  render: args => <Button {...args} />
}
