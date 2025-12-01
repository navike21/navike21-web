'use client'

import { ReactLenis } from 'lenis/react'
import { type ReactNode } from 'react'
import clsx from 'clsx'
import { BgHeader } from '../Header'
import { useLayoutScroll } from './layoutScroll.hooks'

interface ILayoutScrollProps {
  children: ReactNode
}

export function LayoutScroll({ children }: Readonly<ILayoutScrollProps>) {
  const { lenisRef } = useLayoutScroll()

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        duration: 1,
        autoResize: true,
        lerp: 0.1,
        orientation: 'vertical',
        allowNestedScroll: true,
        touchMultiplier: 1.5,
        infinite: false,
        smoothWheel: true
      }}
      ref={lenisRef}
    >
      <main
        className={clsx('transition-all duration-500 ease-in-out relative')}
      >
        <BgHeader />
        {children}
      </main>
    </ReactLenis>
  )
}
