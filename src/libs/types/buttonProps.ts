import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode
} from 'react'
import { type TIconName } from './icons'
import { type LinkProps } from 'next/link'

export interface IButtonBaseProps {
  variant?: 'primary' | 'secondary' | undefined
  size?: 'small' | 'medium' | 'large' | undefined
  icon?: TIconName | undefined
}

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonBaseProps {
  children: ReactNode
}

export interface ILinkButtonProps
  extends IButtonBaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps {
  href: string
  children: ReactNode
  className?: string
}
