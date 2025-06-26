'use client'

import { useInView, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useRef } from 'react'

interface ICounterProps {
  className?: string
  value: number
  direction?: 'up' | 'down'
}

export const Counter = ({
  className,
  direction = 'up',
  value
}: ICounterProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const motionValue = useMotionValue(direction === 'down' ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 10,
    stiffness: 100
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value)
    }
  }, [isInView])

  useEffect(() => {
    return springValue.on('change', latest => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(
          Math.round(latest)
        )
      }
    })
  }, [springValue])

  return <span className={className} ref={ref} />
}
