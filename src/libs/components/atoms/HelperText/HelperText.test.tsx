import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { HelperText } from './HelperText'

describe('HelperText', () => {
  it('renders the helper text', () => {
    render(<HelperText>Test helper text</HelperText>)
    expect(screen.getByText('Test helper text')).toBeInTheDocument()
  })

  it('does not render when children is not provided', () => {
    const { container } = render(<HelperText />)
    expect(container.firstChild).toHaveTextContent('')
  })

  it('applies idField when provided', () => {
    render(<HelperText idField="custom-field">Test</HelperText>)
    const element = screen.getByText('Test')
    expect(element).toHaveAttribute('id', 'custom-field-helper-text')
  })

  it('generates unique id when idField is not provided', () => {
    render(<HelperText>Test 1</HelperText>)
    render(<HelperText>Test 2</HelperText>)
    const element1 = screen.getByText('Test 1')
    const element2 = screen.getByText('Test 2')
    expect(element1).toHaveAttribute('id')
    expect(element2).toHaveAttribute('id')
    expect(element1.id).not.toBe(element2.id)
  })

  it('applies default variant classes', () => {
    render(<HelperText>Test</HelperText>)
    const element = screen.getByText('Test')
    expect(element).toHaveClass('text-slate-500')
  })

  it('does not apply default variant color when className has text color', () => {
    render(<HelperText className="text-blue-500">Test</HelperText>)
    const element = screen.getByText('Test')
    expect(element).toHaveClass('text-blue-500')
    expect(element).not.toHaveClass('text-slate-500')
  })

  it('applies error variant classes and accessibility attributes', () => {
    render(<HelperText variant="error">Error message</HelperText>)
    const element = screen.getByText('Error message')
    expect(element).toHaveClass('text-red-500')
    expect(element).toHaveAttribute('role', 'alert')
    expect(element).toHaveAttribute('aria-live', 'polite')
  })

  it('does not apply error variant color when className has text color', () => {
    render(
      <HelperText variant="error" className="text-purple-500">
        Error message
      </HelperText>
    )
    const element = screen.getByText('Error message')
    expect(element).toHaveClass('text-purple-500')
    expect(element).not.toHaveClass('text-red-500')
    expect(element).toHaveAttribute('role', 'alert')
    expect(element).toHaveAttribute('aria-live', 'polite')
  })

  it('applies success variant classes', () => {
    render(<HelperText variant="success">Success message</HelperText>)
    const element = screen.getByText('Success message')
    expect(element).toHaveClass('text-emerald-500')
  })

  it('does not apply success variant color when className has text color', () => {
    render(
      <HelperText variant="success" className="text-green-600">
        Success message
      </HelperText>
    )
    const element = screen.getByText('Success message')
    expect(element).toHaveClass('text-green-600')
    expect(element).not.toHaveClass('text-emerald-500')
  })

  it('applies warning variant classes', () => {
    render(<HelperText variant="warning">Warning message</HelperText>)
    const element = screen.getByText('Warning message')
    expect(element).toHaveClass('text-yellow-500')
  })

  it('does not apply warning variant color when className has text color', () => {
    render(
      <HelperText variant="warning" className="text-orange-500">
        Warning message
      </HelperText>
    )
    const element = screen.getByText('Warning message')
    expect(element).toHaveClass('text-orange-500')
    expect(element).not.toHaveClass('text-yellow-500')
  })

  it('applies info variant classes', () => {
    render(<HelperText variant="info">Info message</HelperText>)
    const element = screen.getByText('Info message')
    expect(element).toHaveClass('text-blue-500')
  })

  it('does not apply info variant color when className has text color', () => {
    render(
      <HelperText variant="info" className="text-cyan-500">
        Info message
      </HelperText>
    )
    const element = screen.getByText('Info message')
    expect(element).toHaveClass('text-cyan-500')
    expect(element).not.toHaveClass('text-blue-500')
  })

  it('applies small size classes', () => {
    render(<HelperText size="small">Test</HelperText>)
    const element = screen.getByText('Test')
    expect(element).toHaveClass('text-xs')
  })

  it('applies medium size classes', () => {
    render(<HelperText size="medium">Test</HelperText>)
    const element = screen.getByText('Test')
    expect(element).toHaveClass('text-sm')
  })

  it('applies large size classes', () => {
    render(<HelperText size="large">Test</HelperText>)
    const element = screen.getByText('Test')
    expect(element).toHaveClass('text-base')
  })

  it('does not show icon when showIcon is false', () => {
    render(<HelperText showIcon={false}>Test</HelperText>)
    const element = screen.getByText('Test')
    expect(element.querySelector('svg')).not.toBeInTheDocument()
  })

  it('shows icon for error variant when showIcon is true', () => {
    render(
      <HelperText variant="error" showIcon>
        Test
      </HelperText>
    )
    const icon = document.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('shows icon for success variant when showIcon is true', () => {
    render(
      <HelperText variant="success" showIcon>
        Test
      </HelperText>
    )
    const icon = document.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('shows icon for warning variant when showIcon is true', () => {
    render(
      <HelperText variant="warning" showIcon>
        Test
      </HelperText>
    )
    const icon = document.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('shows icon for info variant when showIcon is true', () => {
    render(
      <HelperText variant="info" showIcon>
        Test
      </HelperText>
    )
    const icon = document.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('shows default icon for default variant when showIcon is true', () => {
    render(
      <HelperText variant="default" showIcon>
        Test
      </HelperText>
    )
    const icon = document.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('applies small icon size', () => {
    render(
      <HelperText size="small" showIcon>
        Test
      </HelperText>
    )
    const icon = document.querySelector('svg')
    expect(icon).toHaveClass('size-4')
  })

  it('applies medium icon size', () => {
    render(
      <HelperText size="medium" showIcon>
        Test
      </HelperText>
    )
    const icon = document.querySelector('svg')
    expect(icon).toHaveClass('size-5')
  })

  it('applies large icon size', () => {
    render(
      <HelperText size="large" showIcon>
        Test
      </HelperText>
    )
    const icon = document.querySelector('svg')
    expect(icon).toHaveClass('size-6')
  })

  it('applies flex layout classes', () => {
    render(<HelperText>Test</HelperText>)
    const element = screen.getByText('Test')
    expect(element).toHaveClass('flex', 'items-center', 'gap-2')
  })

  it('applies custom className without overriding text colors', () => {
    render(<HelperText className="font-bold bg-white">Test</HelperText>)
    const element = screen.getByText('Test')
    expect(element).toHaveClass('font-bold', 'bg-white', 'text-slate-500')
  })

  it('handles classes that start with text- but are not colors', () => {
    render(<HelperText className="texture-bg">Test</HelperText>)
    const element = screen.getByText('Test')
    expect(element).toHaveClass('texture-bg', 'text-slate-500')
  })

  it('handles empty className string', () => {
    render(<HelperText className="">Test</HelperText>)
    const element = screen.getByText('Test')
    expect(element).toHaveClass('text-slate-500')
  })

  it('handles className with multiple spaces', () => {
    render(
      <HelperText className="  text-blue-500   bg-white  ">Test</HelperText>
    )
    const element = screen.getByText('Test')
    expect(element).toHaveClass('text-blue-500', 'bg-white')
    expect(element).not.toHaveClass('text-slate-500')
  })

  it('spreads additional props to the div element', () => {
    render(<HelperText data-testid="custom-helper">Test</HelperText>)
    const element = screen.getByTestId('custom-helper')
    expect(element).toBeInTheDocument()
  })

  it('renders as a div element', () => {
    render(<HelperText>Test</HelperText>)
    const element = screen.getByText('Test')
    expect(element.tagName).toBe('DIV')
  })
})
