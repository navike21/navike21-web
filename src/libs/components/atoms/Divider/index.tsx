import clsx from 'clsx'
import { useDivider } from './divider.hooks'
import type { DividerProps } from './divider.types'

export const Divider = ({
  orientation = 'horizontal',
  children,
  className,
  ...props
}: Readonly<DividerProps>) => {
  const { lineClass, containerClass, textClass } = useDivider({
    orientation,
    ...props
  })

  if (!children) {
    return (
      <hr
        aria-orientation={orientation}
        className={clsx(containerClass, className)}
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
