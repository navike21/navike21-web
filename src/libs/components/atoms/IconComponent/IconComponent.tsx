import { IIconProps } from '@Types/iconsLucide'
import clsx from 'clsx'
import * as LucideIcons from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export const IconComponent = ({ icon, className }: IIconProps) => {
  const LucideIconComponent = LucideIcons[icon] as LucideIcon

  return <LucideIconComponent className={clsx(className)} />
}
