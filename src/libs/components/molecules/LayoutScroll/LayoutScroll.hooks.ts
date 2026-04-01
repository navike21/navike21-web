import { useHeaderContext } from '@Context/headerContext.hooks'
import { useLenisScrollLock } from '@Hooks/useLenisScrollLock'
import type { LenisRef } from 'lenis/react'
import { cancelFrame, frame } from 'motion'
import { useEffect, useRef } from 'react'

export const useLayoutScroll = () => {
  const lenisRef = useRef<LenisRef>(null)
  const { toggleMenu } = useHeaderContext()

  useLenisScrollLock(toggleMenu)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)
    return () => cancelFrame(update)
  }, [])

  return {
    lenisRef
  }
}
