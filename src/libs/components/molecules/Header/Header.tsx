'use client'

import { Container, Logo, MenuIcon } from '@components/atoms'
import { useHeader } from './header.hook'
import clsx from 'clsx'
import Link from 'next/link'

export const Header = () => {
  const { headerRef, isSolid, toggleMenu, setToggleMenu } = useHeader()

  return (
    <header
      ref={headerRef}
      className={clsx(
        'fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500',
        {
          'shadow-xl h-20': isSolid && !toggleMenu,
          'shadow-none h-28': !isSolid || toggleMenu
        }
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/">
          <Logo
            logoColor="gradient"
            showText
            textColor={
              (isSolid && !toggleMenu && 'black') ||
              ((!isSolid || toggleMenu) && 'white') ||
              'black'
            }
          />
        </Link>
        <button
          className="rounded-full cursor-pointer"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <MenuIcon
            className={clsx(
              'w-10 h-10 transition-all ease-in-out duration-500',
              {
                'stroke-slate-950': isSolid && !toggleMenu,
                'stroke-white': !isSolid || toggleMenu
              }
            )}
          />
        </button>
      </Container>
    </header>
  )
}

export const BgHeader = () => {
  const { isSolid, toggleMenu } = useHeader()
  return (
    <div
      className={clsx('bg-header fixed inset-0 z-30', {
        'bg-white h-20': isSolid && !toggleMenu,
        'bg-white/0 h-28': !isSolid || toggleMenu
      })}
    />
  )
}
