import { SVGProps } from 'react'

export interface ISvgProps extends SVGProps<SVGSVGElement> {
  isColor?: boolean
}

export interface ISvgPropsMask extends SVGProps<SVGMaskElement> {
  isColor?: boolean
}
