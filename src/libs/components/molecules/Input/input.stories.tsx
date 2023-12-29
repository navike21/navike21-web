import { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
  title: 'Components/Molecules/Input',
  component: Input
} as Meta<typeof Input>

export default meta
type TStory = StoryObj<typeof meta>

export const InputComponent: TStory = {
  args: {
    label: 'Label',
    disabled: false
  },
  render: args => <Input {...args} />
}
