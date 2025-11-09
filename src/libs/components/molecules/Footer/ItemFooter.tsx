import clsx from 'clsx'
import type { ReactNode } from 'react'

interface ItemFooterProps {
  title?: string
  children: ReactNode
  className?: string
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
      <h2 className="text-md uppercase font-bold tracking-wide">{title}</h2>
    )}
    <>{children}</>
  </section>
)
