import { render, screen } from '@testing-library/react'
import { createElement } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { ReactQueryProvider } from './ReactQueryProvider'

const environmentState = vi.hoisted(() => ({
  current: 'development' as 'development' | 'production'
}))

vi.mock('@Config/environments', () => ({
  get ENVIRONMENT() {
    return environmentState.current
  }
}))

vi.mock('@tanstack/react-query-devtools', () => ({
  ReactQueryDevtools: () =>
    createElement('div', { 'data-testid': 'react-query-devtools' })
}))

vi.mock('sileo', () => ({
  Toaster: ({ position, offset }: { position: string; offset: number }) =>
    createElement('div', {
      'data-testid': 'sileo-toaster',
      'data-position': position,
      'data-offset': String(offset)
    }),
  sileo: {
    success: vi.fn(),
    error: vi.fn(),
    promise: vi.fn()
  }
}))

describe('ReactQueryProvider', () => {
  beforeEach(() => {
    environmentState.current = 'development'
  })

  it('renders children, the toaster, and devtools in development', () => {
    // Arrange & Act
    render(
      <ReactQueryProvider>
        <span>child</span>
      </ReactQueryProvider>
    )

    // Assert
    expect(screen.getByText('child')).toBeInTheDocument()
    expect(screen.getByTestId('sileo-toaster')).toHaveAttribute(
      'data-position',
      'top-center'
    )
    expect(screen.getByTestId('sileo-toaster')).toHaveAttribute(
      'data-offset',
      '75'
    )
    expect(screen.getByTestId('react-query-devtools')).toBeInTheDocument()
  })

  it('hides devtools outside development', () => {
    // Arrange
    const { rerender } = render(
      <ReactQueryProvider>
        <span>child</span>
      </ReactQueryProvider>
    )

    // Act
    environmentState.current = 'production'
    rerender(
      <ReactQueryProvider>
        <span>child</span>
      </ReactQueryProvider>
    )

    // Assert
    expect(screen.queryByTestId('react-query-devtools')).not.toBeInTheDocument()
  })
})
