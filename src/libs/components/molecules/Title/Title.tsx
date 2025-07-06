import { GradientText } from '@Components/atoms'
import { uuidV7 } from '@Utils/generateKeys'
import clsx from 'clsx'
import { Fragment } from 'react'

interface ITitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
}

export const Title = ({ title, subtitle, align = 'left' }: ITitleProps) => {
  function parseTitleWithHighlight(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map(part => {
      const regex = /^\*\*(.+)\*\*$/
      const match = regex.exec(part)
      if (match) {
        return <GradientText key={uuidV7()}>{match[1]}</GradientText>
      }
      return <Fragment key={uuidV7()}>{part}</Fragment>
    })
  }

  return (
    <hgroup className="flex flex-col gap-3 items-center">
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
          'title-lg text-center text-white w-full',
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
