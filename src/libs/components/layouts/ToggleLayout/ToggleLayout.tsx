import { HelperText } from '@Components/atoms/HelperText/HelperText'
import { Label } from '@Components/atoms/Label/Label'
import { useId, type ReactNode } from 'react'

interface ToggleLayoutProps {
  children: ReactNode
  disabled?: boolean
  errorMessage?: ReactNode
  error?: boolean
  helperText?: ReactNode
  id?: string
  label?: ReactNode
}

export const ToggleLayout = ({
  children,
  disabled = false,
  error,
  errorMessage,
  helperText,
  id,
  label
}: ToggleLayoutProps) => {
  const generatedId = useId()
  const idField = id ?? generatedId
  return (
    <div className="flex items-start gap-3">
      {children}
      <div className="flex flex-col gap-0.5">
        {label && (
          <Label disabled={disabled} htmlFor={idField}>
            {label}
          </Label>
        )}
        {error && errorMessage && (
          <HelperText idField={idField} variant="error">
            {errorMessage}
          </HelperText>
        )}
        {helperText && !errorMessage && (
          <HelperText idField={idField}>{helperText}</HelperText>
        )}
      </div>
    </div>
  )
}
