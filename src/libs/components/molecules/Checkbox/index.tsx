'use client'

import { IconComponent } from '@Components/atoms'
import { ToggleLayout } from '@Components/layouts/ToggleLayout'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { CheckboxProps } from './Checkbox.types'
import { useCheckbox } from './Checkbox.hooks'

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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
    const { idField, resolvedRef, inputPropsWithoutIndeterminate } =
      useCheckbox(props, ref)

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
            'group flex relative w-5 h-5 items-center justify-center p-px border-none outline-none',
            'transition-all ease-in-out duration-300',
            'ring-1 rounded-sm ring-inset',
            'has-[input:checked]:ring-10',
            'has-[input:indeterminate]:ring-10',
            {
              'cursor-not-allowed ring-slate-400 bg-slate-200': disabled,
              'ring-slate-30 bg-white': !disabled,
              'has-[input:checked]:ring-slate-700 has-[input:indeterminate]:ring-slate-700':
                !disabled && !error,
              'ring-red-500 has-[input:checked]:ring-red-500 has-[input:indeterminate]:ring-red-500':
                error
            }
          )}
          disabled={disabled}
          type="button"
        >
          <IconComponent
            icon="RiCheckFill"
            className={clsx(
              'text-white transition-all duration-300 ease-in-out',
              'absolute w-full h-full inset-0 m-auto',
              'opacity-0',
              'group-has-[input:checked]:opacity-100',
              'group-has-[input:indeterminate]:opacity-0'
            )}
          />

          <IconComponent
            icon="RiSubtractFill"
            className={clsx(
              'text-white transition-all duration-300 ease-in-out',
              'absolute w-full h-full inset-0 m-auto',
              'opacity-0',
              'group-has-[input:indeterminate]:opacity-100',
              'group-has-[input:checked]:opacity-0'
            )}
          />

          <input
            ref={resolvedRef}
            type="checkbox"
            id={idField}
            disabled={disabled}
            className={clsx('absolute inset-0 opacity-0', {
              'cursor-not-allowed': disabled,
              'cursor-pointer': !disabled
            })}
            {...inputPropsWithoutIndeterminate}
          />
        </button>
      </ToggleLayout>
    )
  }
)

Checkbox.displayName = 'Checkbox'
