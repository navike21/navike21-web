import { useHeaderContext } from '@Context/headerContext.hooks'
import type { LenisRef } from 'lenis/react'
import { cancelFrame, frame } from 'motion'
import { useEffect, useRef } from 'react'

export const useLayoutScroll = () => {
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

    return () => {
      if (toggleMenu && lenis) {
        lenis.start()
      }
    }
  }, [toggleMenu])

  return {
    lenisRef
  }
}
