import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

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
    size: 'medium',
    outline: false,
    disabled: false
  },
  render: args => <Button {...args} />
}

export const Outline: TStory = {
  args: {
    children: "Hi i'm button",
    size: 'medium',
    outline: true,
    disabled: false
  },
  render: args => <Button {...args} />
}

export const Disabled: TStory = {
  args: {
    children: "Hi i'm button",
    size: 'medium',
    outline: false,
    disabled: true
  },
  render: args => <Button {...args} />
}
