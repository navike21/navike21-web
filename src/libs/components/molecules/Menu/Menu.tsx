'use client'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import imageLeft from '@assets/background/minimalist-hallways-background.jpg'
import { useMenu } from './menu.hook'

export const Menu = () => {
  const { toggleMenu, menuVariants, imageVariants, itemMenuVariants } =
    useMenu()

  return (
    <AnimatePresence>
      {toggleMenu && (
        <motion.div
          key="modal"
          className={clsx(
            'fixed top-0 left-0 w-full bg-black z-40 overflow-y-auto',
            'flex justify-between items-center',
            'md:overflow-hidden'
          )}
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div
            className={clsx(
              'w-full h-dvh flex flex-col justify-center items-center overflow-x-hidden transition-all ease-in-out duration-500',
              'md:flex-row relative overflow-hidden'
            )}
          >
            <motion.div
              className={clsx(
                'w-full h-full absolute left-0 top-0 z-0',
                'md:relative md:w-1/2'
              )}
              variants={imageVariants}
            >
              <Image
                src={imageLeft.src}
                alt="Menu Image"
                width={8000}
                height={8000}
                className={clsx(
                  'object-cover object-center h-dvh opacity-20 blur-sm transition-all ease-in-out duration-500',
                  'md:opacity-100 md:blur-none'
                )}
                priority
              />
            </motion.div>

            <div
              className={clsx(
                'w-[80%] h-dvh flex flex-col justify-center items-start text-white z-10 relative gap-2 transition-all ease-in-out duration-500',
                'landscape:grid landscape:grid-cols-3 landscape:pt-20 landscape:justify-between landscape:items-center landscape:gap-3 landscape:content-center',
                'landscape:md:flex landscape:md:flex-col landscape:items-center landscape:md:justify-center landscape:md:content-center landscape:md:pt-0 landscape:md:w-1/2',
                'md:w-1/2 md:items-center md:gap-6'
              )}
            >
              <motion.h2
                className={clsx(
                  'text-xl w-full text-center',
                  'md:text-2xl md:w-[80%]',
                  'landscape:text-left'
                )}
                variants={itemMenuVariants}
              >
                Inicio
              </motion.h2>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
