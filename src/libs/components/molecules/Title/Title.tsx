import { parseTitleWithHighlight } from '@Utils/parseTitleWithHighlight'
import clsx from 'clsx'

export interface ITitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export const Title = ({
  title,
  subtitle,
  align = 'left',
  className
}: ITitleProps) => {
  return (
    <hgroup className={clsx('flex flex-col gap-3 items-center', className)}>
      {subtitle && (
        <h4
          className={clsx('title-xs text-center w-full', {
            'sm:text-left': align === 'left',
            'sm:text-center': align === 'center',
            'sm:text-right': align === 'right'
          })}
        >
          {subtitle}
        </h4>
      )}
      <h2
        className={clsx(
          'title-md text-center text-white w-full',
          'lg:sm:title-xl',
          {
            'sm:text-left': align === 'left',
            'sm:text-center': align === 'center',
            'sm:text-right': align === 'right'
          }
        )}
      >
        {parseTitleWithHighlight(title)}
      </h2>
    </hgroup>
  )
}
