'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CardGrid, TCardItem } from './CardGrid'
import Image from 'next/image'
import clsx from 'clsx'
import { Badge } from '@Components/atoms/Badge/Badge'
import { uuidV7 } from '@Utils/generateKeys'

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
          <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="fixed inset-0 bg-slate-900/70 z-40 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            />

            <motion.div
              layoutId={`card-container-${selectedId}`}
              className={clsx(
                'overflow-y-auto w-[90%] max-w-[1200px] pointer-events-auto relative z-50 h-[85dvh] rounded-xl',
                'md:w-[90%]',
                'lg:w-[80%]'
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
                className={clsx(
                  'flex flex-col gap-4 px-9 bg-slate-900 relative',
                  'md:px-12 md:pb-12'
                )}
              >
                <div
                  className={clsx(
                    'flex flex-col gap-4 items-start sticky -top-px z-30 w-[101%] py-8 -ml-px -mr-px',
                    'bg-slate-900',
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
                  <motion.div
                    layoutId={`title-container-${selectedId}`}
                    className="w-full"
                  >
                    <h2 className={clsx('title-sm', 'md:w-10/12 md:title-md')}>
                      {selectedItem.title}
                    </h2>
                  </motion.div>
                </div>
                <motion.div
                  className={clsx('leading-relaxed')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {selectedItem.description}
                  <div
                    className={clsx(
                      'grid grid-cols-1 mt-10 gap-6',
                      'md:grid-cols-2'
                    )}
                  >
                    {selectedItem.gallery.map((img, index) => (
                      <Image
                        key={uuidV7()}
                        className={clsx(
                          'w-full h-full object-cover object-center aspect-[13/9] rounded-3xl',
                          {
                            'md:col-span-1':
                              selectedItem.gallery.length % 2 === 0,
                            'md:col-span-2':
                              selectedItem.gallery.length % 2 === 1 &&
                              index === selectedItem.gallery.length - 1
                          }
                        )}
                        src={img}
                        alt={selectedItem.title}
                        width={1200}
                        height={400}
                        quality={100}
                      />
                    ))}
                  </div>
                  <div className="bg-slate-900 w-[101%] -bottom-px h-9 z-[51] sticky -ml-px -mr-px" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
