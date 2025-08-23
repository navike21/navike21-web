'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CardGrid, TCardItem } from './CardGrid'
import Image from 'next/image'
import clsx from 'clsx'
import { Badge } from '@Components/atoms/Badge/Badge'
import { uuidV7 } from '@Utils/generateKeys'
import { X } from 'lucide-react'

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
              className="fixed inset-0 bg-slate-950/50 z-[9] backdrop-blur-xs"
              onClick={() => setSelectedId(null)}
            />

            <motion.div
              layoutId={`card-container-${selectedId}`}
              className={clsx(
                'w-[90%] max-w-[1200px] pointer-events-auto relative z-10',
                'md:w-[80%]',
                'lg:w-[75%]',
                'xl:w-[60%] xl:min-w-[1000px]'
              )}
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setSelectedId(null)}
                className={clsx(
                  'absolute z-30 rounded-full cursor-pointer right-0 left-0 m-auto -top-6 bg-gradient-primary flex items-center justify-center w-11 h-11',
                  'md:left-auto md:m-0 md:right-4 md:top-4',
                  'lg:-right-14 lg:top-2 lg:bg-none lg:w-fit lg:h-fit'
                )}
              >
                <X className={clsx('w-9', 'lg:w-11 lg:h-11')} />
              </motion.button>
              <div
                className={clsx(
                  'overflow-y-auto overflow-x-hidden w-full h-[80dvh] rounded-2xl',
                  'md:h-[85dvh]',
                  'md:h-[90dvh]'
                )}
              >
                <motion.div
                  layoutId={`card-image-container-${selectedId}`}
                  className={clsx(
                    'w-full h-[200px] overflow-hidden z-[11] relative',
                    'md:h-[300px]',
                    'lg:h-[400px]'
                  )}
                >
                  <Image
                    className="w-full h-full object-cover object-center"
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    sizes="(max-width: 768px) 150vw, (max-width: 1200px) 1000px, 1200px"
                    quality={100}
                  />
                </motion.div>
                <div
                  className={clsx(
                    'flex flex-col px-9 bg-slate-900 relative z-[11]',
                    'md:px-12'
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
                      {selectedItem.category.map(({ title, color }) => (
                        <Badge
                          key={title}
                          text={title}
                          color={color}
                          className="w-fit whitespace-nowrap"
                        />
                      ))}
                    </motion.div>
                    <motion.div
                      layoutId={`title-container-${selectedId}`}
                      className="w-full"
                    >
                      <h2
                        className={clsx(
                          'title-sm',
                          'md:w-10/12 md:title-md',
                          'lg:title-lg'
                        )}
                      >
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
                        'lg:grid-cols-2'
                      )}
                    >
                      {selectedItem.gallery.map((img, index) => (
                        <Image
                          key={uuidV7()}
                          className={clsx(
                            'w-full h-full object-cover object-center rounded-lg aspect-[9/14]',
                            'md:aspect-video',
                            'lg:aspect-[13/9]',
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
