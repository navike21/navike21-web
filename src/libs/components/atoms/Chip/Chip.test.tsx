import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import { Chip } from './Chip'

describe('Chip', () => {
  it('renders children', () => {
    render(<Chip>Test chip</Chip>)
    expect(screen.getByText('Test chip')).toBeInTheDocument()
  })

  it('renders as a span element', () => {
    const { container } = render(<Chip>Chip</Chip>)
    expect(container.firstChild?.nodeName).toBe('SPAN')
  })

  it('applies base classes', () => {
    const { container } = render(<Chip>Chip</Chip>)
    const chip = container.firstChild as HTMLElement
    expect(chip).toHaveClass(
      'inline-flex',
      'items-center',
      'rounded-full',
      'ring-1',
      'font-medium'
    )
  })

  it('applies default variant classes when no variant given', () => {
    const { container } = render(<Chip>Chip</Chip>)
    const chip = container.firstChild as HTMLElement
    expect(chip).toHaveClass('bg-slate-100', 'text-slate-700', 'ring-slate-300')
  })

  it('applies success variant classes', () => {
    const { container } = render(<Chip variant="success">Success</Chip>)
    const chip = container.firstChild as HTMLElement
    expect(chip).toHaveClass(
      'bg-emerald-100',
      'text-emerald-700',
      'ring-emerald-300'
    )
  })

  it('applies warning variant classes', () => {
    const { container } = render(<Chip variant="warning">Warning</Chip>)
    const chip = container.firstChild as HTMLElement
    expect(chip).toHaveClass(
      'bg-yellow-100',
      'text-yellow-700',
      'ring-yellow-300'
    )
  })

  it('applies informative variant classes', () => {
    const { container } = render(<Chip variant="informative">Info</Chip>)
    const chip = container.firstChild as HTMLElement
    expect(chip).toHaveClass('bg-blue-100', 'text-blue-700', 'ring-blue-300')
  })

  it('applies error variant classes', () => {
    const { container } = render(<Chip variant="error">Error</Chip>)
    const chip = container.firstChild as HTMLElement
    expect(chip).toHaveClass('bg-red-100', 'text-red-700', 'ring-red-300')
  })

  it('applies xsmall size classes (h-5)', () => {
    const { container } = render(<Chip size="xsmall">Chip</Chip>)
    const chip = container.firstChild as HTMLElement
    expect(chip).toHaveClass('h-5', 'text-xs', 'px-2', 'gap-1')
  })

  it('applies small size classes (h-6)', () => {
    const { container } = render(<Chip size="small">Chip</Chip>)
    const chip = container.firstChild as HTMLElement
    expect(chip).toHaveClass('h-6', 'text-xs', 'px-2.5', 'gap-1')
  })

  it('applies medium size classes by default (h-7)', () => {
    const { container } = render(<Chip>Chip</Chip>)
    const chip = container.firstChild as HTMLElement
    expect(chip).toHaveClass('h-7', 'text-sm', 'px-3', 'gap-1.5')
  })

  it('applies large size classes (h-8)', () => {
    const { container } = render(<Chip size="large">Chip</Chip>)
    const chip = container.firstChild as HTMLElement
    expect(chip).toHaveClass('h-8', 'text-sm', 'px-3.5', 'gap-1.5')
  })

  it('renders icon when icon prop is provided', () => {
    const { container } = render(<Chip icon="RiHomeLine">Chip</Chip>)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThan(0)
  })

  it('does not render any button when deleteable is false', () => {
    render(<Chip>Chip</Chip>)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('renders delete button when deleteable is true', () => {
    render(<Chip deleteable>Chip</Chip>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('delete button has type="button"', () => {
    render(<Chip deleteable>Chip</Chip>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })

  it('calls deleteButtonProps.onClick when delete button is clicked', () => {
    const onClick = vi.fn()
    render(
      <Chip deleteable deleteButtonProps={{ onClick }}>
        Chip
      </Chip>
    )
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('disables delete button when deleteButtonProps.disabled is true', () => {
    render(
      <Chip deleteable deleteButtonProps={{ disabled: true }}>
        Chip
      </Chip>
    )
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('applies cursor-not-allowed when delete button is disabled', () => {
    render(
      <Chip deleteable deleteButtonProps={{ disabled: true }}>
        Chip
      </Chip>
    )
    expect(screen.getByRole('button')).toHaveClass(
      'cursor-not-allowed',
      'opacity-50'
    )
  })

  it('applies custom className to root element', () => {
    const { container } = render(<Chip className="my-custom-class">Chip</Chip>)
    const chip = container.firstChild as HTMLElement
    expect(chip).toHaveClass('my-custom-class')
  })

  it('renders delete icon inside delete button', () => {
    render(<Chip deleteable>Chip</Chip>)
    const deleteButton = screen.getByRole('button')
    expect(deleteButton.querySelector('svg')).toBeInTheDocument()
  })

  it('renders both icon and children', () => {
    render(<Chip icon="RiStarLine">Star chip</Chip>)
    expect(screen.getByText('Star chip')).toBeInTheDocument()
  })

  it('passes additional deleteButtonProps attributes', () => {
    render(
      <Chip deleteable deleteButtonProps={{ 'aria-label': 'Remove item' }}>
        Chip
      </Chip>
    )
    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-label',
      'Remove item'
    )
  })

  it('renders iconContent when provided and no icon prop', () => {
    render(
      <Chip iconContent={<span data-testid="custom-icon">★</span>}>Chip</Chip>
    )
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })

  it('does not render iconContent when icon prop is also provided', () => {
    const { container } = render(
      <Chip
        icon="RiHomeLine"
        iconContent={<span data-testid="custom-icon">★</span>}
      >
        Chip
      </Chip>
    )
    // icon renders SVG; iconContent is suppressed
    expect(container.querySelector('[data-testid="custom-icon"]')).toBeNull()
    expect(container.querySelectorAll('svg').length).toBeGreaterThan(0)
  })

  it('iconContent wrapper applies correct size class for xsmall', () => {
    const { container } = render(
      <Chip size="xsmall" iconContent={<span data-testid="ic">★</span>}>
        Chip
      </Chip>
    )
    const wrapper = container.querySelector('[data-testid="ic"]')
      ?.parentElement as HTMLElement
    expect(wrapper).toHaveClass('w-3', 'h-3')
  })
})
