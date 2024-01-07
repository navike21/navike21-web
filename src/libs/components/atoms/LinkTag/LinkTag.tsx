import React, { ReactNode } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { TColor } from '@Types/shared'
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

type THrefStructureNext = {
  pathname: string
  query: { name: string }
}

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

type TLinkProps = {
  href: THrefStructureNext | string
  children: ReactNode | string
  color?: TColorsExcluded
}

type TLinkStyledProps = {
  color?: string
}

type TColorVariation = {
  [key in TColorsExcluded]: string
}

const LinkStyled = styled(Link)<TLinkStyledProps>(({ color }) => ({
  textDecoration: 'none',
  color: color || 'inherit',
  transition: 'all 0.3s ease-in-out',
  fontSize: 14,
  '&:hover': {
    opacity: 0.7
  }
}))

const colorsVariation: TColorVariation = {
  error: errorColor.main,
  info: infoColor.main,
  primary: primaryColor.main,
  secondary: secondaryColor.main,
  success: successColor.main,
  warning: warningColor.main,
  white: whiteColor,
  black: blackColor
}

export const LinkTag = ({
  href,
  children,
  color = 'white',
  ...props
}: TLinkProps) => (
  <LinkStyled href={href} color={colorsVariation[color]} {...props}>
    {children}
  </LinkStyled>
)
