import { ReactNode } from 'react'

interface IPageLayoutProps {
  readonly children: ReactNode
}

export default function PagesLayout({ children }: IPageLayoutProps) {
  return <>{children}</>
}
