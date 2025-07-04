import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'

interface ICardProps {
  className?: string
  description: string
  image?: StaticImageData
  isAspectRatio?: boolean
  title: string
}

export const Card = ({
  className,
  description,
  image,
  isAspectRatio,
  title
}: ICardProps) => (
  <div className="group flex flex-col items-center">
    <div
      className={clsx(
        'relative overflow-hidden rounded-lg flex flex-col justify-end p-6 gap-4 shadow-lg bg-gray-800',
        'lg:p-7',
        'xl:p-6',
        className,
        {
          'aspect-2/3': isAspectRatio
        }
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
              'bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-950/20 opacity-60',
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
          'paragraph-xs text-white z-20 line-clamp-3 opacity-0',
          'transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
          '-mb-16',
          'group-hover:-mb-0 group-hover:opacity-100'
        )}
      >
        {description}
      </p>
    </div>
    <div
      className={clsx(
        'bg-gradient-primary mask-fade-horizontal h-0.5 w-0.5 z-20 opacity-0',
        'transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
        'group-hover:w-full group-hover:opacity-100'
      )}
    />
  </div>
)
