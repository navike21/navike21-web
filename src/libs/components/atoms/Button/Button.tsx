import { Button as ButtonMUI, ButtonProps } from '@mui/material'
import React from 'react'

export const Button = ({ children, ...props }: ButtonProps) => (
  <ButtonMUI {...props}>{children}</ButtonMUI>
)
