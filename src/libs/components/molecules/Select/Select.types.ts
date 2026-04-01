import type { ReactNode, SelectHTMLAttributes } from 'react'
import type { IconName } from '@Types/icons'

export interface SelectOptionItem {
  label: string
  value: string
  disabled?: boolean
  icon?: IconName
  content?: ReactNode
}

export type SelectVariant = 'default' | 'success' | 'error' | 'warning'

export interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'children' | 'prefix' | 'suffix' | 'multiple'
> {
  className?: string
  classInput?: string
  label?: ReactNode
  helperText?: ReactNode
  errorMessage?: ReactNode
  variant?: SelectVariant
  loading?: boolean
  options: SelectOptionItem[]
  multiple?: boolean
  search?: boolean
  placeholder?: string
  leftSlot?: ReactNode
  rightSlot?: ReactNode
}
