import { useEffect, useMemo, useState } from 'react'
import {
  IMasonryGridProps,
  IMasonryItem,
  IUseMasonryGrid
} from './MasonryGrid.types'

const getColumnCount = (
  width: number,
  config: IMasonryGridProps['columns']
) => {
  if (width >= 1025) return config.desktop
  if (width >= 768) return config.tablet
  return config.mobile
}

export const useMasonryGrid = ({
  items,
  columns,
  useRandomSpan = true,
  controlledFilter,
  onFilterChange
}: IUseMasonryGrid) => {
  const determineSpan = (
    maxAllowed: number,
    useRandomSpan: boolean
  ): number => {
    if (!useRandomSpan) return 1
    if (maxAllowed >= 2) return Math.random() < 0.5 ? 2 : 1
    return 1
  }

  const assignInitialSpans = (
    items: IMasonryItem[],
    columnCount: number,
    useRandomSpan: boolean
  ) => {
    const result: { item: IMasonryItem; col: number }[] = []
    let currentRowSum = 0

    for (const item of items) {
      if (currentRowSum >= columnCount) currentRowSum = 0

      const maxAllowed = Math.min(2, columnCount - currentRowSum) // max span=2
      let span = determineSpan(maxAllowed, useRandomSpan)

      if (currentRowSum + span > columnCount) span = 1

      currentRowSum += span
      result.push({ item, col: span })
    }

    return result
  }

  const adjustLastRow = (
    items: { item: IMasonryItem; col: number }[],
    columnCount: number
  ) => {
    let total = 0
    let lastRow: { index: number; col: number }[] = []

    for (let i = items.length - 1; i >= 0; i--) {
      total += items[i].col
      lastRow.unshift({ index: i, col: items[i].col })
      if (total >= columnCount) break
    }

    const remaining = columnCount - total

    if (remaining === 1) {
      // último item debe ser col-span-1
      const lastItem = items[lastRow[lastRow.length - 1].index]
      lastItem.col = 1
    } else if (remaining === 3 && lastRow.length >= 2) {
      // penúltimo col-span-2, último col-span-1
      const penult = items[lastRow[lastRow.length - 2].index]
      const last = items[lastRow[lastRow.length - 1].index]
      penult.col = 2
      last.col = 1
    }

    return items
  }

  const generateSmartColSpans = (
    items: IMasonryItem[],
    columnCount: number,
    useRandomSpan: boolean
  ) => {
    let initial = assignInitialSpans(items, columnCount, useRandomSpan)
    return adjustLastRow(initial, columnCount)
  }

  const [filter, setFilter] = useState<string>('all')
  const [columnCount, setColumnCount] = useState<number | null>(null)
  const [itemsWithSpans, setItemsWithSpans] = useState<
    { item: IMasonryItem; col: number }[]
  >([])

  useEffect(() => {
    const update = () =>
      setColumnCount(getColumnCount(window.innerWidth, columns))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [columns])

  useEffect(() => {
    if (controlledFilter !== undefined) setFilter(controlledFilter)
  }, [controlledFilter])

  const filteredItems = useMemo(() => {
    if (filter === 'all') return items
    return items.filter(i => i.category === filter)
  }, [filter, items])

  useEffect(() => {
    if (columnCount !== null) {
      const spans = generateSmartColSpans(
        filteredItems,
        columnCount,
        useRandomSpan
      )
      setItemsWithSpans(spans)
    }
  }, [filteredItems, columnCount, useRandomSpan])

  const handleFilterChange = (newFilter: string) => {
    if (controlledFilter === undefined) setFilter(newFilter)
    if (onFilterChange) onFilterChange(newFilter)
  }

  return {
    columnCount,
    itemsWithSpans,
    filter,
    handleFilterChange
  }
}
