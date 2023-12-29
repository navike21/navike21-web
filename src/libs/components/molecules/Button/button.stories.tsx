import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { LARGE, PRIMARY } from '@Constants/shared'

const meta = {
  title: 'Components/Molecules/Button',
  component: Button
} as Meta<typeof Button>

export default meta

type TStory = StoryObj<typeof meta>

export const ButtonComponent: TStory = {
  args: {
    children: "Hi i'm button",
    color: PRIMARY,
    disabled: false,
    loading: 'false',
    outline: false,
    size: LARGE
  },
  render: args => <Button {...args} />
}

export const Outline: TStory = {
  args: {
    children: "Hi i'm button",
    disabled: false,
    outline: true,
    size: LARGE
  },
  render: args => <Button {...args} />
}

export const Disabled: TStory = {
  args: {
    children: "Hi i'm button",
    size: LARGE,
    outline: false,
    disabled: true
  },
  render: args => <Button {...args} />
}

export const Loading: TStory = {
  args: {
    children: "Hi i'm button",
    size: LARGE,
    outline: false,
    loading: 'true'
  },
  render: args => <Button {...args} />
}
