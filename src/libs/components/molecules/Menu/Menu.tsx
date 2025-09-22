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
                'landscape:flex-row landscape:flex-wrap landscape:items-center landscape:justify-start landscape:content-center landscape:pt-20',
                'landscape:md:flex-col landscape:items-center landscape:md:justify-center landscape:md:content-center landscape:md:pt-0 landscape:md:w-1/2',
                'md:w-1/2 md:items-center md:gap-6'
              )}
            >
              <motion.h2
                className="text-2xl min-w-[40%]"
                variants={itemMenuVariants}
              >
                Inicio
              </motion.h2>
              <motion.h2
                className="text-2xl min-w-[40%]"
                variants={itemMenuVariants}
              >
                Nosotros
              </motion.h2>
              <motion.h2
                className="text-2xl min-w-[40%]"
                variants={itemMenuVariants}
              >
                Servicios
              </motion.h2>
              <motion.h2
                className="text-2xl min-w-[40%]"
                variants={itemMenuVariants}
              >
                Portafolio
              </motion.h2>
              <motion.h2
                className="text-2xl min-w-[40%]"
                variants={itemMenuVariants}
              >
                Contacto
              </motion.h2>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
