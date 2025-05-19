import clsx from 'clsx'
import { ReactNode } from 'react'

interface IContentProps {
  children: ReactNode
  className?: string
}

export const Content = ({ children, className }: IContentProps) => {
  return <div className={clsx('max-content', className)}>{children}</div>
}
