'use client'

import { ReactLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import { cancelFrame, frame } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { IComponentProps } from '@Types/interfaces/common'

export const SmoothScroll = ({ children }: IComponentProps) => {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        duration: 3,
        smoothWheel: true,
        easing: (t: number) => 1 - Math.pow(1 - t, 3)
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  )
}
