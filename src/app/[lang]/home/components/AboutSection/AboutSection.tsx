'use client'

import { Content, Counter, GradientText, LinkButton } from '@Components/atoms'
import { Title } from '@Components/molecules'
import clsx from 'clsx'
import Image from 'next/image'
import { useAboutSection } from './AboutSection.hooks'

export const AboutSection = () => {
  const {
    title,
    subtitle,
    description,
    controlActionText,
    controlActionLink,
    metrics,
    imageAbout
  } = useAboutSection()

  return (
    <>
      <section>
        <Content
          className={clsx(
            'sectionContent grid items-center gap-10',
            'sm:grid-cols-3',
            'md:grid-cols-6'
          )}
        >
          <div
            className={clsx(
              'aspect-3/2 rounded-lg shadow-lg col-span-2 relative',
              'sm:col-span-1 sm:aspect-2/4',
              'md:aspect-1/2 md:col-span-2 md:max-h-96',
              'lg:col-span-3 lg:max-h-none lg:aspect-4/3'
            )}
          >
            <Image
              src={imageAbout.src}
              width={imageAbout.width}
              height={imageAbout.height}
              alt="About Section Background"
              className={clsx(
                'w-full h-full object-cover object-center rounded-lg relative z-10'
              )}
              quality={100}
            />
          </div>
          <div
            className={clsx(
              'col-span-2 flex flex-col gap-3',
              'md:col-span-4',
              'lg:col-span-3'
            )}
          >
            <div
              className={clsx(
                'flex flex-col gap-5 items-center',
                'sm:items-start'
              )}
            >
              <Title title={title} subtitle={subtitle} />
              <p className="paragraph-xs">{description}</p>
            </div>
            <LinkButton
              href={controlActionLink}
              className={clsx('mt-4 w-full', 'sm:w-fit')}
            >
              {controlActionText}
            </LinkButton>
          </div>
        </Content>
      </section>
      <section className={clsx('bg-slate-950')}>
        <Content
          className={clsx(
            'sectionContent grid items-center gap-7',
            'sm:grid-cols-4 sm:gap-5',
            'md:grid-cols-4'
          )}
        >
          {metrics.map(({ value, label, symbol, key }) => (
            <div
              key={key}
              className="counter w-full flex items-center text-center flex-col gap-3"
            >
              <div className="flex justify-center items-start">
                <Counter value={value} className="title-2xl text-white" />
                <GradientText className="title-xl">{symbol}</GradientText>
              </div>
              <p className="lg:px-6 xl:px-2">{label}</p>
            </div>
          ))}
        </Content>
      </section>
    </>
  )
}
