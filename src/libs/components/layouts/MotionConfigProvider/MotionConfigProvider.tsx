'use client'

import { MotionConfig } from 'motion/react'
import type { ReactNode } from 'react'

interface MotionConfigProviderProps {
  children: ReactNode
}

export const MotionConfigProvider = ({
  children
}: Readonly<MotionConfigProviderProps>) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
)
