'use client'

import { ReactNode, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import { useGSAP } from '@gsap/react'

interface ISmoothScrollProps {
  children: ReactNode
}

export const SmoothScroll = ({ children }: ISmoothScrollProps) => {
  const main = useRef<HTMLDivElement>(null)
  const smoother = useRef<ScrollSmoother | null>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    if (main.current) {
      smoother.current = ScrollSmoother.create({
        wrapper: main.current,
        content: main.current.querySelector('div') as HTMLElement,
        smooth: 3,
        effects: true,
        smoothTouch: 0.2,
        ignoreMobileResize: true
      })
    }
  }, [main])

  return (
    <div ref={main} className="relative">
      <div>{children}</div>
    </div>
  )
}
