import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode
} from 'react'
import { type IconName } from './icons'
import { type LinkProps } from 'next/link'

export interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | undefined
  size?: 'small' | 'medium' | 'large' | undefined
  icon?: IconName | undefined
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonBaseProps {
  children: ReactNode
}

export interface LinkButtonProps
  extends
    ButtonBaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps {
  href: string
  children: ReactNode
  className?: string
}
