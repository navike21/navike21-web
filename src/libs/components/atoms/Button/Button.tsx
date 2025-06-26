import { IButtonBaseProps } from '@Types/buttonBase'
import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & IButtonBaseProps

export const Button = ({
  appearance = 'default',
  children,
  className,
  gradient,
  size = 'small',
  ...props
}: TButtonProps) => {
  return (
    <button
      className={clsx(className, 'button-base group/button', {
        'bg-primary-500 text-slate-800 hover:bg-primary-400':
          appearance === 'default',
        'animate-buttonHeartBeat': appearance === 'pulse',
        'bg-gradient-primary text-white': gradient,
        'text-xs': size === 'small',
        'text-sm': size === 'medium',
        'text-xl': size === 'large'
      })}
      {...props}
    >
      {children}
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
    </button>
  )
}
