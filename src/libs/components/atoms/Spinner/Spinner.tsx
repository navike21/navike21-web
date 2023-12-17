import clsx from 'clsx'
import { TColor, TSize } from '@Types/shared'
import styles from './spinner.module.scss'
import { SMALL } from '@Constants/shared'

type TSpinner = {
  className?: string
  color?: TColor
  size?: TSize
}

type TColorVariation = {
  [key in TColor]: string
}

type TSizeVariation = {
  [key in TSize]: string
}

export const Spinner = ({
  className,
  size = SMALL,
  color = 'white'
}: TSpinner) => {
  const colorVariation: TColorVariation = {
    primary: 'stroke-primary',
    secondary: 'stroke-secondary',
    success: 'stroke-success',
    warning: 'stroke-warning',
    error: 'stroke-error',
    info: 'stroke-info',
    white: 'stroke-white',
    black: 'stroke-black',
    gray_100: 'stroke-gray-100',
    gray_200: 'stroke-gray-200',
    gray_300: 'stroke-gray-300',
    gray_400: 'stroke-gray-400',
    gray_500: 'stroke-gray-500',
    gray_600: 'stroke-gray-600',
    gray_700: 'stroke-gray-700',
    gray_800: 'stroke-gray-800',
    gray_900: 'stroke-gray-900'
  }

  const sizeVariation: TSizeVariation = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  }

  return (
    <svg
      className={clsx(colorVariation[color], sizeVariation[size], className)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={clsx(styles['spinner'])}>
        <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3"></circle>
      </g>
    </svg>
  )
}
