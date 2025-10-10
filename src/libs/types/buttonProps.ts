import { ButtonHTMLAttributes, LinkHTMLAttributes, ReactNode } from 'react'
import { TIconName } from './icons'
import { LinkProps } from 'next/link'

export interface IButtonBaseProps {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  icon: TIconName
}

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonBaseProps {
  children: ReactNode
}
export interface ILinkButtonProps
  extends Omit<LinkProps, 'as'>,
    IButtonBaseProps,
    Omit<LinkHTMLAttributes<HTMLAnchorElement>, 'as'> {
  href: string
  children: ReactNode
  className?: string
}
