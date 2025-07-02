'use client'

import { Content, Hamburger, Logo } from '@Components/atoms'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import { EASING, ITEMS_VARIANTS } from './Header.constants'
import { useHeader } from './Header.hooks'
import { uuidV7 } from '@Utils/generateKeys'
import { modernOffice } from '@Constants/backgroundsImages'
import { SOCIAL_MEDIA } from '@Constants/socialMedia'

export const Header = () => {
  const {
    isOpen,
    showImageAndBackground,
    showMenuItems,
    visible,
    handleToggle
  } = useHeader()

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 w-full z-40 overflow-hidden transition-all',
          {
            'bg-transparent z-50': isOpen,
            'backdrop-blur-lg bg-gray-950/70': !isOpen && visible
          }
        )}
      >
        <Content className="flex justify-between items-center py-4 z-50">
          <Link href="/">
            <Logo className="h-11" />
          </Link>
          <div className="flex gap-10 items-center">
            <aside
              className={clsx(
                'hidden',
                'md:flex md:gap-3 md:items-center md:justify-center'
              )}
            >
              {Object.values(SOCIAL_MEDIA)
                .filter(({ active }) => active)
                .map(({ name, url, icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      'transition-all duration-300',
                      'hover:opacity-80',
                      'text-white hover:opacity-80'
                    )}
                  >
                    {icon({
                      className: 'w-5 h-5'
                    })}
                  </a>
                ))}
            </aside>
            <Hamburger pressed={isOpen} onClick={handleToggle} />
          </div>
        </Content>
      </header>

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
                src={modernOffice.src}
                alt="Menu Image"
                className="h-full object-cover object-center pointer-events-none w-full"
                width={modernOffice.width}
                height={modernOffice.height}
                loading="lazy"
                quality={100}
              />
            </motion.div>

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: EASING }}
              className={clsx('h-full w-2/3 bg-slate-900', 'md:w-1/2')}
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
                        'text-white',
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
