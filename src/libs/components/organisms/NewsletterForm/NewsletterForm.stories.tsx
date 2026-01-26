import type { Meta, StoryObj } from '@storybook/react'

import { NewsletterForm } from '.'

const meta = {
  title: 'Organisms/NewsletterForm',
  component: NewsletterForm,
  tags: ['autodocs']
} satisfies Meta<typeof NewsletterForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => <NewsletterForm {...args} />
}
