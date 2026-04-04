import { HelperText } from '@Components/atoms'
import type { SelectVariant } from '../../Select.types'

interface SelectFooterProps {
  idField: string
  errorMessage?: React.ReactNode
  helperText?: React.ReactNode
  variant: SelectVariant
}

export const SelectFooter = ({
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
