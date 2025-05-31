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
        className,
        'bg-cover bg-no-repeat will-change-transform relative bg-[position:top_center]',
        {
          'bg-[position:top_center]': initialPosition === 'top',
          'bg-center': initialPosition === 'center',
          'bg-[position:bottom_center]': initialPosition === 'bottom'
        },
        {
          'before:bg-gray-800 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:-z-10 before:opacity-30':
            overlay
        }
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      data-testid="background-parallax"
      ref={parallaxRef}
    >
      {children}
    </div>
  )
}
