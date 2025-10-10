import { Container, LinkButton, ParallaxImage } from '@Components/atoms'
import { ILinkButtonProps } from '@Types/buttonProps'
import clsx from 'clsx'
import { randomUUID } from 'crypto'
import { StaticImageData } from 'next/image'
import React from 'react'

interface IItemHeroSectionProps {
  heroImage: StaticImageData
  title: string
  description: string
  controlActions?: ILinkButtonProps[]
}

export const ItemHeroSection = ({
  heroImage,
  title,
  description,
  controlActions = []
}: IItemHeroSectionProps) => {
  return (
    <div className={clsx('bg-slate-950 relative', 'md:bg-white')}>
      <Container
        className={clsx(
          'flex items-center justify-between flex-wrap content-center z-10 relative',
          'h-dvh max-h-[1000px]',
          'md:gap-8 md:flex-nowrap',
          'lg:gap-20'
        )}
      >
        <section
          className={clsx(
            'w-full flex flex-col gap-4',
            'md:w-9/12 md:gap-6',
            'lg:w-7/12 lg:gap-6'
          )}
        >
          <h2
            className={clsx(
              'text-2xl font-semibold leading-tight text-white',
              'md:text-3xl md:text-primary-text md:w-11/12',
              'lg:text-4xl',
              'xl:text-5xl'
            )}
          >
            {title}
          </h2>
          <p
            className={clsx(
              'w-full text-white',
              'md:w-11/12 md:text-primary-text',
              'lg:w-10/12'
            )}
          >
            {description}
          </p>
          {controlActions.length > 0 && (
            <div
              className={clsx('flex flex-col gap-4', 'sm:flex-row sm:gap-5')}
            >
              {controlActions.map(({ ...props }) => (
                <LinkButton key={randomUUID()} {...props} />
              ))}
            </div>
          )}
        </section>
      </Container>
      <ParallaxImage
        img={heroImage}
        className={clsx(
          'absolute top-0 right-0 h-full z-0 w-12/12 opacity-50 clip-diagonal',
          'md:w-4/12 md:opacity-100',
          'lg:w-5/12',
          'xl:w-6/12'
        )}
        alt="Abstract shiny blue presentation background"
      />
    </div>
  )
}
