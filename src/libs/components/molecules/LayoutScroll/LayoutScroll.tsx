// components/LayoutScroll.tsx
'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useGSAP } from '@gsap/react'
import { ReactLenis } from 'lenis/react'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

/** Tipo mínimo que usamos del ScrollSmoother (evita usar `any`) */
interface IGSAPScrollSmoother {
  wrapper: HTMLElement
  content: HTMLElement
  kill(): void
}

declare global {
  interface Window {
    /** Exponemos una versión tipada y mínima del smoother para que otros componentes la lean */
    __gsap_smoother?: IGSAPScrollSmoother
  }
}

export const LayoutScroll = ({ children }: { children: React.ReactNode }) => {
  interface ILenisRef {
    lenis: {
      raf: (time: number) => void
    }
  }

  const lenisRef = useRef<ILenisRef>(null)

  useGSAP(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ReactLenis
      root
      options={{ autoRaf: true, lerp: 0.09, autoResize: true }}
      ref={r => {
        lenisRef.current = r as unknown as ILenisRef | null
      }}
    >
      {children}
    </ReactLenis>
  )
}
