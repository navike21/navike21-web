'use client'

import clsx from 'clsx'
import { IBackgroundParallaxProps } from './BackgroundParallax.typed'
import { BackgroundContent } from './BackgroundParallax.styles'
import { useBackgroundParallax } from './BackgroundParallax.hook'

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
    <BackgroundContent
      {...props}
      backgroundImage={backgroundImage}
      backgroundPosition={initialPosition}
      overlay={overlay}
      className={clsx(className)}
      ref={parallaxRef}
    >
      {children}
    </BackgroundContent>
  )
}
