import clsx from 'clsx'
import { IconContext } from 'react-icons'

import * as IconFA6 from 'react-icons/fa6'
import * as IconFA from 'react-icons/fa'
import * as IconHI from 'react-icons/hi'
import * as IconHI2 from 'react-icons/hi2'
import * as IconBoostrap from 'react-icons/bs'
import * as IconMaterialDesign from 'react-icons/md'

import { IIconProps, TColor, TSize } from '@Types/shared'
import { FONT_AWESOME } from '@Constants/shared/iconLibrary'
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
import { useMemo } from 'react'

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
  },
  black: {
    fill: 'fill-black'
  },
  gray_100: {
    fill: 'fill-gray-100'
  },
  gray_200: {
    fill: 'fill-gray-200'
  },
  gray_300: {
    fill: 'fill-gray-300'
  },
  gray_400: {
    fill: 'fill-gray-400'
  },
  gray_500: {
    fill: 'fill-gray-500'
  },
  gray_600: {
    fill: 'fill-gray-600'
  },
  gray_700: {
    fill: 'fill-gray-700'
  },
  gray_800: {
    fill: 'fill-gray-800'
  },
  gray_900: {
    fill: 'fill-gray-900'
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

  const iconContextValue = useMemo(
    () => ({
      className: clsx(SizeClass[size], fill, className)
    }),
    [className, fill, size]
  )

  return (
    <IconContext.Provider value={iconContextValue}>
      <IconComponent />
    </IconContext.Provider>
  )
}
