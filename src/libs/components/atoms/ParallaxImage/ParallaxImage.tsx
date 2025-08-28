'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import clsx from 'clsx'
import { TPosition } from '../BackgroundParallax/BackgroundParallax.types'

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface ParallaxImageProps {
  src: string
  blurDataURL?: string
  alt?: string
  className?: string
  parallaxSpeed?: number
  overlay?: boolean
  startPositionImage?: TPosition
}

export function ParallaxImage({
  blurDataURL,
  src,
  alt = '',
  className = '',
  parallaxSpeed = 0.3,
  overlay = false,
  startPositionImage = 'center'
}: Readonly<ParallaxImageProps>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current || !imageRef.current) return

      const container = containerRef.current
      const image = imageRef.current

      const scale = 1 + parallaxSpeed * 0.5
      gsap.set(image, { scale })

      gsap.fromTo(
        image,
        { yPercent: parallaxSpeed * 50 },
        {
          yPercent: -parallaxSpeed * 50,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            scrub: 0.4
          }
        }
      )
    },
    { scope: containerRef, dependencies: [parallaxSpeed] }
  )

  return (
    <div
      ref={containerRef}
      className={clsx('overflow-hidden w-full h-full', className)}
    >
      <div
        ref={imageRef}
        className="absolute -top-10 -bottom-10 left-0 w-full will-change-transform"
      >
        <Image
          blurDataURL={blurDataURL}
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 450px, (max-width: 1200px) 850px, 1400px"
          className={clsx('object-cover min-h-[500px] absolute w-full h-full', {
            'object-top': startPositionImage === 'top',
            'object-center': startPositionImage === 'center',
            'object-bottom': startPositionImage === 'bottom'
          })}
          priority
          quality={100}
        />
        {overlay && (
          <div className="absolute top-0 left-0 w-full h-full bg-slate-950/50" />
        )}
      </div>
    </div>
  )
}
