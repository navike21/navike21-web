import clsx from 'clsx'
import React, { Dispatch, SetStateAction } from 'react'

interface IHamburgerProps {
  pressed: boolean
  setPressed: Dispatch<SetStateAction<boolean>>
}

export const Hamburger = ({ pressed, setPressed }: IHamburgerProps) => (
  <button
    className={clsx(
      'group flex w-10 h-10 text-slate-900 text-center items-center justify-center rounded transition',
      'dark:text-slate-50'
    )}
    aria-pressed={pressed}
    onClick={() => setPressed(!pressed)}
  >
    <svg
      className="w-7 h-7 fill-current pointer-events-none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
        y="7"
        width="9"
        height="2"
        rx="1"
      />
      <rect
        className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45"
        y="7"
        width="16"
        height="2"
        rx="1"
      />
      <rect
        className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg]"
        y="7"
        width="9"
        height="2"
        rx="1"
      />
    </svg>
  </button>
)
