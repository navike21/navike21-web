import clsx from 'clsx'
import { IconComponent } from '../IconComponent'
import { type ButtonProps } from '@Types/buttonProps'

export const Button = ({
  children,
  className = '',
  disabled = false,
  size = 'medium',
  variant = 'primary',
  icon,
  ...props
}: Readonly<ButtonProps>) => (
  <button
    className={clsx(
      className,
      'duration-500 ease-in-out font-medium rounded-md shadow-black/30 shadow-md transition-all w-full',
      'flex gap-2 justify-center items-center',
      'sm:w-fit',
      {
        'hover:shadow-lg': !disabled,
        'active:scale-95': !disabled,
        'cursor-pointer': !disabled
      },
      {
        'cursor-not-allowed opacity-50 shadow-none': disabled
      },
      {
        'bg-black text-white': variant === 'primary',
        'bg-white text-primary-text ring-1 ring-black ring-inset':
          variant === 'secondary'
      },
      {
        'hover:bg-gray-800': !disabled && variant === 'primary',
        'hover:bg-gray-100 hover:ring-2': !disabled && variant === 'secondary'
      },
      {
        'px-6 py-3 text-xs': size === 'small',
        'px-8 py-3.5 text-sm': size === 'medium',
        'px-10 py-4 text-md': size === 'large'
      }
    )}
    {...props}
    disabled={disabled}
  >
    {children}
    {icon && (
      <IconComponent
        icon={icon}
        className={clsx({
          'w-4 h-4': size === 'small',
          'w-5 h-5': size === 'medium',
          'w-6 h-6': size === 'large'
        })}
      />
    )}
  </button>
)
