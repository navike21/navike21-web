import { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Icon } from '../Icon'

const meta = {
  title: 'Components/Atoms/Input',
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

export const InputComponentLabelStrong: TStory = {
  args: {
    label: (
      <>
        Label <strong>strong</strong>
      </>
    ),
    disabled: false
  },
  render: args => <Input {...args} />
}

export const InputComponentDisabled: TStory = {
  args: {
    label: 'Label',
    disabled: true,
    defaultValue: 'Message content'
  },
  render: args => <Input {...args} />
}

export const InputComponentIconLeft: TStory = {
  args: {
    label: 'Label',
    disabled: false,
    iconLeft: {
      iconName: {
        fontAwesome: 'FaSteam'
      },
      library: 'fontAwesome'
    },
    defaultValue: 'Message content'
  },
  render: args => <Input {...args} />
}
