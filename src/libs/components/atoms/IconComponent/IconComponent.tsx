import { type IconProps } from '@Types/icons'
import clsx from 'clsx'
import * as RemixIcons from '@remixicon/react'

export const IconComponent = ({ icon, className }: IconProps) => {
  const LucideIconComponent = RemixIcons[icon]

  return <LucideIconComponent className={clsx(className)} />
}
