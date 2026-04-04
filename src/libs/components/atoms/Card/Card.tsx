import clsx from 'clsx'
import { IconComponent } from '../IconComponent/IconComponent'
import Link from 'next/link'
import type { CardProps, ItemCardProps, ItemLinkCardProps } from './Card.types'

export const Card = ({ children, showLine, className }: CardProps) => (
  <div
    className={clsx(
      'bg-white transition-all duration-500 group h-full',
      'flex flex-col items-center gap-6 justify-between',
      'shadow-md shadow-gray-900/20 p-8 rounded-lg',
      'hover:shadow-xl',
      className
    )}
  >
    {children}
    {showLine && (
      <div
        className={clsx(
          'w-4/12 h-0.5 transition-all duration-500 bg-gradient-horizontal',
          'group-hover:w-7/12'
        )}
      />
    )}
  </div>
)

export const ItemCard = ({
  title,
  description,
  icon,
  className,
  ...props
}: ItemCardProps) => (
  <Card className={clsx('group aspect-auto', className)} showLine {...props}>
    <div className={clsx('flex flex-col items-center gap-5 h-full')}>
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
      {description && <p className="text-center text-sm">{description}</p>}
    </div>
  </Card>
)

export const ItemLinkCard = ({ href, ...props }: ItemLinkCardProps) => (
  <Link href={href} className="w-full">
    <ItemCard {...props} />
  </Link>
)
