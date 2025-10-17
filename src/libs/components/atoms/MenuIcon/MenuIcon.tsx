'use client'

import { useHeaderContext } from '@Context/headerContext.hook'
import { motion, type Transition } from 'motion/react'

interface IMenuIconProps {
  className?: string
}

export const MenuIcon = ({ className }: IMenuIconProps) => {
  const { toggleMenu } = useHeaderContext()

  const transition: Transition = { duration: 0.5, ease: 'easeInOut' }

  return (
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.line
        x1="8"
        y1="12"
        x2="32"
        y2="12"
        stroke="inherit"
        strokeWidth="2"
        animate={
          toggleMenu
            ? { y: 8, rotate: 45, transformOrigin: '50% 50%' }
            : { y: 0, rotate: 0 }
        }
        transition={transition}
      />
      <motion.line
        x1="8"
        y1="20"
        x2="32"
        y2="20"
        stroke="inherit"
        strokeWidth="2"
        animate={toggleMenu ? { opacity: 0 } : { opacity: 1 }}
        transition={transition}
      />
      <motion.line
        x1="8"
        y1="28"
        x2="32"
        y2="28"
        stroke="inherit"
        strokeWidth="2"
        animate={
          toggleMenu
            ? { y: -8, rotate: -45, transformOrigin: '50% 50%' }
            : { y: 0, rotate: 0 }
        }
        transition={transition}
      />
    </svg>
  )
}
