import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { IconName } from '@Types/icons'

export interface ChipProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'success' | 'warning' | 'informative' | 'error'
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  icon?: IconName
  iconContent?: ReactNode
  deleteable?: boolean
  deleteButtonProps?: Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'type' | 'className'
  >
}
