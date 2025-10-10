import * as RemixIcons from '@remixicon/react'

export type TIconName = keyof typeof RemixIcons
export interface IIconProps {
  icon: TIconName
  className?: string
}
