'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CardGrid, TCardItem } from './CardGrid'
import Image from 'next/image'
import clsx from 'clsx'
import { Badge } from '@Components/atoms/Badge/Badge'
import { Title } from '../Title'

export interface IMotionCardGridProps {
  data: TCardItem[]
}

export default function MotionCardGrid({
  data
}: Readonly<IMotionCardGridProps>) {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selectedItem = data.find(item => item.id === selectedId) as TCardItem

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [selectedId])

  return (
    <div className="mx-auto w-full">
      <CardGrid items={data} onCardClick={setSelectedId} />

      <AnimatePresence>
        {selectedId && selectedItem && (
          <div className="fixed inset-0 flex items-start justify-center z-50 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="fixed inset-0 bg-slate-950/80 z-40"
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              layoutId={`card-container-${selectedId}`}
              className={clsx(
                'bg-slate-900 rounded-2xl overflow-hidden w-[90%] max-w-[1200px] pointer-events-auto relative z-50 my-[5vw]',
                'md:w-[70%]',
                'lg:my-[2%] lg:w-[80%]'
              )}
            >
              <motion.div
                layoutId={`card-image-container-${selectedId}`}
                className={clsx(
                  'w-full h-[200px] overflow-hidden',
                  'md:h-[300px]',
                  'lg:h-[400px]'
                )}
              >
                <Image
                  className="w-full h-full object-cover object-center"
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  width={1200}
                  height={400}
                  quality={100}
                />
              </motion.div>
              <div
                className={clsx('flex flex-col gap-4 p-9', 'md:gap-5 md:p-12')}
              >
                <motion.div
                  layoutId={`title-container-${selectedId}`}
                  className={clsx(
                    'flex flex-col gap-4 items-start',
                    'md:items-start md:gap-3'
                  )}
                >
                  <motion.div
                    layoutId={`badge-container-${selectedId}`}
                    className={clsx(
                      'flex flex-row gap-2 w-full flex-nowrap items-center justify-center',
                      'md:justify-start'
                    )}
                  >
                    {selectedItem.category.map(cat => (
                      <Badge
                        key={cat.title}
                        text={cat.title}
                        color={cat.color}
                        className="w-fit whitespace-nowrap"
                      />
                    ))}
                  </motion.div>
                  <Title
                    title={selectedItem.title}
                    className={clsx('md:w-9/12')}
                  />
                </motion.div>
                <motion.div
                  className={clsx('leading-relaxed')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {selectedItem.description}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
