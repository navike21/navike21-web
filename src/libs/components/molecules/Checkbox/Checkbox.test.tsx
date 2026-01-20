import { render, screen, fireEvent } from '@testing-library/react'
import { createRef, useState } from 'react'
import { describe, it, expect, vi } from 'vitest'
import { Checkbox } from './index'

describe('Checkbox', () => {
  const onChange = vi.fn()
  it('renders without props', () => {
    render(<Checkbox />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<Checkbox label="Test Label" />)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('renders with helperText', () => {
    render(<Checkbox helperText="Helper text" />)
    expect(screen.getByText('Helper text')).toBeInTheDocument()
  })

  it('renders with error and errorMessage', () => {
    render(<Checkbox error errorMessage="Error message" />)
    expect(screen.getByText('Error message')).toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    render(<Checkbox disabled />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()
  })

  it('is checked when checked prop is true', () => {
    render(<Checkbox checked onChange={onChange} />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('is not checked when checked prop is false', () => {
    render(<Checkbox checked={false} onChange={onChange} />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('handles indeterminate state', () => {
    render(<Checkbox indeterminate onChange={onChange} />)
    const checkbox = screen.getByRole('checkbox')
    expect((checkbox as HTMLInputElement).indeterminate).toBe(true)
  })

  it('handles non-indeterminate state', () => {
    render(<Checkbox indeterminate={false} onChange={onChange} />)
    const checkbox = screen.getByRole('checkbox')
    expect((checkbox as HTMLInputElement).indeterminate).toBe(false)
  })

  it('calls onChange when clicked', () => {
    render(<Checkbox onChange={onChange} />)
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Checkbox ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('toggles checked state correctly', () => {
    const TestWrapper = () => {
      const [checked, setChecked] = useState(false)
      return (
        <Checkbox
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
      )
    }
    render(<TestWrapper />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('applies correct classes when disabled', () => {
    render(<Checkbox disabled />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass(
      'cursor-not-allowed',
      'ring-slate-400',
      'bg-slate-200'
    )
  })

  it('applies correct classes when not disabled', () => {
    render(<Checkbox />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('ring-slate-30', 'bg-white')
  })

  it('applies correct classes when checked and not error', () => {
    render(<Checkbox checked onChange={onChange} />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('has-[input:checked]:ring-slate-700')
  })

  it('applies correct classes when error', () => {
    render(<Checkbox error />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('ring-red-500')
  })
})
