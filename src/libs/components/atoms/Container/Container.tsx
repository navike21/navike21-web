import clsx from 'clsx'
import { ReactNode } from 'react'

interface IContainer {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: IContainer) => (
  <div className={clsx('container max-w-7xl mx-auto w-11/12', className)}>
    {children}
  </div>
)
