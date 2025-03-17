'use client'

import clsx from 'clsx'
import { IComponentProps } from '@Types/interfaces/common'
import { ContentElement } from './Content.styles'

export const Content = ({ children, className }: IComponentProps) => (
  <ContentElement className={clsx(className)}>{children}</ContentElement>
)
