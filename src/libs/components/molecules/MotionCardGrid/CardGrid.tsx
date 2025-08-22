'use client'

import { motion } from 'motion/react'
import clsx from 'clsx'
import { Badge, TBadgeColor } from '@Components/atoms/Badge/Badge'
import Image, { StaticImageData } from 'next/image'

export type TCardItem = {
  id: string
  category: {
    title: string
    color: TBadgeColor
  }[]
  title: string
  image: string
  description: string
  gallery: StaticImageData[]
}

type TCardGridProps = {
  items: TCardItem[]
  onCardClick: (id: string) => void
}

export function CardGrid({ items, onCardClick }: Readonly<TCardGridProps>) {
  return (
    <ul
      className={clsx(
        'grid grid-cols-1 gap-6',
        'md:grid-cols-2 lg:grid-cols-3'
      )}
    >
      {items.map(({ id, title, category, image }, index) => (
        <li
          key={id}
          className={clsx(
            'relative h-[300px] w-full max-w-full p-0',
            'md:h-[400px]',
            {
              'md:col-span-2': index % 4 === 0 || index % 4 === 3,
              'md:col-span-1': !(index % 4 === 0 || index % 4 === 3)
            }
          )}
        >
          <div className="w-full h-full relative block pointer-events-none">
            <motion.div
              layoutId={`card-container-${id}`}
              className="pointer-events-auto relative rounded-2xl bg-neutral-900 overflow-hidden w-full h-full m-auto"
            >
              <motion.div
                layoutId={`card-image-container-${id}`}
                className={clsx(
                  'absolute top-0 overflow-hidden h-[300px] w-[150vw]',
                  'md:h-[400px] md:w-[1000px]',
                  'bg-slate-950',
                  {
                    'left-0': index % 4 === 0 || index % 4 === 3,
                    '-left-5/12': !(index % 4 === 0 || index % 4 === 3)
                  }
                )}
              >
                <Image
                  className="w-full h-full object-cover object-top"
                  src={image}
                  alt={title}
                  width={1400}
                  height={400}
                  quality={100}
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/50 to-slate-950/0" />

              <motion.div
                layoutId={`title-container-${id}`}
                className="absolute top-4 left-4 right-4"
              >
                <motion.div
                  layoutId={`badge-container-${id}`}
                  className="flex flex-row gap-2 w-full flex-wrap"
                >
                  {category.map(cat => (
                    <Badge
                      key={cat.title}
                      text={cat.title}
                      color={cat.color}
                      className="w-fit whitespace-nowrap"
                    />
                  ))}
                </motion.div>
                <h2 className="mt-2 title-md max-w-[300px] text-white">
                  {title}
                </h2>
              </motion.div>
            </motion.div>
          </div>

          <button
            onClick={() => onCardClick(id)}
            className="absolute inset-0 cursor-pointer"
          />
        </li>
      ))}
    </ul>
  )
}
