'use client'

import { Content, Hamburger, Logo } from '@Components/atoms'
import { AnimatePresence, motion } from 'framer-motion'
import menuImage from '@Assets/images/converted/inside-modern-office-design-thumb.webp'
import Link from 'next/link'
import clsx from 'clsx'
import { uuidV7 } from '../../../utils'
import Image from 'next/image'
import { EASING, ITEMS_VARIANTS } from './Header.constants'
import { useHeader } from './Header.hooks'

export const Header = () => {
  const { isOpen, showImageAndBackground, showMenuItems, handleToggle } =
    useHeader()

  return (
    <>
      <motion.header
        className={clsx(
          'fixed overflow-hidden top-0 w-full',
          'before:[content:""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:transition-all',
          {
            'z-50 before:bg-transparent': isOpen,
            'before:bg-white before:dark:bg-gray-900': !isOpen
          }
        )}
      >
        <Content className="flex justify-between items-center py-3 relative z-50">
          <Logo className="h-11" />
          <Hamburger pressed={isOpen} onClick={handleToggle} />
        </Content>
      </motion.header>

      <AnimatePresence>
        {showImageAndBackground && (
          <motion.div
            key="half-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASING }}
            className="fixed top-0 flex h-full left-0 bottom-0 right-0 z-40 overflow-x-hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: EASING }}
              className={clsx('h-full w-1/3', 'md:w-1/2')}
            >
              <Image
                src={menuImage.src}
                alt="Menu Image"
                className="h-full object-cover object-center pointer-events-none w-full"
                width={menuImage.width}
                height={menuImage.height}
                priority
                quality={100}
              />
            </motion.div>

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: EASING }}
              className={clsx(
                'bg-white h-full w-2/3',
                'dark:bg-gray-900',
                'md:w-1/2'
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMenuItems && (
          <motion.div
            key="menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                transition: { staggerChildren: 0.1, delayChildren: 0.1 }
              },
              closed: {
                transition: { staggerChildren: 0.07, staggerDirection: -1 }
              }
            }}
            className={clsx(
              'fixed bg-transparent h-full p-3 right-0 top-0 w-2/3 z-40',
              'md:w-1/2 md:p-10',
              'lg:p-15'
            )}
          >
            <Content className="flex flex-col h-full items-start justify-center">
              <motion.ul className={clsx('flex flex-col gap-3', 'md:gap-5')}>
                {[
                  'Inicio',
                  'Nosotros',
                  'Servicios',
                  'Trabajos',
                  'Contacto'
                ].map(text => (
                  <motion.li key={uuidV7()} variants={ITEMS_VARIANTS}>
                    <Link
                      href="/"
                      className={clsx(
                        'title-md transition-all duration-300 ease-in-out',
                        'md:title-lg',
                        'hover:text-gray-300'
                      )}
                    >
                      {text}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </Content>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
