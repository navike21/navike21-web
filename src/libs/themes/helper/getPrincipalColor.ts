import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  primaryColor,
  secondaryColor
} from '@Themes/constants'
import { TColorConfig, TColorVariant } from '@Themes/types'

type TPrincipalColorState = {
  [key: string]: TColorConfig
}

const principalColorIndex: TPrincipalColorState = {
  [PRIMARY_COLOR]: primaryColor,
  [SECONDARY_COLOR]: secondaryColor
}

export const getPrincipalColor = (color: TColorVariant): TColorConfig =>
  principalColorIndex[color]
