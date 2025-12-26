import type { SVGProps } from 'react'

export interface SvgProps extends SVGProps<SVGSVGElement> {
  isColor?: boolean
}

export interface SvgMaskProps extends SVGProps<SVGMaskElement> {
  isColor?: boolean
}
