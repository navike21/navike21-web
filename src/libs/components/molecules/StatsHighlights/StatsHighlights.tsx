import { Counter, GradientText } from '@Components/atoms'
import clsx from 'clsx'
import React from 'react'

export interface IStat {
  value: number
  label: string
  symbol: string
  key: string
}

export interface IStatHighlight {
  metrics: IStat[]
}

export const StatsHighlights = ({ metrics }: IStatHighlight) => {
  return (
    <section
      className={clsx(
        'relative w-full py-10 flex items-center justify-center bg-glow-effect '
      )}
    >
      <div
        className={clsx(
          'bg-slate-900 p-10 text-white rounded-2xl relative z-10',
          'flex flex-col gap-10 items-start',
          'md:flex-row md:w-full md:py-10 md:px-0 md:gap-0'
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
      </div>
    </section>
  )
}
