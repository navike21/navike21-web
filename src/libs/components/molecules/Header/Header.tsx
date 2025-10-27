'use client'

import { Container, IconComponent, Logo, MenuIcon } from '@Components/atoms'
import { useHeader } from './header.hook'
import clsx from 'clsx'
import Link from 'next/link'

export const Header = () => {
  const { headerRef, isSolid, toggleMenu, socialMedia, setToggleMenu } = useHeader()

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
            classNameTextColor={clsx({
              'text-white': !isSolid || toggleMenu,
              'md:text-primary-text': !isSolid && !toggleMenu
            })}
          />
        </Link>
        <div className="flex items-center gap-4">
          <aside className="flex items-center gap-2">
            {socialMedia.map(({ icon, name, url }) => (
              <Link key={name} href={url} target="_blank" rel="noopener noreferrer">
                <IconComponent
                  icon={icon}
                  className={clsx('w-auto h-5 transition-all ease-in-out duration-500', {
                    'text-slate-950': isSolid && !toggleMenu,
                    'text-white': !isSolid || toggleMenu
                  })}
                />
              </Link>
            ))}
          </aside>

          <button
            className="rounded-full cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
            aria-label="Toggle Menu"
          >
            <MenuIcon
              className={clsx('w-10 h-10 transition-all ease-in-out duration-500', {
                'stroke-slate-950': isSolid && !toggleMenu,
                'stroke-white': !isSolid || toggleMenu
              })}
            />
          </button>
        </div>
      </Container>
    </header>
  )
}

export const BgHeader = () => {
  const { isSolid, toggleMenu } = useHeader()
  return (
    <div
      className={clsx(
        'bg-header fixed inset-0 z-30 transition-all duration-500 ease-in-out',
        {
          'bg-white h-20': isSolid && !toggleMenu,
          'bg-white/0 h-28': !isSolid || toggleMenu
        }
      )}
      data-aria-hidden="true"
    />
  )
}
