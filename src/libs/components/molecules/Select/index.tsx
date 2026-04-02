'use client'

import { Chip } from '@Components/atoms/Chip'
import { HelperText, IconComponent, Label, Spinner } from '@Components/atoms'
import clsx from 'clsx'
import { forwardRef, memo, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { IconName } from '@Types/icons'
import type {
  SelectOptionItem,
  SelectProps,
  SelectVariant
} from './Select.types'
import { useSelectHook } from './Select.hooks'

const VARIANT_ICON_MAP: Partial<
  Record<SelectVariant, { icon: IconName; className: string }>
> = {
  success: {
    icon: 'RiCheckboxCircleFill',
    className: 'text-emerald-500 mr-3 size-5'
  },
  error: {
    icon: 'RiErrorWarningFill',
    className: 'text-red-500 mr-3 size-5'
  },
  warning: {
    icon: 'RiErrorWarningFill',
    className: 'text-yellow-500 mr-3 size-5'
  }
}

interface TriggerDisplayProps {
  singleOption?: SelectOptionItem
  singleLabel: string
  placeholder?: string
}

const TriggerDisplay = ({
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

interface SelectedChipsProps {
  values: string[]
  options: SelectOptionItem[]
  disabled: boolean
  onDeselect: (val: string) => void
}

const SelectedChips = memo(function SelectedChips({
  values,
  options,
  disabled,
  onDeselect
}: SelectedChipsProps) {
  return (
    <>
      {values.map(val => {
        const option = options.find(o => o.value === val)
        if (!option) return null
        return (
          <Chip
            key={val}
            size="xsmall"
            {...(option.icon !== undefined && { icon: option.icon })}
            {...(option.content !== undefined && {
              iconContent: option.content
            })}
            deleteable={!disabled}
            deleteButtonProps={{
              onClick: e => {
                e.stopPropagation()
                onDeselect(val)
              },
              'aria-label': `Remove ${option.label}`
            }}
          >
            {option.label}
          </Chip>
        )
      })}
    </>
  )
})

interface OptionsListProps {
  options: SelectOptionItem[]
  selectedValues: string[]
  multiple: boolean
  onSelect: (val: string) => void
  onFocusIndex: (idx: number) => void
}

const OptionsList = memo(function OptionsList({
  options,
  selectedValues,
  multiple,
  onSelect,
  onFocusIndex
}: OptionsListProps) {
  if (options.length === 0) {
    return (
      <div className="px-3 py-2 text-sm text-slate-400">No options found</div>
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

// Pure helper — keeps input-area className computation out of the forwardRef scope
function getInputAreaClass({
  disabled,
  isOpen,
  variant,
  isMultipleWithChips,
  classInput
}: {
  disabled: boolean
  isOpen: boolean
  variant: SelectVariant
  isMultipleWithChips: boolean
  classInput?: string
}): string {
  return clsx(
    'flex items-center w-full rounded-sm',
    'transition-all ease-in-out duration-300',
    'ring-inset',
    isOpen ? 'ring-2' : 'ring-1',
    { 'bg-slate-400/50': disabled, 'bg-white': !disabled },
    {
      'ring-slate-300': variant === 'default' && !disabled,
      'ring-emerald-500': variant === 'success' && !disabled,
      'ring-red-500': variant === 'error' && !disabled,
      'ring-yellow-500': variant === 'warning' && !disabled
    },
    isMultipleWithChips ? 'h-auto min-h-10' : 'h-10',
    classInput
  )
}

interface SelectInputAreaProps {
  triggerRef: React.RefObject<HTMLDivElement | null>
  disabled: boolean
  loading: boolean
  isOpen: boolean
  variant: SelectVariant
  isMultipleWithChips: boolean
  classInput?: string
  leftSlot?: React.ReactNode
  rightSlot?: React.ReactNode
  triggerTabIndex: number
  onTriggerClick: (() => void) | undefined
  handleInnerKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void
  selectedValues: string[]
  options: SelectOptionItem[]
  handleOptionDeselect: (val: string) => void
  singleLabel: string
  singleOption?: SelectOptionItem
  placeholder?: string
  multiple: boolean
  variantIconDef?: { icon: IconName; className: string }
  idField: string
  dropdownRef: React.RefObject<HTMLDivElement | null>
  dropdownStyle: SelectDropdownPortalProps['dropdownStyle']
  search: boolean
  searchInputRef: React.RefObject<HTMLInputElement | null>
  searchQuery: string
  setSearchQuery: (q: string) => void
  filteredOptions: SelectOptionItem[]
  handleOptionSelect: (val: string) => void
  setFocusedOptionIndex: (i: number) => void
  mounted: boolean
}

function SelectInputArea({
  triggerRef,
  disabled,
  loading,
  isOpen,
  variant,
  isMultipleWithChips,
  classInput,
  leftSlot,
  rightSlot,
  triggerTabIndex,
  onTriggerClick,
  handleInnerKeyDown,
  selectedValues,
  options,
  handleOptionDeselect,
  singleLabel,
  singleOption,
  placeholder,
  multiple,
  variantIconDef,
  idField,
  dropdownRef,
  dropdownStyle,
  search,
  searchInputRef,
  searchQuery,
  setSearchQuery,
  filteredOptions,
  handleOptionSelect,
  setFocusedOptionIndex,
  mounted
}: Readonly<SelectInputAreaProps>) {
  return (
    <div ref={triggerRef} className="relative">
      {/* Custom input area */}
      <div
        className={getInputAreaClass({
          disabled,
          isOpen,
          variant,
          isMultipleWithChips,
          ...(classInput !== undefined && { classInput })
        })}
      >
        {leftSlot && (
          <div className="flex items-center justify-center min-w-10 h-10 shrink-0">
            {leftSlot}
          </div>
        )}
        {/* Trigger area — combobox role is required by WAI-ARIA custom select pattern */}
        <div // NOSONAR — WAI-ARIA custom combobox: role=combobox required on trigger element
          role="combobox"
          tabIndex={triggerTabIndex}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${idField}-listbox`}
          onClick={onTriggerClick}
          onKeyDown={handleInnerKeyDown}
          className={clsx(
            'flex-1 flex flex-wrap items-center gap-1 min-h-10 py-1.5 px-3',
            {
              'cursor-pointer': !disabled && !loading,
              'cursor-not-allowed': disabled
            }
          )}
        >
          {multiple && (
            <SelectedChips
              values={selectedValues}
              options={options}
              disabled={disabled}
              onDeselect={handleOptionDeselect}
            />
          )}

          {(!multiple || selectedValues.length === 0) && (
            <TriggerDisplay
              singleLabel={singleLabel}
              {...(singleOption !== undefined && { singleOption })}
              {...(placeholder !== undefined && { placeholder })}
            />
          )}
        </div>

        {/* Caret button */}
        <button
          type="button"
          onClick={onTriggerClick}
          disabled={disabled}
          className={clsx(
            'flex items-center justify-center min-w-10 h-10 outline-none shrink-0',
            'transition-all ease-in-out duration-300',
            {
              'cursor-pointer': !disabled && !loading,
              'cursor-not-allowed': disabled
            }
          )}
          aria-label={isOpen ? 'Close options' : 'Open options'}
        >
          <IconComponent
            icon={isOpen ? 'RiArrowUpSLine' : 'RiArrowDownSLine'}
            className="size-5 text-slate-700"
          />
        </button>

        {rightSlot && (
          <div className="flex items-center justify-center min-w-10 h-10 shrink-0">
            {rightSlot}
          </div>
        )}

        {/* Loading / variant icons */}
        {loading && (
          <div className="mr-3 min-w-5">
            <Spinner variant="gradient" size="small" />
          </div>
        )}
        {variantIconDef && (
          <IconComponent
            icon={variantIconDef.icon}
            className={variantIconDef.className}
          />
        )}
      </div>

      {/* Dropdown portal — escapes overflow/clip ancestors */}
      {isOpen && mounted && (
        <SelectDropdownPortal
          dropdownRef={dropdownRef}
          idField={idField}
          multiple={multiple}
          dropdownStyle={dropdownStyle}
          search={search}
          searchInputRef={searchInputRef}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredOptions={filteredOptions}
          selectedValues={selectedValues}
          handleOptionSelect={handleOptionSelect}
          setFocusedOptionIndex={setFocusedOptionIndex}
        />
      )}
    </div>
  )
}

interface SelectDropdownPortalProps {
  dropdownRef: React.RefObject<HTMLDivElement | null>
  idField: string
  multiple: boolean
  dropdownStyle: {
    top: number
    bottom: number
    left: number
    width: number
    openAbove: boolean
  }
  search: boolean
  searchInputRef: React.RefObject<HTMLInputElement | null>
  searchQuery: string
  setSearchQuery: (q: string) => void
  filteredOptions: SelectOptionItem[]
  selectedValues: string[]
  handleOptionSelect: (v: string) => void
  setFocusedOptionIndex: (i: number) => void
}

const SelectDropdownPortal = ({
  dropdownRef,
  idField,
  multiple,
  dropdownStyle,
  search,
  searchInputRef,
  searchQuery,
  setSearchQuery,
  filteredOptions,
  selectedValues,
  handleOptionSelect,
  setFocusedOptionIndex
}: SelectDropdownPortalProps) =>
  createPortal(
    <div // NOSONAR — WAI-ARIA custom combobox: role=listbox required on dropdown container
      ref={dropdownRef}
      id={`${idField}-listbox`}
      role="listbox"
      aria-multiselectable={multiple}
      data-position={dropdownStyle.openAbove ? 'top' : 'bottom'}
      style={{
        position: 'fixed',
        ...(dropdownStyle.openAbove
          ? { bottom: dropdownStyle.bottom }
          : { top: dropdownStyle.top }),
        left: dropdownStyle.left,
        width: dropdownStyle.width
      }}
      className="z-9999 bg-white rounded-sm shadow-lg ring-1 ring-slate-200 max-h-60 overflow-y-auto"
    >
      {search && (
        <div className="p-2 border-b border-slate-100">
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Buscar..."
            aria-label="Search options"
            className="w-full h-8 px-3 text-sm bg-slate-50 rounded-sm border border-slate-200 outline-none focus:ring-1 focus:ring-slate-400 placeholder:text-slate-400"
          />
        </div>
      )}
      <OptionsList
        options={filteredOptions}
        selectedValues={selectedValues}
        multiple={multiple}
        onSelect={handleOptionSelect}
        onFocusIndex={setFocusedOptionIndex}
      />
    </div>,
    document.body
  )

interface SelectFooterProps {
  idField: string
  errorMessage?: React.ReactNode
  helperText?: React.ReactNode
  variant: SelectVariant
}

const SelectFooter = ({
  idField,
  errorMessage,
  helperText,
  variant
}: SelectFooterProps) => (
  <>
    {errorMessage && variant === 'error' && (
      <HelperText
        idField={idField}
        variant="error"
        className="absolute left-0 -bottom-5"
      >
        {errorMessage}
      </HelperText>
    )}
    {helperText && variant !== 'error' && (
      <HelperText idField={idField}>{helperText}</HelperText>
    )}
  </>
)

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      classInput,
      label,
      helperText,
      errorMessage,
      variant = 'default',
      loading = false,
      disabled = false,
      options,
      multiple = false,
      search = false,
      placeholder,
      leftSlot,
      rightSlot,
      id,
      defaultValue,
      value,
      ...rest
    },
    ref
  ) => {
    const {
      idField,
      isOpen,
      toggleOpen,
      searchQuery,
      setSearchQuery,
      filteredOptions,
      selectedValues,
      isMultipleWithChips,
      singleOption,
      singleLabel,
      handleOptionSelect,
      handleOptionDeselect,
      handleContainerKeyDown,
      handleInnerKeyDown,
      handleContainerBlur,
      containerRef,
      triggerRef,
      dropdownStyle,
      setRef,
      dropdownRef,
      searchInputRef,
      setFocusedOptionIndex
    } = useSelectHook(
      {
        options,
        multiple,
        search,
        disabled,
        ...(id !== undefined && { id }),
        ...(defaultValue !== undefined && { defaultValue }),
        ...(value !== undefined && { value })
      },
      ref
    )

    const variantIconDef = loading ? undefined : VARIANT_ICON_MAP[variant]
    const onTriggerClick = disabled || loading ? undefined : toggleOpen
    const triggerTabIndex = disabled ? -1 : 0

    // SSR-safe portal mount flag — prevents hydration mismatch in Next.js App Router
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    return (
      <fieldset // NOSONAR — composite widget container legitimately captures keyboard/blur events
        ref={containerRef}
        tabIndex={-1}
        className={clsx(
          'relative flex flex-col gap-1 border-0 p-0 m-0 min-w-0',
          { 'cursor-not-allowed': disabled, 'pointer-events-none': loading },
          className
        )}
        onKeyDown={handleContainerKeyDown}
        onBlur={handleContainerBlur}
      >
        {label && (
          <Label htmlFor={idField} disabled={disabled}>
            {label}
          </Label>
        )}

        <SelectInputArea
          triggerRef={triggerRef}
          disabled={disabled}
          loading={loading}
          isOpen={isOpen}
          variant={variant}
          isMultipleWithChips={isMultipleWithChips}
          {...(classInput !== undefined && { classInput })}
          {...(leftSlot !== undefined && { leftSlot })}
          {...(rightSlot !== undefined && { rightSlot })}
          triggerTabIndex={triggerTabIndex}
          onTriggerClick={onTriggerClick}
          handleInnerKeyDown={handleInnerKeyDown}
          selectedValues={selectedValues}
          options={options}
          handleOptionDeselect={handleOptionDeselect}
          singleLabel={singleLabel}
          {...(singleOption !== undefined && { singleOption })}
          {...(placeholder !== undefined && { placeholder })}
          multiple={multiple}
          {...(variantIconDef !== undefined && { variantIconDef })}
          idField={idField}
          dropdownRef={dropdownRef}
          dropdownStyle={dropdownStyle}
          search={search}
          searchInputRef={searchInputRef}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredOptions={filteredOptions}
          handleOptionSelect={handleOptionSelect}
          setFocusedOptionIndex={setFocusedOptionIndex}
          mounted={mounted}
        />

        {/* Native select — hidden, for RHF / form submission */}
        <select
          ref={setRef}
          id={idField}
          multiple={multiple}
          className="sr-only"
          aria-hidden="true"
          tabIndex={-1}
          defaultValue={defaultValue}
          {...rest}
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>

        <SelectFooter
          idField={idField}
          variant={variant}
          {...(errorMessage !== undefined && { errorMessage })}
          {...(helperText !== undefined && { helperText })}
        />
      </fieldset>
    )
  }
)

Select.displayName = 'Select'
