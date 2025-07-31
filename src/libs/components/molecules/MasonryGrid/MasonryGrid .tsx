'use client'

import clsx from 'clsx'
import { motion, AnimatePresence } from 'motion/react'
import { IMasonryGridProps } from './MasonryGrid.types'
import { useMasonryGrid } from './MasonryGrid.hooks'

export const MasonryGrid = ({
  columns,
  controlledFilter,
  filters = [],
  items,
  useRandomSpan = true,
  onFilterChange,
  renderItem
}: IMasonryGridProps) => {
  const { handleFilterChange, itemsWithSpans, filter, columnCount } =
    useMasonryGrid({
      columns,
      controlledFilter,
      items,
      useRandomSpan,
      onFilterChange
    })

  if (columnCount === null) return null

  return (
    <div className="space-y-6">
      {filters.length > 0 && (
        <div className="flex flex-wrap gap-3 justify-center">
          {['all', ...filters].map(f => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              aria-pressed={filter === f}
              className={clsx(
                'px-4 py-1 rounded-full border',
                filter === f
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 border-gray-300'
              )}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      <div
        className={clsx(
          'grid gap-4 grid-flow-dense transition-opacity duration-300',
          {
            'grid-cols-2': columnCount === 2,
            'grid-cols-3': columnCount === 3,
            'grid-cols-4': columnCount === 4,
            'grid-cols-5': columnCount === 5,
            'grid-cols-6': columnCount === 6,
            'grid-cols-7': columnCount === 7,
            'grid-cols-8': columnCount === 8,
            'grid-cols-9': columnCount === 9
          }
        )}
      >
        <AnimatePresence mode="popLayout">
          {itemsWithSpans.map(({ item, col }) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={clsx(
                `col-span-${Math.min(col, columnCount)}`,
                'overflow-hidden'
              )}
            >
              {renderItem ? renderItem(item) : item.content}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
