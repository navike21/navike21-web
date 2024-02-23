'use client'

import { Container } from '@Components/atoms'
import { transparentBlack } from '@Themes/constants'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

type TControlAction = {
  controlAction: () => void
  textButton: string
}

type TSlideProps = {
  title: string | ReactNode
  image: string | StaticImageData
  description?: string | ReactNode
  controlAction?: TControlAction
}

const stylesWrappSlide = {
  height: '100dvh',
  position: 'relative'
}

const stylesTitle = {
  width: '60%'
}

const ImageSlide = styled(Image)({
  position: 'absolute',
  zIndex: 1
})

const WrapperImage = styled(Grid)({
  position: 'absolute',
  backgroundColor: transparentBlack[48],
  zIndex: 2,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
})

const ContainerSlide = styled(Container)({
  position: 'relative',
  zIndex: 3
})

export const Slide = ({
  title,
  image,
  description,
  controlAction
}: TSlideProps) => {
  return (
    <Grid
      container
      sx={stylesWrappSlide}
      justifyContent="center"
      alignItems="center"
    >
      <WrapperImage />
      <ImageSlide
        src={image}
        alt="slide"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <ContainerSlide>
        <Grid container>
          <Typography variant="h5" sx={stylesTitle} color="white">
            {title}
          </Typography>
        </Grid>
      </ContainerSlide>
    </Grid>
  )
}
