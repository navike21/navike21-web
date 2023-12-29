'use client'

import { FC, ReactNode } from 'react'
import { Container as ContainerMUI } from '@mui/material'

type TProps = {
  children: ReactNode
}

export const Container: FC<TProps> = ({ children }) => {
  return (
    <ContainerMUI disableGutters sx={{ width: '80%' }}>
      {children}
    </ContainerMUI>
  )
}
