// components/LayoutScroll.tsx
'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { useGSAP } from '@gsap/react'

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
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const smootherRef = useRef<IGSAPScrollSmoother | null>(null)

  // useGSAP gestiona mount/cleanup sin useEffect
  useGSAP(() => {
    if (!wrapperRef.current || !contentRef.current) return

    // crea el smoother (ScrollSmoother es un plugin pro — asegúrate de tenerlo)
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.2,
      effects: true
    }) as unknown as IGSAPScrollSmoother

    smootherRef.current = smoother
    window.__gsap_smoother = smoother

    // notificamos que el smoother está listo (puede usarse si quieres)
    window.dispatchEvent(
      new CustomEvent('gsap:smoother-ready', { detail: { smoother } })
    )

    // cleanup automático al desmontar
    return () => {
      smootherRef.current?.kill()
      smootherRef.current = null
      delete window.__gsap_smoother
      window.dispatchEvent(new CustomEvent('gsap:smoother-killed'))
    }
  }, [])

  return (
    <div ref={wrapperRef} id="smooth-wrapper" className="min-h-screen">
      <div ref={contentRef} id="smooth-content">
        <div>{children}</div>
      </div>
    </div>
  )
}
