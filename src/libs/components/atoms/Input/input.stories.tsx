import { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
  title: 'Components/Atoms/Input',
  component: Input,
  tags: ['autodocs']
} as Meta<typeof Input>

export default meta
type TStory = StoryObj<typeof meta>

export const InputComponent: TStory = {
  args: {
    label: 'User'
  },
  render: args => <Input {...args} />
}
