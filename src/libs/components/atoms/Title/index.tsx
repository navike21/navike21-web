import { Typography, TypographyProps } from '@mui/material'
import { THeading } from '@Types/types/common'
import React from 'react'

interface ITitleProps extends TypographyProps {
  variant?: THeading
}

export const Title = ({ children, variant }: ITitleProps) => {
  return <Typography variant={variant}>{children}</Typography>
}
