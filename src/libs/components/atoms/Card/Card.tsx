import { TIconName } from '@Types/icons'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { IconComponent } from '../IconComponent'
import Link from 'next/link'

interface ICardProps {
  children?: ReactNode
  showLine?: boolean
  className?: string
}

export const Card = ({ children, showLine, className }: ICardProps) => (
  <div
    className={clsx(
      'bg-white transition-all duration-500 group h-full',
      'flex flex-col items-center gap-6 justify-between',
      'shadow-md shadow-gray-900/20 px-8 pt-7 rounded-lg',
      'hover:shadow-xl',
      className
    )}
  >
    <div className={clsx('flex flex-col items-center gap-5')}>{children}</div>
    {showLine && (
      <div
        className={clsx(
          'w-4/12 h-0.5 transition-all duration-500 mb-7 bg-gradient-horizontal',
          'group-hover:w-7/12'
        )}
      />
    )}
  </div>
)

interface IItemCardProps extends ICardProps {
  description?: string
  title?: string
  icon?: TIconName
  className?: string
}

export const ItemCard = ({
  title,
  description,
  icon,
  children,
  className,
  ...props
}: IItemCardProps) => (
  <Card className={clsx('group', className)} showLine {...props}>
    {icon && (
      <div
        className={clsx(
          'p-4 text-white bg-gradient-diagonal',
          'flex items-center justify-center rounded-full',
          'transition-all duration-500 ease-in-out',
          'group-hover:scale-110'
        )}
      >
        <IconComponent
          className={clsx(
            'w-6 h-6',
            'transition-all duration-300 ease-in-out',
            'group-hover:scale-110'
          )}
          icon={icon}
        />
      </div>
    )}
    {title && (
      <h3 className="text-lg font-medium text-center leading-6 text-primary-text">
        {title}
      </h3>
    )}
    {description && <p className="text-center text-sm pb-4">{description}</p>}
  </Card>
)

interface IItemLinkCardProps extends IItemCardProps {
  href: string
}

export const ItemLinkCard = ({
  href,
  children,
  ...props
}: IItemLinkCardProps) => (
  <Link href={href} className="w-full">
    <ItemCard {...props} />
  </Link>
)
