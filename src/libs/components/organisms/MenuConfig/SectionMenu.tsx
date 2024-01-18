import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { ReactNode } from 'react'

type TMenuConfigProps = {
  children: ReactNode
}

const styleContent = {
  width: '70vw',
  maxWidth: 300,
  gap: 2
}

export const SectionMenu = ({ children }: TMenuConfigProps) => (
  <Grid
    container
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={styleContent}
    component="section"
  >
    {children}
  </Grid>
)
