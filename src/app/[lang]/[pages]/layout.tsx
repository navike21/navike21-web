import { ReactNode } from 'react'

interface IPageLayoutProps {
  children: ReactNode
}

export default function PagesLayout({ children }: Readonly<IPageLayoutProps>) {
  return <>{children}</>
}
