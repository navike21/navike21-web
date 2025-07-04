import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ICardProps {
  className?: string
  description: string
  href?: string
  image?: StaticImageData
  title: string
}

interface ICardWrapperProps {
  href?: string
  children: ReactNode
  className?: string
}

const CardWrapper = ({ href, children, className }: ICardWrapperProps) => {
  const wrapperClassName = clsx(
    'group flex flex-col items-center relative',
    className
  )
  if (href) {
    return (
      <Link href={href} className={wrapperClassName}>
        {children}
      </Link>
    )
  }

  return <div className={className}>{children}</div>
}

export const Card = ({
  className,
  description,
  href,
  image,
  title
}: ICardProps) => (
  <CardWrapper href={href} className={className}>
    <div
      className={clsx(
        'relative h-full w-full overflow-hidden rounded-lg flex flex-col justify-end p-6 gap-4 shadow-lg bg-gray-800',
        'lg:p-7',
        'xl:p-6'
      )}
    >
      {image && (
        <>
          <Image
            src={image.src}
            alt={title}
            width={image.width}
            height={image.height}
            quality={100}
            loading="lazy"
            className={clsx(
              'absolute inset-0 w-full h-full object-cover rounded-lg z-0',
              'transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
              'group-hover:scale-110'
            )}
          />
          <div
            className={clsx(
              'absolute inset-0 z-10 ',
              'bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-950/20 opacity-60',
              'transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
              'group-hover:opacity-100'
            )}
          />
        </>
      )}
      <h3
        className={clsx('title-sm font-semibold text-white z-20 line-clamp-2')}
      >
        {title}
      </h3>

      <p
        className={clsx(
          'paragraph-xs text-white z-20 line-clamp-3 hidden',
          'transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
          'lg:-mb-16 lg:opacity-0 lg:block',
          'group-hover:-mb-0 group-hover:opacity-100'
        )}
      >
        {description}
      </p>
    </div>
    <div
      className={clsx(
        'bg-gradient-primary mask-fade-horizontal h-0.5 w-full z-20',
        'absolute bottom-0 left-0 right-0 mx-auto',
        'lg:w-0 lg:opacity-0',
        'transition-all duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
        'group-hover:w-full group-hover:opacity-100'
      )}
    />
  </CardWrapper>
)
