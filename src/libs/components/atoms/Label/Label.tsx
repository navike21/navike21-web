import { hasTextClassColor } from '@Helpers/hasTextClassColor'
import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  className?: string
  disabled?: boolean
  htmlFor?: string
}

export const Label = ({
  children,
  className,
  disabled,
  htmlFor,
  ...props
}: LabelProps) => (
  <label
    {...props}
    htmlFor={htmlFor}
    className={clsx(
      className,
      'text-sm font-semibold transition-all duration-300',
      {
        'text-slate-500 cursor-not-allowed': disabled,
        'text-slate-900': !disabled && !hasTextClassColor(className)
      }
    )}
  >
    {children}
  </label>
)
