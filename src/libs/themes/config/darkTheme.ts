import { PaletteMode, ThemeOptions } from '@mui/material'

import { DARK } from '@Constants/shared'
import { getPrincipalColor } from '@Themes/helper'
import { TColorVariant } from '@Themes/types'
import { configTheme, grayColor, whiteColor } from '@Themes/constants'

export const darkTheme = (color: TColorVariant): ThemeOptions => ({
  ...configTheme,
  palette: {
    mode: DARK as PaletteMode,
    primary: getPrincipalColor(color),
    background: {
      default: grayColor['900']
    },
    text: {
      primary: whiteColor
    }
  }
})
