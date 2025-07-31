import clsx from 'clsx'
import React from 'react'

export const GradientDivider = () => (
  <div
    className={clsx(
      'hidden',
      'w-px h-52 bg-gradient-primary-vertical mask-fade-vertical relative z-10 min-w-px',
      'md:block'
    )}
  />
)
