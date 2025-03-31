import { styled } from '@mui/material'
import { IIsoLogoProps, ILogoSizeProps } from './Logo.typed'
import {
  DEFAULT_SIZE,
  isoLogoVariations,
  logoSVGSize,
  logoTextBottom,
  logoTextSize
} from './Logo.constants'

export const LogoElement = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--mui-palette-common-white)',
  position: 'relative'
}))

export const IsoLogoElement = styled('path')<IIsoLogoProps>(
  ({ variation }) => ({
    fill: isoLogoVariations[variation ?? 'primary']
  })
)

export const LogoSVG = styled('svg')<ILogoSizeProps>(({ size, theme }) => ({
  width: 'auto',
  height: logoSVGSize(theme)[size ?? DEFAULT_SIZE]
}))

export const LogoText = styled('div')<ILogoSizeProps>(({ size, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: logoTextBottom(theme)[size ?? DEFAULT_SIZE],
  left: '29%',
  width: '100%',
  '& p': {
    fontSize: logoTextSize(theme)[size ?? DEFAULT_SIZE]
  }
}))

export const LogoBackCircle = styled('circle')(() => ({
  fill: 'var(--mui-palette-common-white)'
}))
