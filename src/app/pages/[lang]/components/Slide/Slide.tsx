'use client'

import { ReactNode } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { StaticImageData } from 'next/image'
import { TitleSlide } from '@Components/molecules'
import {
  ContainerSlide,
  ImageSlide,
  WrapperImage,
  stylesWrappSlide
} from './styles'

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

export const Slide = ({
  title,
  image,
  description,
  controlAction
}: TSlideProps) => {
  const isTitleString = typeof title === 'string'
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
        objectFit="cover"
        objectPosition="center"
      />
      <ContainerSlide>
        <Grid container>
          {isTitleString ? <TitleSlide>{title}</TitleSlide> : <>{title}</>}
        </Grid>
      </ContainerSlide>
    </Grid>
  )
}
