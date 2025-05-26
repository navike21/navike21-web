'use client'

import { uuidV7 } from '@Utils/generateKeys'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef, ReactNode } from 'react'

enum EAnimationType {
  SLIDE = 'slide',
  FADE = 'fade'
}

interface ISliderProps {
  children: ReactNode[]
  autoPlay?: boolean
  interval?: number
  showDots?: boolean
  showArrows?: boolean
  animationType?: EAnimationType
}

export const Slider = ({
  animationType = EAnimationType.SLIDE,
  autoPlay = false,
  children,
  interval = 3000,
  showDots = true,
  showArrows = true
}: ISliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [height, setHeight] = useState<number | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const currentSlideRef = useRef<HTMLDivElement>(null)

  // Auto play
  useEffect(() => {
    if (!autoPlay || isTransitioning) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex(prev => (prev === children.length - 1 ? 0 : prev + 1))
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, children.length, interval, isTransitioning])

  // Resize observer para altura dinámica en modo fade
  useEffect(() => {
    if (animationType !== EAnimationType.SLIDE) return

    const updateHeight = () => {
      if (currentSlideRef.current) {
        setHeight(currentSlideRef.current.offsetHeight)
      }
    }

    const observer = new ResizeObserver(updateHeight)

    if (currentSlideRef.current) {
      observer.observe(currentSlideRef.current)
      updateHeight()
    }

    return () => {
      observer.disconnect()
    }
  }, [animationType, currentIndex])

  const slideWidth = 100 // en %

  return (
    <motion.div
      ref={containerRef}
      className="container-slider relative overflow-hidden w-full"
      animate={{ height: height ?? 'auto' }}
      transition={{ duration: 0.3, ease: 'linear' }}
    >
      {animationType === EAnimationType.SLIDE ? (
        <motion.div
          className="flex w-full"
          animate={{ x: `-${currentIndex * slideWidth}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {children.map(child => (
            <div key={uuidV7()} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </motion.div>
      ) : (
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full"
            onAnimationStart={() => setIsTransitioning(true)}
            onAnimationComplete={() => setIsTransitioning(false)}
          >
            <div ref={currentSlideRef}>{children[currentIndex]}</div>
          </motion.div>
        </AnimatePresence>
      )}

      {showArrows && (
        <>
          <button
            onClick={() => {
              setDirection(-1)
              setCurrentIndex(prev =>
                prev === 0 ? children.length - 1 : prev - 1
              )
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
          >
            ←
          </button>
          <button
            onClick={() => {
              setDirection(1)
              setCurrentIndex(prev =>
                prev === children.length - 1 ? 0 : prev + 1
              )
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
          >
            →
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {children.map((_, index) => (
            <button
              key={uuidV7()}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}
