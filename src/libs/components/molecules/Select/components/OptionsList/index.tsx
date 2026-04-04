import { memo } from 'react'
import type { SelectOptionItem } from '../../Select.types'
import clsx from 'clsx'
import { IconComponent } from '@Components/atoms'
import { useSelectTexts } from '../../Select.texts'

interface OptionsListProps {
  options: SelectOptionItem[]
  selectedValues: string[]
  multiple: boolean
  onSelect: (val: string) => void
  onFocusIndex: (idx: number) => void
}

export const OptionsList = memo(function OptionsList({
  options,
  selectedValues,
  multiple,
  onSelect,
  onFocusIndex
}: OptionsListProps) {
  const { noOptionsFound } = useSelectTexts()

  if (options.length === 0) {
    return (
      <div className="px-3 py-2 text-sm text-slate-400">{noOptionsFound}</div>
    )
  }
  // Pre-compute enabled index map once per render — O(n) instead of O(n²)
  const enabledIndexMap = new Map(
    options.filter(o => !o.disabled).map((o, i) => [o.value, i] as const)
  )
  return (
    <>
      {options.map(opt => {
        const isSelected = selectedValues.includes(opt.value)
        const enabledIndex = enabledIndexMap.get(opt.value) ?? -1
        return (
          <button // NOSONAR — WAI-ARIA custom listbox: role=option required on interactive listbox children
            key={opt.value}
            type="button"
            role="option"
            aria-selected={isSelected}
            aria-disabled={opt.disabled}
            data-option
            disabled={opt.disabled}
            onFocus={() => {
              if (!opt.disabled) onFocusIndex(enabledIndex)
            }}
            onClick={() => {
              if (!opt.disabled) onSelect(opt.value)
            }}
            className={clsx(
              'w-full flex items-center gap-2 px-3 py-2 text-sm text-left',
              'transition-colors duration-150',
              {
                'hover:bg-slate-50 cursor-pointer': !opt.disabled,
                'cursor-not-allowed opacity-50': opt.disabled,
                'bg-slate-50': isSelected && !opt.disabled
              }
            )}
          >
            {opt.content && (
              <span className="flex items-center justify-center w-5 h-5 shrink-0">
                {opt.content}
              </span>
            )}
            {!opt.content && opt.icon && (
              <IconComponent
                icon={opt.icon}
                className="w-4 h-4 shrink-0 text-slate-600"
              />
            )}
            <span className="flex-1">{opt.label}</span>
            {multiple && isSelected && (
              <IconComponent
                icon="RiCheckLine"
                className="w-4 h-4 shrink-0 text-slate-700"
              />
            )}
          </button>
        )
      })}
    </>
  )
})
