'use client'

import { uuidV7 } from '@Utils/generateKeys'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, ReactNode } from 'react'

interface ISliderProps {
  children: ReactNode[]
  autoPlay?: boolean
  interval?: number
  showDots?: boolean
  showArrows?: boolean
}

export const Slider = ({
  children,
  autoPlay = true,
  interval = 3000,
  showDots = true,
  showArrows = true
}: ISliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!autoPlay || isTransitioning) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex(prevIndex =>
        prevIndex === children.length - 1 ? 0 : prevIndex + 1
      )
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, children.length, interval, isTransitioning])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex(prevIndex =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="relative overflow-hidden w-full">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          onAnimationStart={() => setIsTransitioning(true)}
          onAnimationComplete={() => setIsTransitioning(false)}
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="w-full"
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {showArrows && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
          >
            ←
          </button>
          <button
            onClick={handleNext}
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
    </div>
  )
}
