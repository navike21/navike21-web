import type { TIconName } from '@Types/icons'
import type { ReactNode } from 'react'

export interface ICardProps {
  children?: ReactNode
  showLine?: boolean
  className?: string
}

export interface IItemCardProps extends ICardProps {
  description?: string
  title?: string
  icon?: TIconName
  className?: string
}

export interface IItemLinkCardProps extends IItemCardProps {
  href: string
}
