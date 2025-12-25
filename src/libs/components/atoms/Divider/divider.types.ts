import type { ReactNode } from 'react'

export type DividerOrientation = 'horizontal' | 'vertical'
export type DividerAlign = 'start' | 'center' | 'end'
export type DividerColor = 'light' | 'dark' | 'gradient'

export interface DividerProps {
  orientation?: DividerOrientation
  align?: DividerAlign
  children?: ReactNode
  color?: DividerColor
  className?: string
}
