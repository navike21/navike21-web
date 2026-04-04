import { render, screen, fireEvent } from '@testing-library/react'
import { createRef, useState } from 'react'
import { describe, it, expect, vi } from 'vitest'

import { RadioOption } from './RadioOption'

describe('RadioOption', () => {
  it('renders without props', () => {
    render(<RadioOption />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<RadioOption label="Test Label" />)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  it('renders with helperText', () => {
    render(<RadioOption helperText="Helper text" />)
    expect(screen.getByText('Helper text')).toBeInTheDocument()
  })

  it('renders with error and errorMessage', () => {
    render(<RadioOption error errorMessage="Error message" />)
    expect(screen.getByText('Error message')).toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    render(<RadioOption disabled />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeDisabled()
  })

  it('is checked when checked prop is true', () => {
    const onChange = vi.fn()
    render(<RadioOption checked onChange={onChange} />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeChecked()
  })

  it('is not checked when checked prop is false', () => {
    const onChange = vi.fn()
    render(<RadioOption checked={false} onChange={onChange} />)
    const radio = screen.getByRole('radio')
    expect(radio).not.toBeChecked()
  })

  it('is checked when defaultChecked prop is true', () => {
    render(<RadioOption defaultChecked />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeChecked()
  })

  it('calls onChange when clicked', () => {
    const onChange = vi.fn()
    render(<RadioOption onChange={onChange} />)
    const radio = screen.getByRole('radio')
    fireEvent.click(radio)
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLInputElement>()
    render(<RadioOption ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('native input has type radio', () => {
    render(<RadioOption />)
    expect(screen.getByRole('radio')).toHaveAttribute('type', 'radio')
  })

  it('applies name and value props to the native input', () => {
    render(<RadioOption name="group" value="option-a" />)
    const radio = screen.getByRole('radio')
    expect(radio).toHaveAttribute('name', 'group')
    expect(radio).toHaveAttribute('value', 'option-a')
  })

  it('toggles checked state via controlled wrapper', () => {
    const TestWrapper = () => {
      const [checked, setChecked] = useState(false)
      return (
        <RadioOption
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
      )
    }
    render(<TestWrapper />)
    const radio = screen.getByRole('radio')
    expect(radio).not.toBeChecked()
    fireEvent.click(radio)
    expect(radio).toBeChecked()
  })

  it('applies disabled styles to the outer button', () => {
    render(<RadioOption disabled />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass(
      'cursor-not-allowed',
      'ring-slate-400',
      'bg-slate-200'
    )
  })

  it('applies error ring class when error is true', () => {
    render(<RadioOption error />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('ring-red-500')
  })

  it('renders as rounded-full shape', () => {
    render(<RadioOption />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('rounded-full')
  })

  it('has displayName RadioOption', () => {
    expect(RadioOption.displayName).toBe('RadioOption')
  })
})
