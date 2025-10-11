'use client'

import { useState, useEffect } from 'react'

interface IScreenSize {
  width: number
  breakpoint: 'mobile' | 'tablet' | 'laptop' | 'desktop'
}

export function useScreenSize(): IScreenSize {
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  let breakpoint: IScreenSize['breakpoint']
  if (width < 640) {
    breakpoint = 'mobile'
  } else if (width < 768) {
    breakpoint = 'tablet'
  } else if (width < 1024) {
    breakpoint = 'laptop'
  } else {
    breakpoint = 'desktop'
  }

  return { width, breakpoint }
}
