import clsx from 'clsx'

export interface TitleProps {
  title: string
  subTitle?: string
  className?: string
  align?: 'center' | 'left'
}
export const Title = ({
  title,
  subTitle,
  className,
  align = 'center'
}: TitleProps) => (
  <div
    className={clsx('title-area flex flex-col gap-5', className, {
      'items-center': align === 'center',
      'items-start': align === 'left'
    })}
  >
    <h2
      className={clsx(
        'text-3xl font-medium w-full',
        'md:w-10/12',
        'lg:text-4xl',
        {
          'text-center': align === 'center',
          'text-left': align === 'left'
        }
      )}
    >
      {title}
    </h2>
    {subTitle && (
      <p
        className={clsx('md:w-10/12', {
          'text-center': align === 'center',
          'text-left': align === 'left'
        })}
      >
        {subTitle}
      </p>
    )}
  </div>
)
