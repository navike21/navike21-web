'use client'

import { Content, LinkButton } from '@Components/atoms'
import { SliderMobileDevice, Title } from '@Components/molecules'
import clsx from 'clsx'
import { useRecentWorks } from './RecentWorks.hooks'

export const RecentWorks = () => {
  const {
    title,
    description,
    controlActionLink,
    controlActionText,
    subtitle,
    imagesDeviceProject
  } = useRecentWorks()

  return (
    <div className="bg-slate-950">
      <Content
        className={clsx(
          'sectionContent flex-col flex gap-16',
          'md:items-center md:gap-0 md:justify-between md:flex-row-reverse'
        )}
      >
        <section
          className={clsx('flex flex-col gap-5 items-start', 'md:w-5/12')}
        >
          <Title subtitle={subtitle} title={title} />
          <p className="paragraph-xs">{description}</p>
          <LinkButton
            href={controlActionLink}
            className={clsx('mt-4 w-full', 'sm:w-fit')}
          >
            {controlActionText}
          </LinkButton>
        </section>
        <div
          className={clsx(
            'hidden',
            'w-px h-52 bg-gradient-primary-vertical mask-fade-vertical relative z-10',
            'md:block'
          )}
        />
        <section
          className={clsx(
            'relative flex justify-center items-center',
            'md:w-6/12',
            'before:inset-0 before:bg-[radial-gradient(circle,rgba(56,189,248,1)_0%,rgba(56,189,248,0)_80%)] before:rounded-3xl before:blur-3xl before:z-0',
            'before:absolute before:top-0 before:left-0 before:right-2/12 before:bottom-2/12',
            'after:inset-0 after:bg-[radial-gradient(circle,rgba(130,0,219,1)_0%,rgba(130,0,219,0)_80%)] after:rounded-3xl after:blur-3xl after:z-0',
            'after:absolute after:top-2/12 after:left-2/12 after:right-0 after:bottom-0'
          )}
        >
          <SliderMobileDevice
            className="w-7/12 z-10"
            images={imagesDeviceProject}
          />
        </section>
      </Content>
    </div>
  )
}
