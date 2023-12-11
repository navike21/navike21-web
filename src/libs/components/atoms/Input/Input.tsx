import clsx from 'clsx'
import { useId, InputHTMLAttributes, forwardRef, ReactNode } from 'react'
import { Icon } from '../Icon'
import { IIconProps } from '@Types/shared'
import { MEDIUM } from '@Constants/shared'

type TIcon = Omit<IIconProps, 'className' | 'size' | 'color'>

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactNode
  disabled?: boolean
  iconLeft?: TIcon
  rightComponent?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ disabled, label, iconLeft, ...props }, ref) => {
    const idInput = useId()

    const { iconName, library } = (iconLeft as TIcon) ?? {}

    return (
      <label
        htmlFor={idInput}
        className={clsx(
          'ring-gray-600 h-[3.75rem] relative rounded-lg  dark:ring-white ring-inset ring-1 px-4 transition-all duration-400 ease-in-out flex items-center gap-2',
          {
            'bg-gray-200 opacity-50 dark:bg-transparent__gray-8 cursor-not-allowed':
              disabled
          }
        )}
      >
        {iconLeft && (
          <Icon
            color="gray_700"
            size={MEDIUM}
            library={library}
            iconName={iconName}
          />
        )}
        <input
          disabled={disabled}
          type="text"
          id={idInput}
          className={clsx(
            'outline-none peer border-none bg-transparent__white-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-md dark:text-white w-full disabled:cursor-not-allowed transition-all duration-400',
            {
              'translate-y-1.5': label
            }
          )}
          placeholder=""
          ref={ref}
          {...props}
        />

        {label && (
          <div
            className={clsx(
              'pointer-events-none absolute start-2.5 top-4 -translate-y-1/2 text-xs text-gray-700 dark:text-white peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-4 peer-focus:text-xs transition-all duration-400 pl-1.5',
              {
                'cursor-not-allowed ': disabled
              },
              {
                'pl-9': iconLeft
              }
            )}
          >
            {label}
          </div>
        )}
      </label>
    )
  }
)

Input.displayName = 'Input'
