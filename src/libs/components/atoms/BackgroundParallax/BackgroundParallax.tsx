'use client'

import clsx from 'clsx'
import { IBackgroundParallaxProps } from './BackgroundParallax.types'
import { useBackgroundParallax } from './BackgroundParallax.hooks'

export const BackgroundParallax = ({
  backgroundImage,
  children,
  className,
  overlay = false,
  startPosition = 'top',
  ...props
}: IBackgroundParallaxProps) => {
  const { initialPosition, parallaxRef } = useBackgroundParallax(startPosition)

  return (
    <div
      {...props}
      className={clsx(
        'bg-cover bg-no-repeat will-change-transform bg-[position:top_center]',
        {
          'bg-[position:top_center]': initialPosition === '0%',
          'bg-center': initialPosition === '50%',
          'bg-[position:bottom_center]': initialPosition === '100%'
        },
        {
          'before:bg-gray-950 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:-z-10 before:opacity-50':
            overlay
        },
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      ref={parallaxRef}
    >
      {children}
    </div>
  )
}
