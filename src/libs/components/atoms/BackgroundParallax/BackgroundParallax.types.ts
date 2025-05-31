import { HTMLAttributes, ReactNode } from 'react'

export type TPosition = 'top' | 'center' | 'bottom'

export interface IBackgroundParallaxProps
  extends HTMLAttributes<HTMLDivElement> {
  backgroundImage: string
  children: ReactNode
  overlay?: boolean
  startPosition?: TPosition
}

export interface IBackgroundParallaxContent {
  backgroundImage: string
  backgroundPosition: string
  overlay: boolean
}
