import clsx from 'clsx'
import { IconComponent } from '../IconComponent'
import Link from 'next/link'
import { type LinkButtonProps } from '@Types/buttonProps'

export const LinkButton = ({
  variant = 'primary',
  className = '',
  children,
  size = 'medium',
  icon,
  ...props
}: Readonly<LinkButtonProps>) => (
  <Link
    className={clsx(
      className,
      'cursor-pointer duration-500 ease-in-out font-medium transition-all w-full relative',
      'sm:w-fit',
      {
        'rounded-md shadow-black/30 shadow-md flex gap-2 justify-center items-center':
          variant !== 'text',
        'hover:shadow-lg': variant !== 'text',
        'active:scale-95': variant !== 'text'
      },
      {
        'bg-black text-white': variant === 'primary',
        'bg-white text-primary-text ring-1 ring-black ring-inset':
          variant === 'secondary',
        'bg-transparent text-primary-text': variant === 'text'
      },
      {
        'hover:bg-gray-800': variant === 'primary',
        'hover:bg-gray-100 hover:ring-2': variant === 'secondary'
      },
      {
        'before:content-[""] before:bg-slate-400 before:opacity-0 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:transition-all before:duration-300 before:ease-in-out before:-translate-x-1/2':
          variant === 'text',
        'hover:before:w-full hover:before:opacity-100': variant === 'text'
      },
      {
        'text-xs': size === 'small' && variant === 'text',
        'text-sm': size === 'medium' && variant === 'text',
        'text-md': size === 'large' && variant === 'text'
      },
      {
        'px-6 py-3 text-xs': size === 'small' && variant !== 'text',
        'px-8 py-3.5 text-sm': size === 'medium' && variant !== 'text',
        'px-10 py-4 text-md': size === 'large' && variant !== 'text'
      }
    )}
    {...props}
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
  </Link>
)
