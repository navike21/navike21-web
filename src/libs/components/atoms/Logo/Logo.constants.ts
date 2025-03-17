import { Theme } from '@mui/material'
import { TSizes } from '@Types/types/common'

export const isoLogoVariations = {
  primary: 'var(--mui-palette-primary-main)',
  white: 'var(--mui-palette-common-white)',
  black: 'var(--mui-palette-common-black)'
}

export const DEFAULT_SIZE: TSizes = 'md'

export const logoSVGSize = (theme: Theme) => ({
  xs: theme.typography.pxToRem(24),
  sm: theme.typography.pxToRem(32),
  md: theme.typography.pxToRem(40),
  lg: theme.typography.pxToRem(48),
  xl: theme.typography.pxToRem(56)
})

export const logoTextSize = (theme: Theme) => ({
  xs: theme.typography.pxToRem(8),
  sm: theme.typography.pxToRem(10),
  md: theme.typography.pxToRem(12),
  lg: theme.typography.pxToRem(14),
  xl: theme.typography.pxToRem(16)
})

export const logoTextBottom = (theme: Theme) => ({
  xs: `-${theme.typography.pxToRem(7)}`,
  sm: `-${theme.typography.pxToRem(10)}`,
  md: `-${theme.typography.pxToRem(12)}`,
  lg: `-${theme.typography.pxToRem(14)}`,
  xl: `-${theme.typography.pxToRem(16)}`
})
