import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

export interface IIconTextProps {
  icon: LucideIcon
  title: string
  description: string | ReactNode
}

export const IconText = ({
  icon: Icon,
  title,
  description
}: IIconTextProps) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="w-fit rounded-lg bg-gradient-primary-diagonal p-1.5 text-center text-white">
        <Icon />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="title-sm text-white">{title}</h4>
        {typeof description === 'string' ? <p>{description}</p> : description}
      </div>
    </div>
  )
}
