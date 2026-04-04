import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { NewsletterForm } from './NewsletterForm'

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
