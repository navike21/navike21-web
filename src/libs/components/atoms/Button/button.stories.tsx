import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
	title: 'Components/Atoms/Button',
	component: Button
} as Meta<typeof Button>

export default meta

type TStory = StoryObj<typeof meta>

export const Default: TStory = {
	args: {
		children: "Hi i'm button",
		size: 'medium',
		outline: false,
		disabled: false
	},
	render: args => <Button {...args} />
}
