'use client'

import { FC, ReactNode } from 'react'
import { Container as ContainerMUI } from '@mui/material'

type TContainerProps = {
  children: ReactNode
  className?: string
}

export const Container: FC<TContainerProps> = ({ children, className }) => (
  <ContainerMUI className={className} disableGutters sx={{ width: '85%' }}>
    {children}
  </ContainerMUI>
)
