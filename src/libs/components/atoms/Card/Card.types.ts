import type { IconName } from '@Types/icons'
import type { ReactNode } from 'react'

export interface CardProps {
  children?: ReactNode
  showLine?: boolean
  className?: string
}

export interface ItemCardProps extends CardProps {
  description?: string
  title?: string
  icon?: IconName
  className?: string
}

export interface ItemLinkCardProps extends ItemCardProps {
  href: string
}
