import { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta = {
  title: 'Components/Atoms/Icon',
  component: Icon,
  tags: ['autodocs']
} as Meta<typeof Icon>

export default meta

type TStory = StoryObj<typeof meta>

export const IconComponent: TStory = {
  args: {
    iconName: {
      materialDesign: 'MdSignalWifiOff'
    },
    library: 'materialDesign',
    color: 'primary',
    size: 'small'
  },
  render: args => <Icon {...args} />
}

export const FontAwesome: TStory = {
  args: {
    iconName: {
      fontAwesome: 'FaWifi'
    },
    library: 'fontAwesome',
    color: 'primary',
    size: 'small'
  },
  render: args => <Icon {...args} />
}

export const HeroIcons: TStory = {
  args: {
    iconName: {
      heroIcons: 'HiWifi'
    },
    library: 'heroIcons',
    color: 'primary',
    size: 'small'
  },
  render: args => <Icon {...args} />
}

export const Bootstrap: TStory = {
  args: {
    iconName: {
      bootstrap: 'BsWifi'
    },
    library: 'bootstrap',
    color: 'primary',
    size: 'small'
  },
  render: args => <Icon {...args} />
}

export const Size: TStory = {
  args: {
    iconName: {
      materialDesign: 'MdSignalWifiOff'
    },
    library: 'materialDesign',
    color: 'primary',
    size: 'large'
  },
  render: args => <Icon {...args} />
}

export const Color: TStory = {
  args: {
    iconName: {
      materialDesign: 'MdSignalWifiOff'
    },
    library: 'materialDesign',
    color: 'error',
    size: 'large'
  },
  render: args => <Icon {...args} />
}

export const White: TStory = {
  args: {
    iconName: {
      materialDesign: 'MdSignalWifiOff'
    },
    library: 'materialDesign',
    color: 'white',
    size: 'large'
  },
  render: args => <Icon {...args} />
}
