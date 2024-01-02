import { PaletteMode, ThemeOptions } from '@mui/material'

import { LIGHT } from '@Constants/shared'
import { getPrincipalColor } from '@Themes/helper'
import { TColorVariant } from '@Themes/types'
import { configTheme, grayColor } from '@Themes/constants'

export const lightTheme = (color: TColorVariant): ThemeOptions => ({
  ...configTheme,
  palette: {
    mode: LIGHT as PaletteMode,
    primary: getPrincipalColor(color),
    background: {
      default: grayColor['100']
    },
    text: {
      primary: grayColor['800']
    }
  }
})
