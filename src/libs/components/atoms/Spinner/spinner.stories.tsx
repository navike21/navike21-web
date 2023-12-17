import { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'
import { MEDIUM, PRIMARY } from '@Constants/shared'

const meta = {
  title: 'Components/Atoms/Spinner',
  component: Spinner
} as Meta<typeof Spinner>

export default meta

type TStory = StoryObj<typeof meta>

export const SpinnerComponent: TStory = {
  args: {
    color: PRIMARY,
    size: MEDIUM
  },
  render: args => <Spinner {...args} />
}
