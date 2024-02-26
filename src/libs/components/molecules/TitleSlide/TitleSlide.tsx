import { Typography } from '@mui/material'
import React, { ReactNode } from 'react'
import { useStylesTitle } from './styles'

type TTitleSlideProps = {
  children?: ReactNode
}
export const TitleSlide = ({ children }: TTitleSlideProps) => {
  const styles = useStylesTitle()
  return (
    <Typography variant="h4" sx={styles}>
      {children}
    </Typography>
  )
}
