import { IconComponent } from '@Components/atoms'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { InputFieldProps } from './InputField.types'
import { useInputField } from './InputField.hooks'
import { InputLayout } from '@Components/layouts/InputLayout'

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      classInput = '',
      className = '',
      disabled = false,
      errorMessage = '',
      helperText,
      label = '',
      leftSlot,
      loading = false,
      rightSlot,
      type = 'text',
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const {
      idField,
      showPassword,
      typeField,
      handleClassSlot,
      handleChangeTypePassword
    } = useInputField({ type, ...props })

    return (
      <InputLayout
        classInput={classInput}
        className={className}
        disabled={disabled}
        helperText={helperText}
        id={idField}
        label={label}
        loading={loading}
        variant={variant}
        errorMessage={errorMessage}
      >
        {type === 'password' && (
          <div className={clsx('flex items-center justify-center min-w-10')}>
            <IconComponent
              icon="RiLockPasswordFill"
              className="text-slate-700 size-5"
            />
          </div>
        )}
        {type === 'email' && (
          <div className={clsx('flex items-center justify-center min-w-10')}>
            <IconComponent
              icon="RiMailFill"
              className="text-slate-700 size-5"
            />
          </div>
        )}
        {leftSlot && (
          <div className={handleClassSlot(type, 'left')}>{leftSlot}</div>
        )}
        <input
          id={idField}
          ref={ref}
          {...props}
          className={clsx(
            'font-normal border-none h-10 text-sm border-0 bg-transparent w-full',
            'transition-all ease-in-out duration-300',
            'placeholder:text-slate-400',
            'focus:outline-none focus:ring-0 focus:border-transparent',
            {
              'py-2 px-4': !leftSlot && !rightSlot && type === 'text',
              'py-2 pr-4': !leftSlot && !rightSlot && type === 'email',
              'py-2 pr-1': !leftSlot && !rightSlot && type === 'password',
              'pr-4': leftSlot && !rightSlot && type !== 'password',
              'pr-1': leftSlot && !rightSlot && type === 'password',
              'pl-4': rightSlot && !leftSlot,
              'text-slate-500 cursor-not-allowed': disabled,
              'text-slate-900': !disabled,
              'pointer-events-none': loading
            }
          )}
          disabled={disabled || loading}
          type={typeField}
          aria-describedby={helperText ? `${idField}-helper` : undefined}
        />
        {type === 'password' && (
          <button
            type="button"
            className={clsx(
              'flex items-center justify-center min-w-10 h-10 outline-none',
              'transition-all ease-in-out duration-300',
              'active:scale-90',
              {
                'hover:bg-slate-200/50 cursor-pointer': !disabled,
                'cursor-not-allowed': disabled
              }
            )}
            disabled={disabled}
            onClick={handleChangeTypePassword}
          >
            <IconComponent
              icon={showPassword ? 'RiEyeOffFill' : 'RiEyeFill'}
              className="text-slate-500 size-4"
            />
          </button>
        )}
        {rightSlot && type !== 'password' && (
          <div className={handleClassSlot(type, 'right')}>{rightSlot}</div>
        )}
      </InputLayout>
    )
  }
)

InputField.displayName = 'InputField'
