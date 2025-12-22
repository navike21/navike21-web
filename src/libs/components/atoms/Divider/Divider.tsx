import clsx from 'clsx'
import { useDivider } from './divider.hooks'
import type { DividerProps } from './divider.types'

export const Divider = ({
  orientation = 'horizontal',
  children,
  className,
  ...props
}: Readonly<DividerProps>) => {
  const { isHorizontal, lineClass, containerClass, textClass } = useDivider({
    orientation,
    ...props
  })

  // Use <hr> for simple dividers without text, use <div> with proper role for dividers with text
  if (!children) {
    return (
      <hr
        aria-orientation={orientation}
        className={clsx(
          containerClass,
          className,
          isHorizontal ? 'w-full' : 'h-full'
        )}
      />
    )
  }

  return (
    <div className={clsx(containerClass, className)}>
      <hr aria-hidden="true" className={lineClass} />
      <span className={textClass}>{children}</span>
      <hr aria-hidden="true" className={lineClass} />
    </div>
  )
}
