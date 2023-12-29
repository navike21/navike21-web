'use client'

import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { BUTTON, LARGE, PRIMARY } from '@Constants/shared'
import { TButton, TColor, TSize, TSizesMUI } from '@Types/shared'
import { Button as ButtonMaterial, ButtonProps } from '@mui/material'
import styled from '@emotion/styled'
import { Spinner } from '@Components/atoms'

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
  loading?: 'true' | 'false'
  startIcon?: ReactNode
  endIcon?: ReactNode
  size?: TSizesMUI
}

interface IBoostrapButton extends ButtonProps {
  loading: 'true' | 'false'
}

type TLoadingState = {
  loading: 'true' | 'false'
}

const BoostrapButton = styled(ButtonMaterial)<IBoostrapButton>(
  ({ loading }) => ({
    pointerEvents: loading === 'true' ? 'none' : 'auto'
  })
)

const ChildrenButton = styled('div')<TLoadingState>(({ loading }) => ({
  opacity: loading === 'true' ? 0 : 1,
  alignItems: 'center',
  position: 'relative',
  zIndex: 1
}))

const LoadingContent = styled('div')({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  left: 0,
  top: 0,
  zIndex: 2
})
export const Button = ({
  children,
  outline,
  disabled,
  startIcon,
  endIcon,
  color = PRIMARY,
  type = BUTTON,
  loading = 'false',
  size = LARGE,
  ...props
}: IButtonProps) => (
  <BoostrapButton
    variant={outline ? 'outlined' : 'contained'}
    color={color}
    type={type}
    size={size}
    disabled={disabled}
    startIcon={startIcon}
    endIcon={endIcon}
    loading={loading}
    disableElevation
    {...props}
  >
    {loading === 'true' && (
      <LoadingContent>
        <Spinner color={outline ? color : 'white'} />
      </LoadingContent>
    )}
    <ChildrenButton loading={loading}>{children}</ChildrenButton>
  </BoostrapButton>
)
