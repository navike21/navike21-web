import clsx from 'clsx'
import { IconComponent } from '../IconComponent'
import type { ChipProps } from './Chip.types'

export const Chip = ({
  children,
  className = '',
  variant = 'default',
  size = 'medium',
  icon,
  iconContent,
  deleteable = false,
  deleteButtonProps
}: Readonly<ChipProps>) => {
  return (
    <span
      className={clsx(
        className,
        'inline-flex items-center rounded-full ring-1 font-medium',
        {
          'h-5 text-xs px-2 gap-1': size === 'xsmall',
          'h-6 text-xs px-2.5 gap-1': size === 'small',
          'h-7 text-sm px-3 gap-1.5': size === 'medium',
          'h-8 text-sm px-3.5 gap-1.5': size === 'large'
        },
        {
          'bg-slate-100 text-slate-700 ring-slate-300': variant === 'default',
          'bg-emerald-100 text-emerald-700 ring-emerald-300':
            variant === 'success',
          'bg-yellow-100 text-yellow-700 ring-yellow-300':
            variant === 'warning',
          'bg-blue-100 text-blue-700 ring-blue-300': variant === 'informative',
          'bg-red-100 text-red-700 ring-red-300': variant === 'error'
        }
      )}
    >
      {icon && (
        <IconComponent
          icon={icon}
          className={clsx({
            'w-3 h-3': size === 'xsmall',
            'w-3.5 h-3.5': size === 'small',
            'w-4 h-4': size === 'medium' || size === 'large'
          })}
        />
      )}
      {!icon && iconContent && (
        <span
          className={clsx('flex items-center justify-center overflow-hidden', {
            'w-3 h-3': size === 'xsmall',
            'w-3.5 h-3.5': size === 'small',
            'w-4 h-4': size === 'medium' || size === 'large'
          })}
        >
          {iconContent}
        </span>
      )}
      {children}
      {deleteable && (
        <button
          type="button"
          className={clsx(
            'inline-flex items-center justify-center rounded-full',
            '-mr-1 ml-0.5',
            'transition-opacity duration-200',
            'focus:outline-none',
            {
              'w-3 h-3': size === 'xsmall',
              'w-3.5 h-3.5': size === 'small',
              'w-4 h-4': size === 'medium' || size === 'large'
            },
            {
              'cursor-pointer hover:opacity-70': !deleteButtonProps?.disabled,
              'cursor-not-allowed opacity-50': deleteButtonProps?.disabled
            }
          )}
          {...deleteButtonProps}
        >
          <IconComponent
            icon="RiCloseLine"
            className={clsx({
              'w-3 h-3': size === 'xsmall',
              'w-3.5 h-3.5': size === 'small',
              'w-4 h-4': size === 'medium' || size === 'large'
            })}
          />
        </button>
      )}
    </span>
  )
}
