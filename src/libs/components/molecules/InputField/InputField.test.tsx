import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import React from 'react'

import { InputField } from './InputField'

// Mock IconComponent to avoid issues with icons
vi.mock('@Components/atoms/IconComponent/IconComponent', () => ({
  IconComponent: ({
    icon,
    className
  }: {
    icon: string
    className?: string
  }) => <div data-testid={`icon-${icon}`} className={className} />
}))

vi.mock('@Components/atoms/Spinner/Spinner', () => ({
  Spinner: ({ variant, size }: { variant: string; size: string }) => (
    <div data-testid="spinner" data-variant={variant} data-size={size} />
  )
}))

vi.mock('@Components/atoms/Label/Label', () => ({
  Label: ({
    children,
    disabled,
    htmlFor,
    className
  }: {
    children: React.ReactNode
    disabled?: boolean
    htmlFor?: string
    className?: string
  }) => (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-semibold transition-all duration-300 ${disabled ? 'text-slate-500 cursor-not-allowed' : 'text-slate-900'} ${className || ''}`}
    >
      {children}
    </label>
  )
}))

vi.mock('@Components/atoms/HelperText/HelperText', () => ({
  HelperText: ({
    children,
    idField,
    variant,
    className
  }: {
    children: React.ReactNode
    idField: string
    variant?: string
    className?: string
  }) => (
    <div
      id={`${idField}-helper`}
      className={className}
      role={variant === 'error' ? 'alert' : undefined}
      aria-live={variant === 'error' ? 'polite' : undefined}
    >
      {children}
    </div>
  )
}))

// Mock the hook
vi.mock('./inputField.hooks', () => ({
  useInputField: vi.fn((props: any) => ({
    idField: 'test-id',
    showPassword: false,
    typeField: props.type || 'text',
    handleClassSlot: vi.fn((type: string, position: string) => {
      if (type === 'email' && position === 'left') return 'pr-3'
      if (type === 'text' && position === 'left') return 'pr-4'
      if (position === 'right') return 'pl-4'
      return ''
    }),
    handleChangeTypePassword: vi.fn()
  }))
}))

describe('InputField', () => {
  it('renders default input', () => {
    render(<InputField placeholder="Enter text" />)
    const input = screen.getByPlaceholderText('Enter text')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders with label', () => {
    render(<InputField label="Test Label" placeholder="Enter text" />)
    const label = screen.getByText('Test Label')
    const input = screen.getByPlaceholderText('Enter text')
    expect(label).toBeInTheDocument()
    expect(label).toHaveAttribute('for', input.id)
  })

  it('renders with helper text', () => {
    render(<InputField helperText="Helper message" placeholder="Enter text" />)
    const helper = screen.getByText('Helper message')
    expect(helper).toBeInTheDocument()
  })

  it('renders email type with icon', () => {
    render(<InputField type="email" placeholder="Enter email" />)
    const input = screen.getByPlaceholderText('Enter email')
    expect(input).toHaveAttribute('type', 'email')
    expect(screen.getByTestId('icon-RiMailFill')).toBeInTheDocument()
  })

  it('renders password type with icon and toggle button', () => {
    render(<InputField type="password" placeholder="Enter password" />)
    const input = screen.getByPlaceholderText('Enter password')
    expect(input).toHaveAttribute('type', 'password')
    expect(screen.getByTestId('icon-RiLockPasswordFill')).toBeInTheDocument()
    const toggleButton = screen.getByRole('button')
    expect(toggleButton).toBeInTheDocument()
  })

  it('renders with left slot', () => {
    render(<InputField leftSlot={<span>Left</span>} placeholder="Enter text" />)
    expect(screen.getByText('Left')).toBeInTheDocument()
  })

  it('renders with right slot', () => {
    render(
      <InputField rightSlot={<span>Right</span>} placeholder="Enter text" />
    )
    expect(screen.getByText('Right')).toBeInTheDocument()
  })

  it('renders success variant with icon', () => {
    render(<InputField variant="success" placeholder="Enter text" />)
    expect(screen.getByTestId('icon-RiCheckboxCircleFill')).toBeInTheDocument()
  })

  it('renders error variant with icon', () => {
    render(<InputField variant="error" placeholder="Enter text" />)
    expect(screen.getByTestId('icon-RiErrorWarningFill')).toBeInTheDocument()
  })

  it('renders warning variant with icon', () => {
    render(<InputField variant="warning" placeholder="Enter text" />)
    expect(screen.getByTestId('icon-RiErrorWarningFill')).toBeInTheDocument()
  })

  it('renders loading state with spinner', () => {
    render(<InputField loading placeholder="Enter text" />)
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  it('renders disabled state', () => {
    render(<InputField disabled placeholder="Enter text" />)
    const input = screen.getByPlaceholderText('Enter text')
    expect(input).toBeDisabled()
  })

  it('applies custom className', () => {
    render(<InputField className="custom-class" placeholder="Enter text" />)
    const input = screen.getByPlaceholderText('Enter text')
    const outerDiv = input.closest('div')?.parentElement
    expect(outerDiv).toHaveClass('custom-class')
  })

  it('applies custom classInput', () => {
    render(
      <InputField classInput="custom-input-class" placeholder="Enter text" />
    )
    const inputContainer =
      screen.getByPlaceholderText('Enter text').parentElement
    expect(inputContainer).toHaveClass('custom-input-class')
  })

  it('passes through other input props', () => {
    render(<InputField maxLength={10} placeholder="Enter text" />)
    const input = screen.getByPlaceholderText('Enter text')
    expect(input).toHaveAttribute('maxlength', '10')
  })

  it('renders helperText as ReactNode', () => {
    render(
      <InputField
        helperText={<em>Italic helper</em>}
        placeholder="Enter text"
      />
    )
    const helper = screen.getByText('Italic helper')
    expect(helper).toBeInTheDocument()
    expect(helper.tagName).toBe('EM')
  })

  it('does not render icons when loading', () => {
    render(<InputField variant="success" loading placeholder="Enter text" />)
    expect(
      screen.queryByTestId('icon-RiCheckboxCircleFill')
    ).not.toBeInTheDocument()
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  it('does not render rightSlot for password type', () => {
    render(
      <InputField
        type="password"
        rightSlot={<span>Right</span>}
        placeholder="Enter password"
      />
    )
    expect(screen.queryByText('Right')).not.toBeInTheDocument()
  })

  it('applies correct classes for disabled label', () => {
    render(
      <InputField disabled label="Disabled Label" placeholder="Enter text" />
    )
    const label = screen.getByText('Disabled Label')
    expect(label).toHaveClass('text-slate-500', 'cursor-not-allowed')
  })

  it('applies correct classes for enabled label', () => {
    render(<InputField label="Enabled Label" placeholder="Enter text" />)
    const label = screen.getByText('Enabled Label')
    expect(label).toHaveClass('text-slate-900')
  })

  it('handles class slot for different types and positions', () => {
    render(
      <InputField
        type="email"
        leftSlot={<span>Left</span>}
        placeholder="Enter email"
      />
    )
    const leftSlot = screen.getByText('Left').parentElement
    expect(leftSlot).toHaveClass('pr-3')
  })

  it('forwards ref to input element', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<InputField ref={ref} placeholder="Test ref" />)
    const input = screen.getByPlaceholderText('Test ref')
    expect(ref.current).toBe(input)
  })

  it('adds aria-describedby when helperText is provided', () => {
    render(<InputField helperText="Helper text" placeholder="Test" />)
    const input = screen.getByPlaceholderText('Test')
    expect(input).toHaveAttribute('aria-describedby', `${input.id}-helper-text`)
  })

  it('adds role alert and aria-live to helperText when variant is error', () => {
    render(
      <InputField
        variant="error"
        errorMessage="Error message"
        placeholder="Test"
      />
    )
    const helper = screen.getByText('Error message')
    expect(helper).toHaveAttribute('role', 'alert')
    expect(helper).toHaveAttribute('aria-live', 'polite')
  })

  it('disables toggle button when input is disabled', () => {
    render(<InputField type="password" disabled placeholder="Enter password" />)
    const toggleButton = screen.getByRole('button')
    expect(toggleButton).toBeDisabled()
  })

  it('enables toggle button when input is not disabled', () => {
    render(<InputField type="password" placeholder="Enter password" />)
    const toggleButton = screen.getByRole('button')
    expect(toggleButton).not.toBeDisabled()
    expect(toggleButton).toHaveClass('hover:bg-slate-200/50', 'cursor-pointer')
  })

  it('applies correct classes to toggle button when disabled', () => {
    render(<InputField type="password" disabled placeholder="Enter password" />)
    const toggleButton = screen.getByRole('button')
    expect(toggleButton).toHaveClass('cursor-not-allowed')
    expect(toggleButton).not.toHaveClass('hover:bg-slate-200/50')
  })

  it('renders with left slot for password type', () => {
    render(
      <InputField
        type="password"
        leftSlot={<span>Icon</span>}
        placeholder="Enter password"
      />
    )
    expect(screen.getByText('Icon')).toBeInTheDocument()
    const input = screen.getByPlaceholderText('Enter password')
    expect(input).toHaveClass('pr-1') // Since leftSlot && !rightSlot && type === 'password'
  })

  it('applies correct input classes for text type without slots', () => {
    render(<InputField type="text" placeholder="Test" />)
    const input = screen.getByPlaceholderText('Test')
    expect(input).toHaveClass('py-2', 'px-4')
  })

  it('applies correct input classes for email type without slots', () => {
    render(<InputField type="email" placeholder="Test" />)
    const input = screen.getByPlaceholderText('Test')
    expect(input).toHaveClass('py-2', 'pr-4')
  })

  it('applies correct input classes for password type without slots', () => {
    render(<InputField type="password" placeholder="Test" />)
    const input = screen.getByPlaceholderText('Test')
    expect(input).toHaveClass('py-2', 'pr-1')
  })

  it('applies correct input classes with left slot', () => {
    render(<InputField leftSlot={<span>L</span>} placeholder="Test" />)
    const input = screen.getByPlaceholderText('Test')
    expect(input).toHaveClass('pr-4')
  })

  it('applies correct input classes with right slot', () => {
    render(<InputField rightSlot={<span>R</span>} placeholder="Test" />)
    const input = screen.getByPlaceholderText('Test')
    expect(input).toHaveClass('pl-4')
  })

  it('applies disabled classes to input', () => {
    render(<InputField disabled placeholder="Test" />)
    const input = screen.getByPlaceholderText('Test')
    expect(input).toHaveClass('text-slate-500', 'cursor-not-allowed')
  })

  it('applies loading classes to input', () => {
    render(<InputField loading placeholder="Test" />)
    const input = screen.getByPlaceholderText('Test')
    expect(input).toHaveClass('pointer-events-none')
  })

  it('renders errorMessage when variant is error', () => {
    render(
      <InputField
        variant="error"
        errorMessage="Error occurred"
        placeholder="Test"
      />
    )
    expect(screen.getByText('Error occurred')).toBeInTheDocument()
  })
})
