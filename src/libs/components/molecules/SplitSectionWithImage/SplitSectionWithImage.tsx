import clsx from 'clsx'
import { Title } from '../Title'
import {
  BackgroundParallax,
  GradientDivider,
  LinkButton
} from '@Components/atoms'
import { ReactNode } from 'react'

interface ISplitSectionProps {
  image: string | ReactNode
  isGrayScale?: boolean
  title?: string
  subtitle?: string
  description?: string
  showDivider?: boolean
  reverseOrder?: boolean
  controlAction?: {
    text: string
    href: string
  }
  children?: ReactNode
  layoutRatio?: '50-50' | '40-60' | '30-70'
}

export const SplitSectionWithImage = ({
  image,
  isGrayScale = false,
  title,
  subtitle,
  description,
  controlAction,
  showDivider,
  reverseOrder,
  children,
  layoutRatio = '50-50'
}: ISplitSectionProps) => {
  return (
    <div
      className={clsx(
        'flex-col flex gap-16 w-full',
        'md:flex-row md:items-center md:gap-12 md:justify-between',
        {
          'flex-col-reverse': reverseOrder,
          'md:flex-row-reverse': reverseOrder
        }
      )}
    >
      <section
        className={clsx('flex flex-col gap-5 items-center', {
          'md:w-6/12': layoutRatio === '50-50',
          'md:w-5/12': layoutRatio === '40-60',
          'md:w-4/12': layoutRatio === '30-70'
        })}
      >
        {typeof image === 'string' ? (
          <div
            className={clsx(
              'aspect-3/2 rounded-lg shadow-lg w-full bg-glow-effect',
              'sm:items-start sm:aspect-2/4',
              'md:aspect-1/2 md:max-h-96',
              'lg:col-span-3 lg:max-h-none lg:aspect-4/3'
            )}
          >
            <BackgroundParallax
              backgroundImage={image}
              className={clsx(
                'w-full h-full object-cover object-center rounded-lg relative z-10',
                {
                  grayscale: isGrayScale
                }
              )}
              startPosition="center"
            />
          </div>
        ) : (
          <div className="w-full flex justify-center">{image}</div>
        )}
      </section>
      {showDivider && <GradientDivider />}
      <section
        className={clsx('flex flex-col gap-5 items-center', 'sm:items-start', {
          'md:w-6/12': layoutRatio === '50-50',
          'md:w-7/12': layoutRatio === '40-60',
          'md:w-8/12': layoutRatio === '30-70'
        })}
      >
        <div className="flex flex-col gap-5 items-center sm:items-start">
          {children ?? (
            <>
              {title && <Title title={title} subtitle={subtitle} />}
              <p className={clsx('text-left paragraph-xs')}>{description}</p>
              {controlAction && (
                <LinkButton
                  href={controlAction.href}
                  className={clsx('mt-4 w-full', 'sm:w-fit')}
                >
                  {controlAction.text}
                </LinkButton>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
