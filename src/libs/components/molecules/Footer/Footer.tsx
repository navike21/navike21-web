'use client'

import { Logo, Content } from '@Components/atoms'
import { SOCIAL_MEDIA } from '@Constants/socialMedia'
import { clsx } from 'clsx'
import { useFooter } from './Footer.hooks'

export const Footer = () => {
  const { footerMenuStructure, footerDescription, allBeRightReserved } =
    useFooter()
  return (
    <footer className="relative">
      <div className="bg-gradient-primary mask-fade-horizontal h-px" />
      <div className={clsx('bg-gray-950 py-12')}>
        <Content
          className={clsx(
            'gap-10 grid grid-cols-1 items-start',
            'sm:grid-cols-2',
            'md:grid-cols-3',
            'lg:grid-cols-5 lg:gap-7'
          )}
        >
          <section
            className={clsx(
              'flex flex-col gap-4 items-center justify-center w-full',
              'sm:col-span-2',
              'md:col-span-3',
              'lg:col-span-2'
            )}
          >
            <div
              className={clsx(
                'title-xs text-white flex gap-3 items-center justify-start w-full',
                'md:title-sm'
              )}
            >
              <Logo className="w-10" /> navike21
            </div>
            <div className="paragraph-xs w-full">{footerDescription}</div>
          </section>

          {footerMenuStructure.map(({ items, title }) => {
            return (
              <section
                className="flex flex-col gap-4 items-center justify-center w-full"
                key={title}
              >
                <div className="title-xs w-full text-white uppercase">
                  {title}
                </div>
                <ul className="gap-2 grid grid-cols-1 w-full">
                  {items.map(({ text, href }) => (
                    <li className="paragraph-xs" key={text}>
                      <a
                        href={href}
                        className="hover:text-white transition-all ease-in-out"
                      >
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </Content>
      </div>

      <div
        className={clsx(
          'border-t border-gray-700 bg-gray-950 py-10',
          'sm:py-6'
        )}
      >
        <Content
          className={clsx(
            'flex flex-col gap-6 items-center justify-between',
            'sm:flex-row',
            'sm:grid-cols-2'
          )}
        >
          <aside className="flex gap-4 items-center justify-center">
            {Object.values(SOCIAL_MEDIA)
              .filter(({ active }) => active)
              .map(({ name, url, icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-all duration-300"
                >
                  {icon({
                    className: 'w-5 h-5'
                  })}
                </a>
              ))}
          </aside>
          <div className="paragraph-xs text-center text-white">
            © 2025 navike21 | {allBeRightReserved}
          </div>
        </Content>
      </div>
    </footer>
  )
}
