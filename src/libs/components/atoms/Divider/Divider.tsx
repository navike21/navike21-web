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

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={clsx(containerClass, className)}
    >
      {!children ? (
        <div
          aria-hidden="true"
          className={clsx(lineClass, isHorizontal ? 'w-full' : 'h-full')}
        />
      ) : (
        <>
          <div aria-hidden="true" className={lineClass} />
          <span className={textClass}>{children}</span>
          <div aria-hidden="true" className={lineClass} />
        </>
      )}
    </div>
  )
}
