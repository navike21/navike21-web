'use client'

import { cn } from '@Utils/cn'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'motion/react'
import { useMemo, useRef } from 'react'

interface IThreeDMarqueeProps {
  images: string[]
  className?: string
  columns?: number
  parallaxAmount?: number // nuevo
}

export const ThreeDMarquee = ({
  images,
  className,
  columns = 4,
  parallaxAmount = 300 // valor por defecto
}: IThreeDMarqueeProps) => {
  const chunkSize = Math.ceil(images.length / columns)

  const chunks = useMemo(() => {
    return Array.from({ length: columns }, (_, colIndex) => {
      const start = colIndex * chunkSize
      return images.slice(start, start + chunkSize)
    })
  }, [images, columns, chunkSize])

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, parallaxAmount])

  return (
    <motion.div
      className={cn(
        'mx-auto block overflow-hidden rounded-2xl h-full',
        className
      )}
    >
      <motion.div
        className={clsx(
          'flex size-full items-center justify-center h-[150%] overflow-hidden -top-[10%] relative',
          'md:-top-[30%]',
          'lg:-top-[11%]'
        )}
        ref={containerRef}
        style={{ y: parallaxY }}
      >
        <div
          className={clsx(
            'relative grid size-full origin-center gap-8 -top-[40%] -right-[26%] scale-150',
            '[transform:rotateX(20deg)_rotateY(0deg)_rotateZ(20deg)] transform-3d',
            'grid-cols-2 -right-[10%] scale-125',
            'md:grid-cols-3 md:-right-[6%] md:-top-[20%] md:scale-150',
            {
              'lg:grid-cols-4 lg:-right-[2%]': columns >= 4,
              'xl:grid-cols-5 xl:-right-[2%]': columns >= 5
            }
          )}
        >
          {chunks.map((subarray, colIndex) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut'
              }}
              key={subarray[0] ?? `col-${colIndex}`}
            >
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 200 : -200 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 20 : 45,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear'
                }}
                className="flex flex-col items-start gap-8"
              >
                {subarray.map((image, imageIndex) => (
                  <div
                    className="relative w-full"
                    key={`img-${colIndex}-${imageIndex}`}
                  >
                    <motion.img
                      loading="lazy"
                      src={image}
                      alt={`Imagen ${colIndex * chunkSize + imageIndex + 1}`}
                      className="aspect-9/6 rounded-lg object-cover ring ring-gray-950/5 object-top w-full"
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
