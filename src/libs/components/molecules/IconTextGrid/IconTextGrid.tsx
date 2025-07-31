import { IconText, IIconTextProps } from '@Components/atoms'
import clsx from 'clsx'

export interface IIconTextGridProps {
  items: IIconTextProps[]
}

export const IconTextGrid = ({ items }: IIconTextGridProps) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-9 pt-10',
        'md:grid-cols-2',
        'lg:grid-cols-3'
      )}
    >
      {items.map(({ icon: Icon, title, description }) => (
        <IconText
          key={title}
          icon={Icon}
          title={title}
          description={description}
        />
      ))}
    </div>
  )
}
