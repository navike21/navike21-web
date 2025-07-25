import { ReactNode } from 'react'

interface ISubPageLayoutProps {
  children: ReactNode
}

export default function SubPagesLayout({
  children
}: Readonly<ISubPageLayoutProps>) {
  return <>{children}</>
}
