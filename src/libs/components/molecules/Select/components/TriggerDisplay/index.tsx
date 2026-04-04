import { IconComponent } from '@Components/atoms'
import clsx from 'clsx'
import type { SelectOptionItem } from '../../Select.types'

interface TriggerDisplayProps {
  singleOption?: SelectOptionItem
  singleLabel: string
  placeholder?: string
}

export const TriggerDisplay = ({
  singleOption,
  singleLabel,
  placeholder
}: TriggerDisplayProps) => (
  <span className="flex items-center gap-1.5">
    {singleOption?.content && (
      <span className="flex items-center justify-center w-4 h-4 shrink-0">
        {singleOption.content}
      </span>
    )}
    {!singleOption?.content && singleOption?.icon && (
      <IconComponent
        icon={singleOption.icon}
        className="w-4 h-4 shrink-0 text-slate-600"
      />
    )}
    <span
      className={clsx('text-sm', {
        'text-slate-900': singleLabel,
        'text-slate-400': !singleLabel
      })}
    >
      {singleLabel || placeholder || ''}
    </span>
  </span>
)
