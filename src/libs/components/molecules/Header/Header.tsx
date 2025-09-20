'use client'

import { Container, Logo } from '@components/atoms'
import { useHeader } from './header.hook'
import clsx from 'clsx'

export const Header = () => {
  const { headerRef, isSolid, toggleMenu, setToggleMenu } = useHeader()

  return (
    <header
      ref={headerRef}
      className={clsx(
        'fixed top-0 left-0 w-full z-50 h-28 flex justify-center transition-all duration-500 bg-transparent'
      )}
      role="banner"
    >
      <Container className="flex items-center">
        <Logo showText textColor={isSolid ? 'black' : 'white'} />

        <button
          type="button"
          className={clsx(
            'ml-auto p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500',
            isSolid ? 'text-black' : 'text-white'
          )}
          aria-label="Toggle menu"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? 'Close menu' : 'Open menu'}
        </button>
      </Container>
    </header>
  )
}
