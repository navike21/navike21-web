import clsx from 'clsx'
import React from 'react'

interface TitleProps {
  title: string
  subTitle?: string
  className?: string
}
export const Title = ({ title, subTitle, className }: TitleProps) => (
  <div className={clsx('title-area flex flex-col gap-4', className)}>
    <h2 className={clsx('text-center text-4xl font-semibold')}>{title}</h2>
    {subTitle && <p className={clsx('text-center')}>{subTitle}</p>}
  </div>
)
