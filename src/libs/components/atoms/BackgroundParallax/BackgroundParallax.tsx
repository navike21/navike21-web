'use client'

import { useBackgroundParallax } from './BackgroundParallax.hooks'
import { IBackgroundParallaxProps } from './BackgroundParallax.types'
import clsx from 'clsx'

export const BackgroundParallax = ({
  backgroundImage,
  className,
  startPosition = 'top',
  overlay = false,
  ...props
}: IBackgroundParallaxProps) => {
  const { imageRef, objectPosition } = useBackgroundParallax(startPosition)

  return (
    <div
      {...props}
      className={clsx(
        'w-full h-full will-change-transform pointer-events-none',
        'bg-no-repeat bg-cover overflow-hidden',
        className
      )}
    >
      <div
        ref={imageRef}
        className={clsx(
          'absolute inset-0 bg-center bg-cover will-change-transform -top-[12%] -bottom-[12%]',
          'sm:-top-3/12 sm:-bottom-3/12',
          'md:-top-1/12 md:-bottom-1/12'
        )}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: `center ${objectPosition}`
        }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-slate-950 opacity-50 top-0 -bottom-10" />
      )}
    </div>
  )
}
