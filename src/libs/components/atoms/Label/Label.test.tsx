import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Label } from './index'

describe('Label', () => {
  it('renders the children', () => {
    render(<Label>Test Label</Label>)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('applies htmlFor attribute', () => {
    render(<Label htmlFor="test-input">Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveAttribute('for', 'test-input')
  })

  it('applies disabled styles when disabled is true', () => {
    render(<Label disabled>Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass('text-slate-500', 'cursor-not-allowed')
    expect(label).not.toHaveClass('text-slate-900')
  })

  it('applies default text color when disabled is false and no text color in className', () => {
    render(<Label>Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass('text-slate-900')
    expect(label).not.toHaveClass('text-slate-500', 'cursor-not-allowed')
  })

  it('does not apply default text color when className has text color', () => {
    render(<Label className="text-blue-500">Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass('text-blue-500')
    expect(label).not.toHaveClass('text-slate-900')
  })

  it('applies custom className', () => {
    render(<Label className="custom-class">Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass('custom-class')
  })

  it('applies common classes', () => {
    render(<Label>Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass(
      'text-sm',
      'font-semibold',
      'transition-all',
      'duration-300'
    )
  })

  it('spreads additional props to the label element', () => {
    render(<Label data-testid="custom-label">Test Label</Label>)
    const label = screen.getByTestId('custom-label')
    expect(label).toBeInTheDocument()
  })

  it('renders as a label element', () => {
    render(<Label>Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label.tagName).toBe('LABEL')
  })

  it('handles multiple text classes in className', () => {
    render(<Label className="text-red-500 bg-white">Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass('text-red-500', 'bg-white')
    expect(label).not.toHaveClass('text-slate-900')
  })

  it('applies default text color when className has non-text classes', () => {
    render(<Label className="bg-white font-bold">Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass('bg-white', 'font-bold', 'text-slate-900')
  })

  it('does not apply default text color when className has classes starting with text- but not text colors', () => {
    render(<Label className="texture-bg">Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass('texture-bg', 'text-slate-900')
  })

  it('handles empty className string', () => {
    render(<Label className="">Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass('text-slate-900')
  })

  it('handles className with multiple spaces', () => {
    render(<Label className="  text-blue-500   bg-white  ">Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass('text-blue-500', 'bg-white')
    expect(label).not.toHaveClass('text-slate-900')
  })

  it('applies disabled styles overriding text color classes', () => {
    render(
      <Label disabled className="text-blue-500">
        Test Label
      </Label>
    )
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass(
      'text-slate-500',
      'cursor-not-allowed',
      'text-blue-500'
    )
  })
})
