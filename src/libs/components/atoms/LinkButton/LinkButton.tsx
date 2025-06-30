import { IButtonBaseProps } from '@Types/buttonBase'
import clsx from 'clsx'
import Link from 'next/link'

import type { ComponentProps } from 'react'

type TLinkButtonProps = ComponentProps<typeof Link> & IButtonBaseProps

export const LinkButton = ({
  appearance = 'default',
  children,
  className,
  gradient,
  size = 'medium',
  ...props
}: TLinkButtonProps) => {
  return (
    <Link
      className={clsx(className, 'button-base group/button', {
        'bg-primary-500 text-slate-800 hover:bg-primary-400':
          appearance === 'default',
        'animate-buttonHeartBeat': appearance === 'pulse',
        'bg-gradient-primary text-white': gradient,
        'button-small': size === 'small',
        'button-medium': size === 'medium',
        'button-large': size === 'large'
      })}
      {...props}
    >
      {children}
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
    </Link>
  )
}
