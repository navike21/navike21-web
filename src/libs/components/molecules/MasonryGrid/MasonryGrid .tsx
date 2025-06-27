import clsx from 'clsx'
import { motion, AnimatePresence } from 'motion/react'
import { IMasonryGridProps } from './MasonryGrid.types'
import { useMasonryGrid } from './MasonryGrid.hooks'

export const MasonryGrid = ({
  items,
  filters = [],
  columns,
  itemHeight = 'h-[200px]',
  useRandomSpan = true,
  renderItem,
  controlledFilter,
  onFilterChange
}: IMasonryGridProps) => {
  const { handleFilterChange, itemsWithSpans, filter, columnCount } =
    useMasonryGrid({
      items,
      columns,
      useRandomSpan,
      controlledFilter,
      onFilterChange
    })

  return (
    <div className="space-y-6">
      {filters.length > 0 && (
        <div className="flex flex-wrap gap-3 justify-center">
          {['all', ...filters].map(f => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
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
          columnCount === 1 && 'grid-cols-1',
          columnCount === 2 && 'grid-cols-2',
          columnCount === 3 && 'grid-cols-3',
          columnCount === 4 && 'grid-cols-4',
          columnCount === 5 && 'grid-cols-5',
          columnCount === 6 && 'grid-cols-6'
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
                itemHeight,
                'overflow-hidden rounded-xl bg-sky-100 shadow-md p-4 flex items-center justify-center text-xl font-semibold'
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
