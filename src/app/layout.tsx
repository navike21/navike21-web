import { ReactNode } from 'react'
import '@Styles/globals.css'

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return <>{children}</>
}
