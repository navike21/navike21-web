import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { InputLayout } from './index'

vi.mock('react', async () => {
  const actual = await vi.importActual('react')
  return {
    ...actual,
    useId: vi.fn(() => 'test-uuid')
  }
})

vi.mock('@Components/atoms', () => ({
  HelperText: ({ children, variant, idField, ...props }: any) => (
    <div
      data-testid="helper-text"
      data-variant={variant}
      id={idField}
      {...props}
    >
      {children}
    </div>
  ),
  IconComponent: ({ icon, className }: any) => (
    <span data-testid={`icon-${icon}`} className={className} />
  ),
  Label: ({ children, ...props }: any) => <label {...props}>{children}</label>,
  Spinner: ({ variant, size }: any) => (
    <div data-testid="spinner" data-variant={variant} data-size={size} />
  )
}))

describe('InputLayout', () => {
  it('renders with label and children', () => {
    render(
      <InputLayout label="Test Label">
        <input type="text" />
      </InputLayout>
    )

    expect(screen.getByText('Test Label')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders without label', () => {
    render(
      <InputLayout>
        <input type="text" />
      </InputLayout>
    )

    expect(screen.queryByRole('label')).not.toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <InputLayout className="custom-class">
        <input type="text" />
      </InputLayout>
    )

    const container = screen.getByRole('textbox').closest('div')
    expect(container?.parentElement).toHaveClass('custom-class')
  })

  it('applies custom classInput', () => {
    render(
      <InputLayout classInput="custom-input-class">
        <input type="text" />
      </InputLayout>
    )

    const inputContainer = screen.getByRole('textbox').parentElement
    expect(inputContainer).toHaveClass('custom-input-class')
  })

  it('renders with custom id', () => {
    render(
      <InputLayout id="custom-id" label="Label">
        <input type="text" />
      </InputLayout>
    )

    const label = screen.getByText('Label')
    expect(label).toHaveAttribute('for', 'custom-id')
  })

  it('generates id when not provided', () => {
    render(
      <InputLayout label="Label">
        <input type="text" />
      </InputLayout>
    )

    const label = screen.getByText('Label')
    expect(label).toHaveAttribute('for', 'test-uuid')
  })

  it('renders with disabled state', () => {
    render(
      <InputLayout disabled label="Label">
        <input type="text" />
      </InputLayout>
    )

    const container = screen.getByText('Label').closest('div')
    expect(container).toHaveClass('cursor-not-allowed')
    expect(container).not.toHaveClass('pointer-events-none')
  })

  it('renders with loading state', () => {
    render(
      <InputLayout loading label="Label">
        <input type="text" />
      </InputLayout>
    )

    const container = screen.getByText('Label').closest('div')
    expect(container).toHaveClass('pointer-events-none')
    expect(container).not.toHaveClass('cursor-not-allowed')
    // Spinner should be present
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  it('renders with both disabled and loading', () => {
    render(
      <InputLayout disabled loading label="Label">
        <input type="text" />
      </InputLayout>
    )

    const container = screen.getByText('Label').closest('div')
    expect(container).toHaveClass('cursor-not-allowed')
    expect(container).toHaveClass('pointer-events-none')
  })

  it('renders with variant default', () => {
    render(
      <InputLayout variant="default">
        <input type="text" />
      </InputLayout>
    )

    const inputContainer = screen.getByRole('textbox').parentElement
    expect(inputContainer).toHaveClass('ring-slate-300')
  })

  it('renders with variant success', () => {
    render(
      <InputLayout variant="success">
        <input type="text" />
      </InputLayout>
    )

    const inputContainer = screen.getByRole('textbox').parentElement
    expect(inputContainer).toHaveClass('ring-emerald-500')
    // Success icon should be present
    expect(screen.getByTestId('icon-RiCheckboxCircleFill')).toBeInTheDocument()
  })

  it('renders with variant error', () => {
    render(
      <InputLayout variant="error">
        <input type="text" />
      </InputLayout>
    )

    const inputContainer = screen.getByRole('textbox').parentElement
    expect(inputContainer).toHaveClass('ring-red-500')
    // Error icon should be present
    expect(screen.getByTestId('icon-RiErrorWarningFill')).toBeInTheDocument()
  })

  it('renders with variant warning', () => {
    render(
      <InputLayout variant="warning">
        <input type="text" />
      </InputLayout>
    )

    const inputContainer = screen.getByRole('textbox').parentElement
    expect(inputContainer).toHaveClass('ring-yellow-500')
    // Warning icon should be present
    expect(screen.getByTestId('icon-RiErrorWarningFill')).toBeInTheDocument()
  })

  it('renders errorMessage when variant is error', () => {
    render(
      <InputLayout variant="error" errorMessage="Error occurred">
        <input type="text" />
      </InputLayout>
    )

    expect(screen.getByText('Error occurred')).toBeInTheDocument()
  })

  it('does not render errorMessage when variant is not error', () => {
    render(
      <InputLayout variant="default" errorMessage="Error occurred">
        <input type="text" />
      </InputLayout>
    )

    expect(screen.queryByText('Error occurred')).not.toBeInTheDocument()
  })

  it('renders helperText when variant is not error', () => {
    render(
      <InputLayout variant="default" helperText="Help text">
        <input type="text" />
      </InputLayout>
    )

    expect(screen.getByText('Help text')).toBeInTheDocument()
  })

  it('does not render helperText when variant is error', () => {
    render(
      <InputLayout variant="error" helperText="Help text">
        <input type="text" />
      </InputLayout>
    )

    expect(screen.queryByText('Help text')).not.toBeInTheDocument()
  })

  it('renders helperText with correct variant', () => {
    render(
      <InputLayout variant="success" helperText="Success help">
        <input type="text" />
      </InputLayout>
    )

    const helperText = screen.getByText('Success help')
    expect(helperText).toHaveAttribute('data-variant', 'success')
  })

  it('does not render icons when loading is true', () => {
    render(
      <InputLayout variant="success" loading>
        <input type="text" />
      </InputLayout>
    )

    expect(
      screen.queryByTestId('icon-RiCheckboxCircleFill')
    ).not.toBeInTheDocument()
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  it('renders disabled styles correctly', () => {
    render(
      <InputLayout disabled>
        <input type="text" />
      </InputLayout>
    )

    const inputContainer = screen.getByRole('textbox').parentElement
    expect(inputContainer).toHaveClass('bg-slate-400/50')
    expect(inputContainer).not.toHaveClass('ring-1')
  })

  it('renders enabled styles correctly', () => {
    render(
      <InputLayout>
        <input type="text" />
      </InputLayout>
    )

    const inputContainer = screen.getByRole('textbox').parentElement
    expect(inputContainer).toHaveClass('ring-1')
    expect(inputContainer).toHaveClass('ring-slate-300')
  })
})
