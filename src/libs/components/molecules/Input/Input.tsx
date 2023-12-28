import { useId, forwardRef, ReactNode } from 'react'
import { TextField } from '@mui/material'
import { MEDIUM, SMALL } from '@Constants/shared'

interface IInputProps {
  label?: string | ReactNode
  disabled?: boolean
  error?: boolean
  helperText?: string
  size?: typeof SMALL | typeof MEDIUM
  defaultValue?: string
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    { disabled, label, error, helperText, size, defaultValue, ...props },
    ref
  ) => {
    const idInput = useId()

    return (
      <TextField
        disabled={disabled}
        error={error}
        helperText={error && helperText}
        id={idInput}
        label={label}
        size={size}
        inputRef={ref}
        defaultValue={defaultValue}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
