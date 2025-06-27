'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  IMasonryGridProps,
  IMasonryItem,
  IUseMasonryGrid
} from './MasonryGrid.types'

export const useMasonryGrid = ({
  items,
  columns,
  useRandomSpan = true,
  controlledFilter,
  onFilterChange
}: IUseMasonryGrid) => {
  const getColumnCount = (
    width: number,
    config: IMasonryGridProps['columns']
  ) => {
    if (width >= 1024) return config.desktop
    if (width >= 768) return config.tablet
    return config.mobile
  }

  const determineSpan = (
    maxAllowed: number,
    useRandomSpan: boolean
  ): number => {
    if (!useRandomSpan) return 1

    if (maxAllowed >= 2) {
      return Math.random() < 0.5 ? 2 : 1
    }

    return 1
  }

  const assignInitialSpans = (
    items: IMasonryItem[],
    columnCount: number,
    useRandomSpan: boolean
  ): { item: IMasonryItem; col: number }[] => {
    const result: { item: IMasonryItem; col: number }[] = []
    let currentRowSum = 0

    for (const item of items) {
      if (currentRowSum >= columnCount) currentRowSum = 0

      const maxAllowed = columnCount - currentRowSum
      let span = determineSpan(maxAllowed, useRandomSpan)

      if (currentRowSum + span > columnCount) span = 1

      currentRowSum += span
      result.push({ item, col: span })
    }

    return result
  }

  const identifyLastRow = (
    result: { item: IMasonryItem; col: number }[],
    columnCount: number
  ): { lastRowItems: { index: number; col: number }[]; total: number } => {
    let total = 0
    let lastRowItems: { index: number; col: number }[] = []

    for (let i = result.length - 1; i >= 0; i -= 1) {
      const col = result[i].col
      total += col
      lastRowItems.unshift({ index: i, col })

      if (total === columnCount) break
      if (total > columnCount) {
        lastRowItems.shift()
        break
      }
    }

    return { lastRowItems, total }
  }

  const generateSmartColSpans = (
    items: IMasonryItem[],
    columnCount: number,
    useRandomSpan: boolean
  ): { item: IMasonryItem; col: number }[] => {
    const result = assignInitialSpans(items, columnCount, useRandomSpan)

    const { lastRowItems, total } = identifyLastRow(result, columnCount)

    let remaining = columnCount - total

    for (let i = 0; i < lastRowItems.length && remaining > 0; i += 1) {
      const item = result[lastRowItems[i].index]
      if (item.col === 1 && remaining >= 1) {
        item.col = 2
        remaining -= 1
      }
    }

    return result
  }

  const [filter, setFilter] = useState<string>('all')
  const [columnCount, setColumnCount] = useState(() =>
    getColumnCount(
      typeof window !== 'undefined' ? window.innerWidth : 1024,
      columns
    )
  )
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    const update = () => {
      setColumnCount(getColumnCount(window.innerWidth, columns))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [columns])

  useEffect(() => {
    if (controlledFilter !== undefined) {
      setFilter(controlledFilter)
    }
  }, [controlledFilter])

  const filteredItems = useMemo(() => {
    if (filter === 'all') return items
    return items.filter(i => i.category === filter)
  }, [filter, items])

  const itemsWithSpans = useMemo(() => {
    if (!hasMounted) {
      return filteredItems.map(item => ({ item, col: 1 }))
    }
    return generateSmartColSpans(filteredItems, columnCount, useRandomSpan)
  }, [filteredItems, columnCount, hasMounted, useRandomSpan])

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
