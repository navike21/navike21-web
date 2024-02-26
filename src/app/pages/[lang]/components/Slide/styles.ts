'use client'

import Image from 'next/image'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { transparentBlack } from '@Themes/constants'
import { Container } from '@Components/atoms'
import styled from '@emotion/styled'

export const stylesWrappSlide = {
  height: '100dvh',
  position: 'relative'
}

export const ImageSlide = styled(Image)({
  position: 'absolute',
  zIndex: 1
})

export const WrapperImage = styled(Grid)({
  position: 'absolute',
  backgroundColor: transparentBlack[48],
  zIndex: 2,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
})

export const ContainerSlide = styled(Container)({
  position: 'relative',
  zIndex: 3
})
