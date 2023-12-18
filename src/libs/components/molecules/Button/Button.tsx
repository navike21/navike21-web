'use client'

import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import { BUTTON, MEDIUM, PRIMARY } from '@Constants/shared'
import { TButton, TColor, TSize } from '@Types/shared'

type TExcludeColors<tCode extends string | number | symbol> = tCode extends
  | 'black'
  | 'white'
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

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  outline?: boolean
  disabled?: boolean
  color?: TColorsExcluded
  type?: TButton
  loading?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
}

export const Button = ({
  children,
  outline,
  disabled,
  startIcon,
  endIcon,
  color = PRIMARY,
  type = BUTTON,
  loading = false,
  ...props
}: IButtonProps) => (
  <LoadingButton
    variant={outline ? 'outlined' : 'contained'}
    loading={loading}
    color={color}
    type={type}
    size="large"
    disabled={disabled}
    startIcon={startIcon}
    endIcon={endIcon}
    {...props}
  >
    {children}
  </LoadingButton>
)
