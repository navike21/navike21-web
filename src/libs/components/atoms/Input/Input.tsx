import clsx from 'clsx'
import { useId, InputHTMLAttributes, forwardRef } from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  disabled?: boolean
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ disabled, label, ...props }, ref) => {
    const idInput = useId()

    return (
      <label
        htmlFor={idInput}
        className={clsx(
          'relative rounded-lg  dark:ring-white ring-inset ring-1 pt-6 pb-3 px-4 transition-all duration-400 ease-in-out flex',
          {
            'bg-gray-100 ring-gray-400 dark:bg-transparent__gray-8 cursor-not-allowed dark:ring-gray-500':
              disabled
          },
          {
            'ring-gray-600': !disabled
          }
        )}
      >
        <input
          disabled={disabled}
          type="text"
          id={idInput}
          className={clsx(
            'outline-none peer border-none bg-transparent__white-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-md dark:text-white w-full disabled:bg-transparent__white-0 disabled:cursor-not-allowed disabled:dark:text-gray-500 disabled:text-gray-400 transition-all duration-400'
          )}
          placeholder=""
          ref={ref}
          {...props}
        />

        {label && (
          <span
            className={clsx(
              'pointer-events-none absolute start-2.5 top-4 -translate-y-1/2  px-1.5 text-xs  dark:text-white peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-4 peer-focus:text-xs transition-all duration-400',
              {
                'cursor-not-allowed text-gray-400 dark:text-gray-500 ': disabled
              },
              {
                'text-gray-700': !disabled
              }
            )}
          >
            {label}
          </span>
        )}
      </label>
    )
  }
)

Input.displayName = 'Input'
