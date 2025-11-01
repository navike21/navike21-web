import clsx from 'clsx'

export interface ITitleProps {
  title: string
  subTitle?: string
  className?: string
}
export const Title = ({ title, subTitle, className }: ITitleProps) => (
  <div
    className={clsx('title-area flex flex-col gap-5 items-center', className)}
  >
    <h2
      className={clsx(
        'text-center text-3xl font-medium w-full',
        'md:w-10/12',
        'lg:text-4xl'
      )}
    >
      {title}
    </h2>
    {subTitle && (
      <p className={clsx('text-center', 'md:w-10/12  ')}>{subTitle}</p>
    )}
  </div>
)
