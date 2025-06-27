'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { uuidV7 } from '@Utils/generateKeys'

interface MasonryGridProps {
  items: React.ReactNode[]
  columns: {
    mobile: number
    tablet: number
    desktop: number
  }
  itemHeight?: string // eg: h-[200px]
}

const getColumnCount = (width: number, config: MasonryGridProps['columns']) => {
  if (width >= 1024) return config.desktop
  if (width >= 768) return config.tablet
  return config.mobile
}
const generateSmartColSpans = (
  items: React.ReactNode[],
  columnCount: number
): { node: React.ReactNode; col: number }[] => {
  const result: { node: React.ReactNode; col: number }[] = []
  let currentRowSum = 0

  for (const item of items) {
    if (currentRowSum >= columnCount) currentRowSum = 0

    const maxAllowed = columnCount - currentRowSum
    let span = maxAllowed >= 2 ? (Math.random() < 0.5 ? 2 : 1) : 1

    if (currentRowSum + span > columnCount) {
      span = 1
    }

    result.push({ node: item, col: span })
    currentRowSum += span
  }

  // 🔍 Detectar la última fila incompleta
  let total = 0
  let lastRowItems: { index: number; col: number }[] = []

  for (let i = result.length - 1; i >= 0; i--) {
    const col = result[i].col
    total += col
    lastRowItems.unshift({ index: i, col })

    if (total === columnCount) {
      // La última fila ya es exacta
      return result
    }

    if (total > columnCount) {
      // La última fila está completa antes del índice actual
      lastRowItems.shift() // remover el que la sobrepasó
      break
    }
  }

  const missing = columnCount - total
  let remaining = missing

  for (let i = 0; i < lastRowItems.length && remaining > 0; i++) {
    const item = result[lastRowItems[i].index]

    if (item.col === 1 && remaining >= 1) {
      item.col = 2
      remaining -= 1
    }
  }

  return result
}

export const MasonryGrid = ({
  items,
  columns,
  itemHeight = 'h-[200px]'
}: MasonryGridProps) => {
  const [columnCount, setColumnCount] = useState(() =>
    getColumnCount(
      typeof window !== 'undefined' ? window.innerWidth : 1024,
      columns
    )
  )

  const [itemsWithSpans, setItemsWithSpans] = useState<
    { node: React.ReactNode; col: number }[]
  >([])

  useEffect(() => {
    const update = () => {
      setColumnCount(getColumnCount(window.innerWidth, columns))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [columns])

  useEffect(() => {
    setItemsWithSpans(generateSmartColSpans(items, columnCount))
  }, [items, columnCount])

  return (
    <div
      className={clsx(
        'grid gap-4 grid-flow-dense',
        columnCount === 1 && 'grid-cols-1',
        columnCount === 2 && 'grid-cols-2',
        columnCount === 3 && 'grid-cols-3',
        columnCount === 4 && 'grid-cols-4',
        columnCount === 5 && 'grid-cols-5',
        columnCount === 6 && 'grid-cols-6'
      )}
    >
      {itemsWithSpans.map((item, i) => (
        <div
          key={uuidV7()}
          className={clsx(
            `col-span-${Math.min(item.col, columnCount)}`,
            itemHeight,
            'overflow-hidden rounded-xl bg-sky-100 shadow-md p-4 flex items-center justify-center text-xl font-semibold'
          )}
        >
          {item.node}
        </div>
      ))}
    </div>
  )
}
