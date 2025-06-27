import { ReactNode } from 'react'

export interface IMasonryItem {
  id: string
  category: string
  content: React.ReactNode
}

export interface IColumnsMasonry {
  mobile: number
  tablet: number
  desktop: number
}

export interface IMasonryGridProps extends IUseMasonryGrid {
  filters?: string[]
  itemHeight?: string // eg: h-[200px]
  renderItem?: (item: IMasonryItem) => ReactNode
}

export interface IUseMasonryGrid {
  items: IMasonryItem[]
  columns: IColumnsMasonry
  useRandomSpan?: boolean
  controlledFilter?: string
  onFilterChange?: (filter: string) => void
}
