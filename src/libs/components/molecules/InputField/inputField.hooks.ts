import clsx from 'clsx'
import { useCallback, useId, useState } from 'react'
import type { InputFieldProps, TypeInput } from './inputField.types'

export const useInputField = ({ type = 'text' }: InputFieldProps) => {
  const ID_FIELD = useId()

  const [showPassword, setShowPassword] = useState(false)

  const TYPE_FIELD = type === 'password' && showPassword ? 'text' : type

  const handleClassSlot = useCallback(
    (type: TypeInput, position: 'left' | 'right') =>
      clsx(
        'flex items-center justify-left min-w-5 text-xs text-slate-900 font-semibold h-10',
        '[&>svg]:size-5',
        {
          'px-3': type === 'text',
          'pr-3': type !== 'text' && position === 'left',
          'pl-3 pr-3': type !== 'text' && position === 'right'
        }
      ),
    []
  )

  const handleChangeTypePassword = () => {
    setShowPassword(prev => !prev)
  }

  return {
    idField: ID_FIELD,
    showPassword,
    typeField: TYPE_FIELD,
    handleClassSlot,
    handleChangeTypePassword
  }
}
