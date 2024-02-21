import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { StaticImageData } from 'next/image'
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

export const Slide = ({
  title,
  image,
  description,
  controlAction
}: TSlideProps) => {
  return <Grid container>Slide</Grid>
}
