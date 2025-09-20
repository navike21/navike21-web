'use client'

import { useMenuIcon } from './menuIcon.hook'

interface IMenuIconProps {
  className?: string
}

export const MenuIcon = ({ className }: IMenuIconProps) => {
  const { topLine, middleLine, bottomLine } = useMenuIcon()

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        ref={topLine}
        x1="8"
        y1="12"
        x2="32"
        y2="12"
        stroke="black"
        strokeWidth="2"
      />
      <line
        ref={middleLine}
        x1="8"
        y1="20"
        x2="32"
        y2="20"
        stroke="black"
        strokeWidth="2"
      />
      <line
        ref={bottomLine}
        x1="8"
        y1="28"
        x2="32"
        y2="28"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  )
}
