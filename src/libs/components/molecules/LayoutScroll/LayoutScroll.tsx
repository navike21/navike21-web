'use client'

import { ReactLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import { cancelFrame, frame } from 'motion'
import { ReactNode, useEffect, useRef } from 'react'
import { useHeaderContext } from '@context/HeaderContext' // 👈 tu contexto existente
import clsx from 'clsx'

interface ILayoutScrollProps {
  children: ReactNode
}

export function LayoutScroll({ children }: Readonly<ILayoutScrollProps>) {
  const lenisRef = useRef<LenisRef>(null)
  const { toggleMenu, isSolid } = useHeaderContext()

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
        <div
          className={clsx('bg-header fixed inset-0', {
            'bg-white h-20': isSolid && !toggleMenu,
            'bg-transparent h-28': !isSolid || toggleMenu
          })}
        />
        {children}
      </div>
    </ReactLenis>
  )
}
