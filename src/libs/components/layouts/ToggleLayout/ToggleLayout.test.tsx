import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ToggleLayout } from './index'

describe('ToggleLayout', () => {
  it('renders children correctly', () => {
    render(
      <ToggleLayout>
        <input type="checkbox" />
      </ToggleLayout>
    )
    const input = screen.getByRole('checkbox')
    expect(input).toBeInTheDocument()
  })

  it('applies correct container classes', () => {
    render(
      <ToggleLayout>
        <input type="checkbox" />
      </ToggleLayout>
    )
    const container = screen
      .getByRole('checkbox')
      .closest('.flex.items-start.gap-3')
    expect(container).toHaveClass('flex', 'items-start', 'gap-3')
  })

  it('renders label when provided', () => {
    render(
      <ToggleLayout label="Test Label">
        <input type="checkbox" />
      </ToggleLayout>
    )
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
    expect(label.tagName).toBe('LABEL')
  })

  it('does not render label when not provided', () => {
    render(
      <ToggleLayout>
        <input type="checkbox" />
      </ToggleLayout>
    )
    const label = screen.queryByRole('label')
    expect(label).not.toBeInTheDocument()
  })

  it('passes disabled to Label', () => {
    render(
      <ToggleLayout label="Test Label" disabled>
        <input type="checkbox" />
      </ToggleLayout>
    )
    const label = screen.getByText('Test Label')
    expect(label).toHaveClass('text-slate-500', 'cursor-not-allowed')
  })

  it('generates unique id when id is not provided', () => {
    render(
      <ToggleLayout label="Label 1">
        <input type="checkbox" />
      </ToggleLayout>
    )
    render(
      <ToggleLayout label="Label 2">
        <input type="checkbox" />
      </ToggleLayout>
    )
    const label1 = screen.getByText('Label 1')
    const label2 = screen.getByText('Label 2')
    expect(label1).toHaveAttribute('for')
    expect(label2).toHaveAttribute('for')
    expect(label1.getAttribute('for')).not.toBe(label2.getAttribute('for'))
  })

  it('uses provided id for htmlFor', () => {
    render(
      <ToggleLayout label="Test Label" id="custom-id">
        <input type="checkbox" />
      </ToggleLayout>
    )
    const label = screen.getByText('Test Label')
    expect(label).toHaveAttribute('for', 'custom-id')
  })

  it('renders error message when error and errorMessage are provided', () => {
    render(
      <ToggleLayout error errorMessage="Error occurred">
        <input type="checkbox" />
      </ToggleLayout>
    )
    const errorText = screen.getByText('Error occurred')
    expect(errorText).toBeInTheDocument()
    expect(errorText).toHaveClass('text-red-500') // HelperText error variant
  })

  it('does not render error message when error is true but errorMessage is not provided', () => {
    render(
      <ToggleLayout error>
        <input type="checkbox" />
      </ToggleLayout>
    )
    const errorText = screen.queryByText(/error/i)
    expect(errorText).not.toBeInTheDocument()
  })

  it('does not render error message when errorMessage is provided but error is false', () => {
    render(
      <ToggleLayout errorMessage="Error occurred">
        <input type="checkbox" />
      </ToggleLayout>
    )
    const errorText = screen.queryByText('Error occurred')
    expect(errorText).not.toBeInTheDocument()
  })

  it('renders helper text when provided and no errorMessage', () => {
    render(
      <ToggleLayout helperText="Help text">
        <input type="checkbox" />
      </ToggleLayout>
    )
    const helperText = screen.getByText('Help text')
    expect(helperText).toBeInTheDocument()
    expect(helperText).toHaveClass('text-slate-500') // Default HelperText variant
  })

  it('does not render helper text when errorMessage is provided', () => {
    render(
      <ToggleLayout helperText="Help text" error errorMessage="Error">
        <input type="checkbox" />
      </ToggleLayout>
    )
    const helperText = screen.queryByText('Help text')
    expect(helperText).not.toBeInTheDocument()
    const errorText = screen.getByText('Error')
    expect(errorText).toBeInTheDocument()
  })

  it('renders both label and helper text', () => {
    render(
      <ToggleLayout label="Label" helperText="Help">
        <input type="checkbox" />
      </ToggleLayout>
    )
    expect(screen.getByText('Label')).toBeInTheDocument()
    expect(screen.getByText('Help')).toBeInTheDocument()
  })

  it('renders both label and error message', () => {
    render(
      <ToggleLayout label="Label" error errorMessage="Error">
        <input type="checkbox" />
      </ToggleLayout>
    )
    expect(screen.getByText('Label')).toBeInTheDocument()
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  it('applies correct structure with nested divs', () => {
    render(
      <ToggleLayout label="Label">
        <input type="checkbox" />
      </ToggleLayout>
    )
    const container = screen
      .getByRole('checkbox')
      .closest('.flex.items-start.gap-3')
    expect(container?.children).toHaveLength(2)
    const labelDiv = container?.children[1]
    expect(labelDiv).toHaveClass('flex', 'flex-col', 'gap-0.5')
  })

  it('handles empty children gracefully', () => {
    render(<ToggleLayout>{null}</ToggleLayout>)
    const container = document.querySelector('.flex.items-start.gap-3')
    expect(container).toBeInTheDocument()
  })
})
