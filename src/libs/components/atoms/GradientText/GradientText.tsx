import clsx from 'clsx'
import React, { ReactNode } from 'react'

interface IGradientTextProps {
  children: ReactNode
  className?: string
  animationSpeed?: number
}

export const GradientText = ({
  children,
  className = '',
  animationSpeed = 75
}: IGradientTextProps) => {
  return (
    <span
      className={clsx(
        'text-transparent bg-clip-text bg-cover animate-gradient bg-size-200 bg-gradient-to-r from-sky-400 to-purple-700 ease-in-out',
        {
          'duration-75': animationSpeed === 75,
          'duration-100': animationSpeed === 100,
          'duration-200': animationSpeed === 200,
          'duration-300': animationSpeed === 300,
          'duration-500': animationSpeed === 500,
          'duration-1000': animationSpeed === 1000
        },
        className
      )}
    >
      {children}
    </span>
  )
}
