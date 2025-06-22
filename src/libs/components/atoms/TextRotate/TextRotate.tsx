'use client'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

interface TextRotateProps {
  words: string[]
  className?: string
}

export const TextRotate = ({ className, words }: TextRotateProps) => {
  const [index, setIndex] = useState(0)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(id)
  }, [words.length])

  return (
    <div className={clsx('inline-block transition-all duration-300 w-fit')}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          ref={textRef}
          className={clsx(className)}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 0.4 }}
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
