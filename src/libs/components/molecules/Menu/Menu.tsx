'use client'

import { useHeaderContext } from '@context/HeaderContext'
import { AnimatePresence, motion } from 'motion/react'
import React from 'react'

export const Menu = () => {
  const { toggleMenu } = useHeaderContext()
  return (
    <AnimatePresence>
      {toggleMenu && (
        <motion.div
          className="fixed top-0 left-0 w-full bg-slate-950 z-40 overflow-hidden"
          key="modal"
          initial={{ height: 0 }}
          animate={{ height: '100dvh' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          menu
        </motion.div>
      )}
    </AnimatePresence>
  )
}
