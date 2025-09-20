'use client'

import { Container, Logo, MenuIcon } from '@components/atoms'
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
        <button onClick={() => setToggleMenu(!toggleMenu)}>
          <MenuIcon className={clsx('w-10 h-10')} />
        </button>
      </Container>
    </header>
  )
}
