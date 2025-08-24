import { BackgroundParallax, Content, LinkButton } from '@Components/atoms'
import { Title } from '@Components/molecules'
import clsx from 'clsx'
import React from 'react'
import { useContactSectionBanner } from './useContactSectionBanner'

export const ContactSectionBanner = () => {
  const { contactUs, contactLink, imageContact } = useContactSectionBanner()
  return (
    <div className="relative">
      <BackgroundParallax
        backgroundImage={imageContact}
        className={clsx('absolute inset-0 w-full h-full z-0 top-0 bottom-0')}
        startPosition="center"
        overlay
      />
      <Content
        className={clsx(
          'sectionContent flex-col flex gap-16 relative z-10',
          'md:items-center md:gap-24 md:justify-between '
        )}
      >
        <div
          className={clsx(
            'w-full pt-60',
            'md:grid md:grid-cols-2 md:gap-12 md:pt-0'
          )}
        >
          <section className="flex flex-col gap-4">
            <Title title={contactUs.title} align="left" />
            <p>{contactUs.description}</p>
            <LinkButton href={contactLink.href} className="mt-4">
              {contactLink.text}
            </LinkButton>
          </section>
          <span />
        </div>
      </Content>
    </div>
  )
}
