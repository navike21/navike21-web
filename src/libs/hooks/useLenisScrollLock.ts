'use client'

import { useLenis } from 'lenis/react'
import { useEffect, useId, useRef } from 'react'

type LenisController = {
  start: () => void
  stop: () => void
}

const activeLockIds = new Set<string>()

const lockDocumentScroll = () => {
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
  document.body.style.touchAction = 'none'
}

const unlockDocumentScroll = () => {
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
  document.body.style.touchAction = ''
}

const syncScrollLockState = (lenis?: LenisController) => {
  if (lenis) {
    unlockDocumentScroll()

    if (activeLockIds.size > 0) {
      lenis.stop()
      return
    }

    lenis.start()
    return
  }

  if (activeLockIds.size > 0) {
    lockDocumentScroll()
    return
  }

  unlockDocumentScroll()
}

export const useLenisScrollLock = (isLocked: boolean) => {
  const lenis = useLenis()
  const lockId = useId()
  const isRegisteredRef = useRef(false)

  useEffect(() => {
    if (isLocked) {
      activeLockIds.add(lockId)
      isRegisteredRef.current = true
    } else if (isRegisteredRef.current) {
      activeLockIds.delete(lockId)
      isRegisteredRef.current = false
    }

    syncScrollLockState(lenis)
  }, [isLocked, lenis, lockId])

  useEffect(() => {
    return () => {
      if (!isRegisteredRef.current) return

      activeLockIds.delete(lockId)
      isRegisteredRef.current = false
      syncScrollLockState(lenis)
    }
  }, [lenis, lockId])
}
