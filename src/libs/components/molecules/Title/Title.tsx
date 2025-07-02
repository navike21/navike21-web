import { uuidV7 } from '@Utils/generateKeys'
import clsx from 'clsx'
import { Fragment } from 'react'

interface ITitleProps {
  title: string
  subtitle?: string
}

export const Title = ({ title, subtitle }: ITitleProps) => {
  function parseTitleWithHighlight(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g)
    return parts.map(part => {
      const regex = /^\*\*(.+)\*\*$/
      const match = regex.exec(part)
      if (match) {
        return (
          <span key={uuidV7()} className="text-gradient-primary">
            {match[1]}
          </span>
        )
      }
      return <Fragment key={uuidV7()}>{part}</Fragment>
    })
  }

  return (
    <hgroup className="flex flex-col gap-3 items-center">
      {subtitle && (
        <h4 className={clsx('title-xs text-center w-full', 'sm:text-left')}>
          {subtitle}
        </h4>
      )}
      <h2
        className={clsx(
          'title-lg text-center text-white',
          'sm:text-left',
          'lg:sm:title-xl'
        )}
      >
        {parseTitleWithHighlight(title)}
      </h2>
    </hgroup>
  )
}
