import * as LucideIcons from 'lucide-react'

export type TIconName = keyof typeof LucideIcons

export interface IIconProps {
  icon: TIconName
  className?: string
}
