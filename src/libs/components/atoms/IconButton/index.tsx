import { IconButton as IconButtonMUI, IconButtonProps } from '@mui/material'
import React from 'react'

export const IconButton = ({ children, ...props }: IconButtonProps) => (
  <IconButtonMUI {...props}>{children}</IconButtonMUI>
)
