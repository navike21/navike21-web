'use client'

import { Container, Logo, MenuIcon } from '@components/atoms'
import { useHeader } from './header.hook'
import clsx from 'clsx'
import { motion } from 'motion/react'

export const Header = () => {
  const { headerRef, isSolid, toggleMenu, setToggleMenu } = useHeader()

  return (
    <motion.header
      ref={headerRef}
      initial={false}
      animate={{
        backgroundColor: isSolid ? '#ffffff' : 'rgba(255,255,255,0)'
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={clsx(
        'fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500',
        isSolid ? 'h-20 shadow-xl' : 'h-28 bg-transparent shadow-none'
      )}
    >
      <Container className="flex items-center justify-between">
        <Logo showText textColor={isSolid ? 'black' : 'white'} />
        <button onClick={() => setToggleMenu(!toggleMenu)}>
          <MenuIcon className="w-10 h-10" />
        </button>
      </Container>
    </motion.header>
  )
}
