'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Image, { type StaticImageData } from 'next/image'
import clsx from 'clsx'

interface ParallaxImageProps {
  img: StaticImageData
  alt: string
  className?: string
}

export const ParallaxImage = ({
  img,
  alt,
  className = 'relative'
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <div ref={ref} className={clsx('overflow-hidden', className)}>
      <motion.div
        className="overflow-hidden h-full scale-3d scale-125 relative"
        style={{ translateY }}
      >
        <Image
          src={img}
          alt={alt}
          quality={75}
          className="object-cover object-center h-full"
        />
      </motion.div>
    </div>
  )
}
