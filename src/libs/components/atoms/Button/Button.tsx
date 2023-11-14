import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import {
  BUTTON,
  ERROR,
  EXTRA_LARGE,
  EXTRA_SMALL,
  INFO,
  LARGE,
  MEDIUM,
  PRIMARY,
  SECONDARY,
  SMALL,
  SUCCESS,
  WARNING
} from '@Constants/shared'
import styles from '@Styles/button.module.scss'
import { TButton, TColor, TSize } from '@Types/shared'

type TSizeClass = {
  [key in TSize]: string
}

type TColorClass = {
  [key in TColor]?: {
    background: string
    backgroundHover: string
    backgroundHoverOutline: string
    textColorDefault: string
    textColorOutline: string
    ringColor: string
  }
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  size?: TSize
  outline?: boolean
  disabled?: boolean
  color?: TColor
  type?: TButton
}

const SizeClass: TSizeClass = {
  [EXTRA_SMALL]: 'px-3 py-1 text-xs',
  [SMALL]: 'px-4 py-2 text-xs',
  [MEDIUM]: 'px-5 py-3 text-sm',
  [LARGE]: 'px-6 py-3 text-base',
  [EXTRA_LARGE]: 'px-8 py-4 text-lg'
}

const ColorClass: TColorClass = {
  [PRIMARY]: {
    background: 'bg-primary',
    backgroundHover: 'hover:bg-primary-dark',
    backgroundHoverOutline: 'hover:bg-transparent__primary-8',
    textColorDefault: 'text-white',
    textColorOutline: 'text-primary',
    ringColor: 'ring-primary'
  },
  [SECONDARY]: {
    background: 'bg-secondary',
    backgroundHover: 'hover:bg-secondary-dark',
    backgroundHoverOutline: 'hover:bg-transparent__secondary-8',
    textColorDefault: 'text-white',
    textColorOutline: 'text-secondary',
    ringColor: 'ring-secondary'
  },
  [INFO]: {
    background: 'bg-info',
    backgroundHover: 'hover:bg-info-dark',
    backgroundHoverOutline: 'hover:bg-transparent__info-8',
    textColorDefault: 'text-white',
    textColorOutline: 'text-info',
    ringColor: 'ring-info'
  },
  [SUCCESS]: {
    background: 'bg-success',
    backgroundHover: 'hover:bg-success-dark',
    backgroundHoverOutline: 'hover:bg-transparent__success-8',
    textColorDefault: 'text-white',
    textColorOutline: 'text-success',
    ringColor: 'ring-success'
  },
  [WARNING]: {
    background: 'bg-warning',
    backgroundHover: 'hover:bg-warning-dark',
    backgroundHoverOutline: 'hover:bg-transparent__warning-8',
    textColorDefault: 'text-white',
    textColorOutline: 'text-warning',
    ringColor: 'ring-warning'
  },
  [ERROR]: {
    background: 'bg-error',
    backgroundHover: 'hover:bg-error-dark',
    backgroundHoverOutline: 'hover:bg-transparent__error-8',
    textColorDefault: 'text-white',
    textColorOutline: 'text-error',
    ringColor: 'ring-error'
  }
}

const classDefault = `active:scale-95 transition-all duration-200 ease-in-out`

export const Button = ({
  children,
  className,
  color = PRIMARY,
  size = MEDIUM,
  outline = false,
  disabled = false,
  type = BUTTON,
  ...props
}: IButtonProps) => {
  const {
    ringColor,
    textColorOutline,
    textColorDefault,
    backgroundHoverOutline,
    background,
    backgroundHover
  } = ColorClass[color] ?? {}

  return (
    <button
      type={type}
      className={clsx(
        'rounded-lg relative font-medium outline-none overflow-hidden focus:outline-none',
        SizeClass[size],
        ((disabled && outline) || (disabled && !outline)) &&
          'bg-grey-300 cursor-not-allowed text-grey-600 hover:animate-pulse hover:animate-duration-200 hover:animate-twice',
        !disabled &&
          outline &&
          `${classDefault} bg-transparent ring-inset ring-[0.1rem] ${ringColor} ${textColorOutline} hover:${textColorDefault} ${backgroundHoverOutline}`,
        !disabled &&
          !outline &&
          `${classDefault} ${background} ${backgroundHover} text-white`,
        styles['i'],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
