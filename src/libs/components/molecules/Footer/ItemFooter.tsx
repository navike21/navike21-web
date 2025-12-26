import clsx from 'clsx'
import Link from 'next/link'
import type { HTMLAttributeAnchorTarget, ReactNode } from 'react'

interface ItemFooterProps {
  title?: string
  children: ReactNode
  className?: string
}

interface LinkFooterProps {
  children: ReactNode
  className?: string
  href?: string
  rel?: string
  target?: HTMLAttributeAnchorTarget
}

export const ItemFooter = ({ title, children, className }: ItemFooterProps) => (
  <section
    className={clsx(
      'col-span-2 flex flex-col gap-4',
      'md:col-span-1',
      className
    )}
  >
    {title && (
      <h2 className="text-md uppercase font-semibold tracking-wide">{title}</h2>
    )}
    {children}
  </section>
)

export const LinkFooter = ({
  children,
  className,
  href,
  rel,
  target
}: LinkFooterProps) => (
  <Link
    target={target}
    rel={rel}
    href={href ?? ''}
    className={clsx(
      'text-sm text-white/80 decoration-0 transition-all ease-in-out duration-500',
      'hover:text-white',
      className
    )}
  >
    {children}
  </Link>
)
