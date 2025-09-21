'use client'

import { ReactLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import { cancelFrame, frame } from 'motion'
import { ReactNode, useEffect, useRef } from 'react'
import { useHeaderContext } from '@context/HeaderContext' // 👈 tu contexto existente
import clsx from 'clsx'
import { BgHeader } from '../Header'

interface ILayoutScrollProps {
  children: ReactNode
}

export function LayoutScroll({ children }: Readonly<ILayoutScrollProps>) {
  const lenisRef = useRef<LenisRef>(null)
  const { toggleMenu } = useHeaderContext()

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)
    return () => cancelFrame(update)
  }, [])

  useEffect(() => {
    const lenis = lenisRef.current?.lenis
    if (!lenis) return

    if (toggleMenu) {
      lenis.stop()
    } else {
      lenis.start()
    }
  }, [toggleMenu])

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <div
        className={clsx('transition-all duration-500 ease-in-out', {
          'pt-[100dvh]': toggleMenu
        })}
      >
        <BgHeader />
        {children}
      </div>
    </ReactLenis>
  )
}
