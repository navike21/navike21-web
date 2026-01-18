import { HelperText, IconComponent, Label, Spinner } from '@Components/atoms'
import clsx from 'clsx'
import { useId, type ReactNode } from 'react'

interface InputLayoutProps {
  className?: string
  classInput?: string
  children?: ReactNode
  disabled?: boolean
  errorMessage?: string
  helperText?: ReactNode
  id?: string
  label?: string
  loading?: boolean
  variant?: 'default' | 'success' | 'error' | 'warning'
}

export const InputLayout = ({
  className,
  classInput,
  children,
  disabled = false,
  errorMessage,
  helperText,
  id,
  label,
  loading,
  variant = 'default'
}: InputLayoutProps) => {
  const generatedId = useId()
  const idField = id ?? generatedId
  return (
    <div
      className={clsx(
        'flex flex-col gap-1',
        {
          'cursor-not-allowed': disabled,
          'pointer-events-none': loading
        },
        className
      )}
    >
      {label && (
        <Label disabled={disabled} htmlFor={idField}>
          {label}
        </Label>
      )}
      <div
        className={clsx(
          'content-input',
          'flex items-center w-full rounded-sm h-10',
          'transition-all ease-in-out duration-300',
          'focus-within:ring-2',
          {
            'bg-slate-400/50': disabled,
            'ring-1 ring-inset': !disabled,
            'ring-slate-300': variant === 'default' && !disabled,
            'ring-emerald-500': variant === 'success' && !disabled,
            'ring-red-500': variant === 'error' && !disabled,
            'ring-yellow-500': variant === 'warning' && !disabled
          },
          classInput
        )}
      >
        {children}
        {loading && (
          <div className="mr-3 min-w-5">
            <Spinner variant="gradient" size="small" />
          </div>
        )}
        {variant === 'success' && !loading && (
          <IconComponent
            icon="RiCheckboxCircleFill"
            className="text-emerald-500 mr-3 size-5"
          />
        )}
        {variant === 'error' && !loading && (
          <IconComponent
            icon="RiErrorWarningFill"
            className="text-red-500 mr-3 size-5"
          />
        )}
        {variant === 'warning' && !loading && (
          <IconComponent
            icon="RiErrorWarningFill"
            className="text-yellow-500 mr-3 size-5"
          />
        )}
      </div>
      {errorMessage && variant === 'error' && (
        <HelperText idField={idField} variant="error">
          {errorMessage}
        </HelperText>
      )}
      {helperText && variant !== 'error' && (
        <HelperText idField={idField} variant={variant}>
          {helperText}
        </HelperText>
      )}
    </div>
  )
}
