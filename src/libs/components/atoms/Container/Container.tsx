'use client'

import { FC, ReactNode } from 'react'
import { Container as ContainerMUI } from '@mui/material'

type TContainerProps = {
  children: ReactNode
}

export const Container: FC<TContainerProps> = ({ children }) => (
  <ContainerMUI disableGutters sx={{ width: '80%' }}>
    {children}
  </ContainerMUI>
)
