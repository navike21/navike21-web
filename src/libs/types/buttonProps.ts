import { ButtonHTMLAttributes } from 'react'
import { TIconName } from './iconsLucide'

export interface IButtonBaseProps {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  icon: TIconName
}

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonBaseProps {
  className?: string
}
export interface ILinkButtonProps
  extends ButtonHTMLAttributes<HTMLAnchorElement>,
    IButtonBaseProps {
  className?: string
  href: string
}
