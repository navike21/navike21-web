import { Footer } from '@Components/molecules/Footer/Footer'
import { Header } from '@Components/molecules/Header/Header'
import { LayoutScroll } from '@Components/molecules/LayoutScroll/LayoutScroll'
import { MotionConfigProvider } from '@Components/layouts/MotionConfigProvider/MotionConfigProvider'
import { Menu } from '@Components/molecules/Menu/Menu'
import { HeaderProvider } from '@Context/index'
import { firaCode, poppins } from '@Sources/fonts'
import '@Styles/globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Navike21 - Digital Solutions & Web Development',
  description:
    'Navike21 delivers modern web applications, custom software, and innovative digital solutions to boost your business with cutting-edge technology.'
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${firaCode.variable} antialiased transition-all ease-in-out duration-500 relative`}
      >
        <MotionConfigProvider>
          <HeaderProvider>
            <Header />
            <Menu />
            <LayoutScroll>{children}</LayoutScroll>
          </HeaderProvider>
        </MotionConfigProvider>
        <Footer />
      </body>
    </html>
  )
}
