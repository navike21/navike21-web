import { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import { ERROR, LARGE, PRIMARY, SMALL } from '@Constants/shared'
import {
  BOOSTRAP,
  FONT_AWESOME,
  HERO_ICONS,
  MATERIAL_DESIGN
} from '@Constants/shared/iconLibrary'

const meta = {
  title: 'Components/Atoms/Icon',
  component: Icon
} as Meta<typeof Icon>

export default meta

type TStory = StoryObj<typeof meta>

export const IconComponent: TStory = {
  args: {
    iconName: {
      materialDesign: 'MdSignalWifiOff'
    },
    library: MATERIAL_DESIGN,
    color: PRIMARY,
    size: SMALL
  },
  render: args => <Icon {...args} />
}

export const FontAwesome: TStory = {
  args: {
    iconName: {
      fontAwesome: 'FaWifi'
    },
    library: FONT_AWESOME,
    color: PRIMARY,
    size: SMALL
  },
  render: args => <Icon {...args} />
}

export const HeroIcons: TStory = {
  args: {
    iconName: {
      heroIcons: 'HiWifi'
    },
    library: HERO_ICONS,
    color: PRIMARY,
    size: SMALL
  },
  render: args => <Icon {...args} />
}

export const Bootstrap: TStory = {
  args: {
    iconName: {
      bootstrap: 'BsWifi'
    },
    library: BOOSTRAP,
    color: PRIMARY,
    size: SMALL
  },
  render: args => <Icon {...args} />
}

export const Size: TStory = {
  args: {
    iconName: {
      materialDesign: 'MdSignalWifiOff'
    },
    library: MATERIAL_DESIGN,
    color: PRIMARY,
    size: LARGE
  },
  render: args => <Icon {...args} />
}

export const Color: TStory = {
  args: {
    iconName: {
      materialDesign: 'MdSignalWifiOff'
    },
    library: MATERIAL_DESIGN,
    color: ERROR,
    size: LARGE
  },
  render: args => <Icon {...args} />
}

export const White: TStory = {
  args: {
    iconName: {
      materialDesign: 'MdSignalWifiOff'
    },
    library: MATERIAL_DESIGN,
    color: 'white',
    size: LARGE
  },
  render: args => <Icon {...args} />
}
