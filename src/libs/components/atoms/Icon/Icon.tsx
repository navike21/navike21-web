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
import {
  blackColor,
  errorColor,
  grayColor,
  infoColor,
  primaryColor,
  secondaryColor,
  successColor,
  warningColor,
  whiteColor
} from '@Themes/constants'
import { useMemo } from 'react'

type TSizeClass = {
  [key in TSize]: string
}

type TColorClass = {
  [key in TColor]?: string
}

const SizeClass: TSizeClass = {
  [EXTRA_SMALL]: '0.875rem',
  [SMALL]: '1rem',
  [MEDIUM]: '1.5rem',
  [LARGE]: '2rem',
  [EXTRA_LARGE]: '2.5rem'
}

const ColorClass: TColorClass = {
  [PRIMARY]: primaryColor.main,
  [SECONDARY]: secondaryColor.main,
  [SUCCESS]: successColor.main,
  [INFO]: infoColor.main,
  [WARNING]: warningColor.main,
  [ERROR]: errorColor.main,
  white: whiteColor,
  black: blackColor,
  gray_100: grayColor[100],
  gray_200: grayColor[200],
  gray_300: grayColor[300],
  gray_400: grayColor[400],
  gray_500: grayColor[500],
  gray_600: grayColor[600],
  gray_700: grayColor[700],
  gray_800: grayColor[800],
  gray_900: grayColor[900]
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

  const valueProps = useMemo(
    () => ({
      size: SizeClass[size],
      color: ColorClass[color],
      className: clsx(className)
    }),
    [size, color, className]
  )

  return (
    <IconContext.Provider value={valueProps}>
      <IconComponent />
    </IconContext.Provider>
  )
}
