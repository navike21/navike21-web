import clsx from 'clsx'
import { IconContext } from 'react-icons'

import * as IconFA6 from 'react-icons/fa6'
import * as IconFA from 'react-icons/fa'
import * as IconHI from 'react-icons/hi'
import * as IconHI2 from 'react-icons/hi2'
import * as IconBoostrap from 'react-icons/bs'
import * as IconMaterialDesign from 'react-icons/md'

import { TColor, TLibrary, TSize } from '@Types/shared'
import {
  BOOSTRAP,
  FONT_AWESOME,
  HERO_ICONS,
  MATERIAL_DESIGN
} from '@Constants/shared/iconLibrary'
import {
  ERROR,
  EXTRA_LARGE,
  EXTRA_SMALL,
  INFO,
  LARGE,
  MEDIUM,
  PRIMARY,
  SECONDARY,
  SMALL,
  SUCCESS,
  WARNING
} from '@Constants/shared'

type TIconNameFA6 = keyof typeof IconFA6
type TIconNameFA = keyof typeof IconFA
type TIconNameHI = keyof typeof IconHI
type TIconNameHI2 = keyof typeof IconHI2
type TIconNameBS = keyof typeof IconBoostrap
type TIconNameMD = keyof typeof IconMaterialDesign

type TIconName = {
  [FONT_AWESOME]?: TIconNameFA6 | TIconNameFA
  [HERO_ICONS]?: TIconNameHI | TIconNameHI2
  [BOOSTRAP]?: TIconNameBS
  [MATERIAL_DESIGN]?: TIconNameMD
}

interface IIconProps {
  iconName: TIconName
  className?: string
  library: TLibrary
  size?: TSize
  color?: TColor
}

type TSizeClass = {
  [key in TSize]: string
}

type TColorClass = {
  [key in TColor]?: {
    fill: string
  }
}

const SizeClass: TSizeClass = {
  [EXTRA_SMALL]: 'w-3.5 h-3.5',
  [SMALL]: 'w-4 h-4',
  [MEDIUM]: 'w-6 h-6',
  [LARGE]: 'w-8 h-8',
  [EXTRA_LARGE]: 'w-10 h-10'
}

const ColorClass: TColorClass = {
  [PRIMARY]: {
    fill: 'fill-primary'
  },
  [SECONDARY]: {
    fill: 'fill-secondary'
  },
  [INFO]: {
    fill: 'fill-info'
  },
  [SUCCESS]: {
    fill: 'fill-success'
  },
  [WARNING]: {
    fill: 'fill-warning'
  },
  [ERROR]: {
    fill: 'fill-error'
  },
  white: {
    fill: 'fill-white'
  }
}
export const Icon = ({
  className,
  iconName,
  library = FONT_AWESOME,
  size = SMALL,
  color = PRIMARY
}: IIconProps) => {
  const {
    fontAwesome = 'Fa0',
    heroIcons = 'HiAcademicCap',
    bootstrap = 'Bs0Circle',
    materialDesign = 'Md0'
  } = iconName

  const libraryIcon = {
    fontAwesome: IconFA6[fontAwesome] || IconFA[fontAwesome],
    heroIcons: IconHI[heroIcons] || IconHI2[heroIcons],
    bootstrap: IconBoostrap[bootstrap],
    materialDesign: IconMaterialDesign[materialDesign]
  }
  const IconComponent = libraryIcon[library]

  const { fill } = ColorClass[color] ?? {}

  return (
    <IconContext.Provider
      value={{
        className: clsx(SizeClass[size], fill, className)
      }}
    >
      <>
        <IconComponent />
      </>
    </IconContext.Provider>
  )
}
