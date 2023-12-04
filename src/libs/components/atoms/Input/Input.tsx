import clsx from 'clsx'
import { useId, InputHTMLAttributes, forwardRef } from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, ...props }, ref) => {
    const idInput = useId()

    return (
      <label
        htmlFor={idInput}
        className={clsx(
          'relative rounded-md ring-gray-600 dark:ring-white ring-inset ring-1 p-4 focus-within:ring-2 transition-all duration-500 ease-in-out flex'
        )}
      >
        <input
          type="text"
          id={idInput}
          className="peer border-none bg-transparent__white-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-md dark:text-white w-full"
          placeholder=""
          ref={ref}
          {...props}
        />

        {label && (
          <span
            className={clsx(
              'pointer-events-none absolute start-2.5 right-2 top-0 -translate-y-1/2 bg-white dark:bg-gray-900 dark:text-white p-1.5 text-xs text-gray-600 font-bold transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:right-auto'
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
