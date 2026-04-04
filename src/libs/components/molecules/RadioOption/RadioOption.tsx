'use client'

import { ToggleLayout } from '@Components/layouts/ToggleLayout/ToggleLayout'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { RadioOptionProps } from './RadioOption.types'
import { useRadioOption } from './RadioOption.hooks'

export const RadioOption = forwardRef<HTMLInputElement, RadioOptionProps>(
  (
    {
      label,
      disabled = false,
      helperText,
      error = false,
      errorMessage,
      ...props
    },
    ref
  ) => {
    const { idField, resolvedRef } = useRadioOption(props, ref)

    return (
      <ToggleLayout
        label={label}
        disabled={disabled}
        helperText={helperText}
        error={error}
        errorMessage={errorMessage}
        id={idField}
      >
        <button
          className={clsx(
            'group flex relative w-5 h-5 items-center justify-center border-none outline-none',
            'transition-all ease-in-out duration-300',
            'ring-1 rounded-full ring-inset',
            {
              'cursor-not-allowed ring-slate-400 bg-slate-200': disabled,
              'ring-slate-300 bg-white': !disabled,
              'has-[input:checked]:ring-slate-700': !disabled && !error,
              'ring-red-500 has-[input:checked]:ring-red-500': error
            }
          )}
          disabled={disabled}
          type="button"
        >
          <div
            className={clsx(
              'w-2.5 h-2.5 rounded-full',
              'transition-all duration-300 ease-in-out',
              'opacity-0',
              'group-has-[input:checked]:opacity-100',
              {
                'bg-slate-700': !disabled && !error,
                'bg-slate-300': disabled,
                'bg-red-500': error
              }
            )}
          />
          <input
            ref={resolvedRef}
            type="radio"
            id={idField}
            disabled={disabled}
            className={clsx('absolute inset-0 opacity-0', {
              'cursor-not-allowed': disabled,
              'cursor-pointer': !disabled
            })}
            {...props}
          />
        </button>
      </ToggleLayout>
    )
  }
)

RadioOption.displayName = 'RadioOption'
