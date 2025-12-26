import clsx from 'clsx'
import { type ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => (
  <div className={clsx('container max-w-7xl mx-auto w-[80%]', className)}>
    {children}
  </div>
)
