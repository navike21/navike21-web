import {
  useCallback,
  useEffect,
  useId,
  useRef,
  type ForwardedRef,
  type RefObject
} from 'react'
import type { CheckboxProps } from './Checkbox.types'

export const useCheckbox = (
  { indeterminate, ...props }: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const idField = useId()
  const internalRef = useRef<HTMLInputElement>(null)
  const resolvedRef = (ref ?? internalRef) as RefObject<HTMLInputElement>

  const handleSetIntermediate = useCallback(
    (indeterminate: boolean) => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate
      }
    },
    [resolvedRef]
  )

  useEffect(() => {
    handleSetIntermediate(indeterminate ?? false)
  }, [indeterminate, handleSetIntermediate])

  return {
    idField,
    resolvedRef,
    inputPropsWithoutIndeterminate: {
      ...props,
      indeterminate: undefined
    }
  }
}
