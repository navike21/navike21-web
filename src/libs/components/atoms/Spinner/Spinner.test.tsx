import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders with default props', () => {
    render(<Spinner />)

    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('w-10', 'h-10', 'animate-spin')
  })

  it('renders with small size', () => {
    render(<Spinner size="small" />)

    const spinner = screen.getByTestId('spinner')
    expect(spinner).toHaveClass('w-5', 'h-5')
    expect(spinner).not.toHaveClass('w-10', 'w-16')
  })

  it('renders with medium size', () => {
    render(<Spinner size="medium" />)

    const spinner = screen.getByTestId('spinner')
    expect(spinner).toHaveClass('w-10', 'h-10')
    expect(spinner).not.toHaveClass('w-5', 'w-16')
  })

  it('renders with large size', () => {
    render(<Spinner size="large" />)

    const spinner = screen.getByTestId('spinner')
    expect(spinner).toHaveClass('w-16', 'h-16')
    expect(spinner).not.toHaveClass('w-5', 'w-10')
  })

  it('renders with default variant', () => {
    render(<Spinner variant="default" />)

    const spinner = screen.getByTestId('spinner')
    const svg = spinner.querySelector('svg')
    expect(svg).toBeInTheDocument()

    const defs = svg?.querySelector('defs')
    const gradient = defs?.querySelector('linearGradient')
    expect(gradient).toBeInTheDocument()
    expect(gradient?.getAttribute('id')).toMatch(/^spinner_.*default$/)

    const stops = gradient?.querySelectorAll('stop')
    expect(stops?.[0]).toHaveAttribute('stop-color', '#62748e')
    expect(stops?.[1]).toHaveAttribute('stop-color', '#62748e')
  })

  it('renders with white variant', () => {
    render(<Spinner variant="white" />)

    const spinner = screen.getByTestId('spinner')
    const svg = spinner.querySelector('svg')
    expect(svg).toBeInTheDocument()

    const defs = svg?.querySelector('defs')
    const gradient = defs?.querySelector('linearGradient')
    expect(gradient).toBeInTheDocument()
    expect(gradient?.getAttribute('id')).toMatch(/^spinner_.*white$/)

    const stops = gradient?.querySelectorAll('stop')
    expect(stops?.[0]).toHaveAttribute('stop-color', '#f9f3f4')
    expect(stops?.[1]).toHaveAttribute('stop-color', '#f9f3f4')
  })

  it('renders with gradient variant', () => {
    render(<Spinner variant="gradient" />)

    const spinner = screen.getByTestId('spinner')
    const svg = spinner.querySelector('svg')
    expect(svg).toBeInTheDocument()

    const defs = svg?.querySelector('defs')
    const gradient = defs?.querySelector('linearGradient')
    expect(gradient).toBeInTheDocument()
    expect(gradient?.getAttribute('id')).toMatch(/^spinner_.*gradient$/)

    const stops = gradient?.querySelectorAll('stop')
    expect(stops?.[0]).toHaveAttribute('stop-color', '#17CADD')
    expect(stops?.[1]).toHaveAttribute('stop-color', '#332eb9ff')
  })

  it('generates unique gradient IDs for different instances', () => {
    const { rerender } = render(<Spinner variant="default" />)
    const firstSpinner = screen.getByTestId('spinner')
    const firstGradientId = firstSpinner

      .querySelector('linearGradient')
      ?.getAttribute('id')

    rerender(<Spinner variant="white" />)

    const secondSpinner = screen.getByTestId('spinner')
    const secondGradientId = secondSpinner
      .querySelector('linearGradient')
      ?.getAttribute('id')

    expect(firstGradientId).not.toBe(secondGradientId)
    expect(firstGradientId).toMatch(/^spinner_.*default$/)
    expect(secondGradientId).toMatch(/^spinner_.*white$/)
  })

  it('renders SVG with correct structure', () => {
    render(<Spinner />)

    const svg = screen.getByTestId('spinner').querySelector('svg')
    expect(svg).toHaveAttribute('viewBox', '0 0 32 32')
    expect(svg).toHaveAttribute('fill', 'none')

    const paths = svg?.querySelectorAll('path')
    expect(paths).toHaveLength(2)

    const defs = svg?.querySelector('defs')
    expect(defs).toBeInTheDocument()

    const gradient = defs?.querySelector('linearGradient')
    expect(gradient).toBeInTheDocument()
    expect(gradient?.getAttribute('gradientUnits')).toBe('userSpaceOnUse')
  })

  it('applies correct fill classes for background path', () => {
    // Default variant
    const { rerender } = render(<Spinner variant="default" />)
    let path = screen.getByTestId('spinner').querySelector('svg path')
    expect(path).toHaveClass('fill-slate-200')

    // White variant
    rerender(<Spinner variant="white" />)
    path = screen.getByTestId('spinner').querySelector('svg path')
    expect(path).toHaveClass('fill-slate-50/10')

    // Gradient variant
    rerender(<Spinner variant="gradient" />)
    path = screen.getByTestId('spinner').querySelector('svg path')
    expect(path).toHaveClass('fill-slate-200')
  })

  it('has correct accessibility attributes', () => {
    render(<Spinner />)

    const spinner = screen.getByTestId('spinner')
    expect(spinner).toHaveAttribute('data-testid', 'spinner')
  })

  it('applies transition classes', () => {
    render(<Spinner />)

    const spinner = screen.getByTestId('spinner')
    expect(spinner).toHaveClass('transition-all', 'ease-in-out', 'duration-300')
  })
})
