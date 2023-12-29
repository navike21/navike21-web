import { TColor, TSize } from '@Types/shared'
import {
  BLACK,
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
  WARNING,
  WHITE
} from '@Constants/shared'
import {
  blackColor,
  errorColor,
  infoColor,
  primaryColor,
  secondaryColor,
  successColor,
  warningColor,
  whiteColor
} from '@Themes/constants'
import { CircularProgress } from '@mui/material'

type TExcludeColors<tCode extends string | number | symbol> = tCode extends
  | 'gray_100'
  | 'gray_200'
  | 'gray_300'
  | 'gray_400'
  | 'gray_500'
  | 'gray_600'
  | 'gray_700'
  | 'gray_800'
  | 'gray_900'
  ? never
  : tCode

type TColorsExcluded = TExcludeColors<TColor>

type TColorVariation = {
  [key in TColorsExcluded]: string
}

type TSizeVariation = {
  [key in TSize]: number
}

type TSpinner = {
  color?: TColorsExcluded
  size?: TSize
}

const sizeVariation: TSizeVariation = {
  [EXTRA_SMALL]: 14,
  [SMALL]: 18,
  [MEDIUM]: 24,
  [LARGE]: 30,
  [EXTRA_LARGE]: 40
}

const colorVariation: TColorVariation = {
  [PRIMARY]: primaryColor.main,
  [SECONDARY]: secondaryColor.main,
  [SUCCESS]: successColor.main,
  [ERROR]: errorColor.main,
  [WARNING]: warningColor.main,
  [INFO]: infoColor.main,
  [BLACK]: blackColor,
  [WHITE]: whiteColor
}

export const Spinner = ({ color = PRIMARY, size = SMALL }: TSpinner) => (
  <CircularProgress
    sx={{
      color: colorVariation[color]
    }}
    size={sizeVariation[size]}
  />
)
