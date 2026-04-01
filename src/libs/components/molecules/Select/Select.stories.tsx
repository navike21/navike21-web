import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { userEvent, within } from 'storybook/test'
import { Select } from './index'
import type { SelectOptionItem } from './Select.types'
import { IconComponent } from '@Components/atoms'

const basicOptions: SelectOptionItem[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' }
]

const manyOptions: SelectOptionItem[] = Array.from({ length: 15 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: String(i + 1)
}))

const optionsWithIcons: SelectOptionItem[] = [
  { label: 'Home', value: 'home', icon: 'RiHomeLine' },
  { label: 'User', value: 'user', icon: 'RiUserLine' },
  { label: 'Settings', value: 'settings', icon: 'RiSettings3Line' },
  { label: 'Notifications', value: 'notifications', icon: 'RiNotificationLine' }
]

const optionsWithDisabled: SelectOptionItem[] = [
  { label: 'Available option', value: '1' },
  { label: 'Disabled option', value: '2', disabled: true },
  { label: 'Another available', value: '3' },
  { label: 'Also disabled', value: '4', disabled: true },
  { label: 'Last available', value: '5' }
]

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'error', 'warning']
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    multiple: { control: 'boolean' },
    search: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' }
  },
  decorators: [
    Story => (
      <div className="w-80">
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select an option'
  }
}

export const WithLabel: Story = {
  args: {
    label: 'Category:',
    options: basicOptions,
    placeholder: 'Select a category',
    helperText: 'Choose the category that best fits.'
  }
}

export const Multiple: Story = {
  args: {
    label: 'Tags:',
    options: basicOptions,
    multiple: true,
    placeholder: 'Select tags'
  }
}

export const WithSearch: Story = {
  args: {
    label: 'Country:',
    options: manyOptions,
    search: true,
    placeholder: 'Select a country'
  }
}

export const WithIcons: Story = {
  args: {
    label: 'Navigate to:',
    options: optionsWithIcons,
    defaultValue: 'home',
    placeholder: 'Choose a section',
    leftSlot: (
      <IconComponent icon="RiCompassLine" className="size-5 text-slate-500" />
    ),
    rightSlot: (
      <IconComponent
        icon="RiArrowRightSLine"
        className="size-5 text-slate-400"
      />
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('combobox'))
  }
}

export const WithDisabledOptions: Story = {
  args: {
    label: 'Plan:',
    options: optionsWithDisabled,
    placeholder: 'Select a plan'
  }
}

export const ErrorState: Story = {
  args: {
    label: 'Required field:',
    options: basicOptions,
    variant: 'error',
    errorMessage: 'Please select an option.',
    placeholder: 'Select...'
  }
}

export const SuccessState: Story = {
  args: {
    label: 'Verified field:',
    options: basicOptions,
    variant: 'success',
    defaultValue: '1',
    placeholder: 'Select...'
  }
}

export const Loading: Story = {
  args: {
    label: 'Loading options:',
    options: basicOptions,
    loading: true,
    placeholder: 'Loading...'
  }
}

export const Disabled: Story = {
  args: {
    label: 'Disabled selector:',
    options: basicOptions,
    disabled: true,
    defaultValue: '1',
    placeholder: 'Cannot change'
  }
}

export const MultipleWithSearch: Story = {
  args: {
    label: 'Select items:',
    options: manyOptions,
    multiple: true,
    search: true,
    placeholder: 'Search and select...'
  }
}

const ControlledStory = () => {
  const [value, setValue] = useState('')
  return (
    <div className="flex flex-col gap-4">
      <Select
        label="Controlled selector:"
        options={basicOptions}
        value={value}
        onChange={e => setValue((e.target as HTMLSelectElement).value)}
        placeholder="Select..."
      />
      <p className="text-sm text-slate-600">Selected: {value || 'none'}</p>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledStory />
}

export const MultipleWithIcons: Story = {
  args: {
    label: 'Navigate to (multiple):',
    options: optionsWithIcons,
    multiple: true,
    defaultValue: ['home', 'user'],
    placeholder: 'Choose sections'
  }
}

export const WithLeftSlot: Story = {
  args: {
    label: 'Search and select:',
    options: basicOptions,
    placeholder: 'Select an option',
    leftSlot: (
      <IconComponent icon="RiSearchLine" className="size-5 text-slate-500" />
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('combobox'))
  }
}

export const WithSlots: Story = {
  args: {
    label: 'With both slots:',
    options: basicOptions,
    placeholder: 'Select an option',
    leftSlot: (
      <IconComponent icon="RiListCheck" className="size-5 text-slate-500" />
    ),
    rightSlot: (
      <IconComponent
        icon="RiInformationLine"
        className="size-5 text-slate-400"
      />
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('combobox'))
  }
}

export const DropdownOpenBelow: Story = {
  name: 'Dropdown — opens below',
  args: {
    label: 'Default position:',
    options: basicOptions,
    placeholder: 'Select...'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('combobox'))
  }
}

export const DropdownOpenAbove: Story = {
  name: 'Dropdown — opens above',
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    Story => (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '20px'
        }}
      >
        <div style={{ width: '320px' }}>
          <Story />
        </div>
      </div>
    )
  ],
  args: {
    label: 'Near bottom of viewport:',
    options: basicOptions,
    placeholder: 'Select...'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('combobox'))
  }
}
