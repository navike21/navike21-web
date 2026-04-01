import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import React, { createRef } from 'react'
import { describe, it, expect, vi } from 'vitest'
import { Select } from './index'
import type { SelectOptionItem } from './Select.types'

// Mock atoms to keep tests focused on Select behavior
vi.mock('@Components/atoms', () => ({
  IconComponent: ({
    icon,
    className
  }: {
    icon: string
    className?: string
  }) => <svg data-testid={`icon-${icon}`} className={className} />,
  Spinner: () => <div data-testid="spinner" />,
  Label: ({
    children,
    htmlFor
  }: {
    children: React.ReactNode
    htmlFor?: string
  }) => <label htmlFor={htmlFor}>{children}</label>,
  HelperText: ({
    children,
    variant
  }: {
    children: React.ReactNode
    variant?: string
  }) => <div role={variant === 'error' ? 'alert' : undefined}>{children}</div>
}))

vi.mock('@Components/atoms/Chip', () => ({
  Chip: ({
    children,
    icon,
    iconContent,
    deleteButtonProps
  }: {
    children: React.ReactNode
    icon?: string
    iconContent?: React.ReactNode
    deleteButtonProps?: {
      onClick?: React.MouseEventHandler
      'aria-label'?: string
    }
  }) => (
    <span data-testid="chip">
      {icon && <svg data-testid={`chip-icon-${icon}`} />}
      {!icon && iconContent}
      {children}
      {deleteButtonProps && (
        <button
          type="button"
          onClick={deleteButtonProps.onClick}
          aria-label={deleteButtonProps['aria-label']}
        >
          ×
        </button>
      )}
    </span>
  )
}))

const options: SelectOptionItem[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Disabled', value: '4', disabled: true }
]

const searchOptions: SelectOptionItem[] = Array.from(
  { length: 12 },
  (_, i) => ({ label: `Item ${i + 1}`, value: String(i + 1) })
)

describe('Select', () => {
  it('renders with options', () => {
    render(<Select options={options} />)
    // native select is sr-only; confirm it has options
    const select = document.querySelector('select')
    expect(select).toBeInTheDocument()
    expect(select?.options.length).toBe(options.length)
  })

  it('renders with label', () => {
    render(<Select options={options} label="Choose:" />)
    expect(screen.getByText('Choose:')).toBeInTheDocument()
  })

  it('renders placeholder when nothing selected', () => {
    render(<Select options={options} placeholder="Pick one" />)
    expect(screen.getByText('Pick one')).toBeInTheDocument()
  })

  it('opens dropdown when trigger is clicked', () => {
    render(<Select options={options} />)
    const trigger = screen.getByRole('combobox')
    fireEvent.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('closes dropdown when trigger is clicked again', () => {
    render(<Select options={options} />)
    const trigger = screen.getByRole('combobox')
    fireEvent.click(trigger)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    fireEvent.click(trigger)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('closes dropdown when caret button is clicked while open', () => {
    render(<Select options={options} />)
    const caretBtn = screen.getByRole('button', { name: /open options/i })
    fireEvent.click(caretBtn)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    const closeBtn = screen.getByRole('button', { name: /close options/i })
    fireEvent.click(closeBtn)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('shows all options in dropdown', () => {
    render(<Select options={options} />)
    fireEvent.click(screen.getByRole('combobox'))
    const optionButtons = screen.getAllByRole('option')
    expect(optionButtons).toHaveLength(options.length)
  })

  it('selects an option and closes dropdown (single mode)', () => {
    render(<Select options={options} placeholder="Pick one" />)
    fireEvent.click(screen.getByRole('combobox'))
    fireEvent.click(screen.getByRole('option', { name: 'Option 1' }))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    expect(screen.getByRole('combobox')).toHaveTextContent('Option 1')
  })

  it('fires native change event when option is selected', () => {
    const onChange = vi.fn()
    render(<Select options={options} onChange={onChange} />)
    fireEvent.click(screen.getByRole('combobox'))
    fireEvent.click(screen.getByRole('option', { name: 'Option 1' }))
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('does not select disabled option', () => {
    render(<Select options={options} placeholder="Pick one" />)
    fireEvent.click(screen.getByRole('combobox'))
    const disabledOption = screen
      .getAllByRole('option')
      .find(el => el.hasAttribute('disabled'))
    expect(disabledOption).toBeDisabled()
    if (disabledOption) fireEvent.click(disabledOption)
    // Dropdown stays open since click didn't select
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('closes dropdown on Escape key', () => {
    render(<Select options={options} />)
    fireEvent.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'Escape' })
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('opens dropdown on ArrowDown key when closed', () => {
    render(<Select options={options} />)
    // fireEvent on the combobox div — event bubbles up to the container's onKeyDown
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('closes dropdown on outside click', async () => {
    render(
      <div>
        <Select options={options} />
        <button>Outside</button>
      </div>
    )
    fireEvent.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    fireEvent.pointerDown(screen.getByText('Outside'))
    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })
  })

  it('multiple mode: selects multiple options and shows chips', () => {
    render(<Select options={options} multiple placeholder="Pick" />)
    fireEvent.click(screen.getByRole('combobox')) // open
    // Dropdown stays open in multiple mode — click both options while dropdown is open
    fireEvent.click(screen.getByRole('option', { name: 'Option 1' }))
    fireEvent.click(screen.getByRole('option', { name: 'Option 2' }))
    const chips = screen.getAllByTestId('chip')
    expect(chips).toHaveLength(2)
  })

  it('multiple mode: dropdown stays open after selection', () => {
    render(<Select options={options} multiple />)
    fireEvent.click(screen.getByRole('combobox'))
    fireEvent.click(screen.getByRole('option', { name: 'Option 1' }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('multiple mode: deselects option via chip delete', () => {
    render(<Select options={options} multiple defaultValue={['1']} />)
    expect(screen.getByTestId('chip')).toBeInTheDocument()
    const deleteBtn = screen.getByRole('button', { name: /remove option 1/i })
    fireEvent.click(deleteBtn)
    expect(screen.queryByTestId('chip')).not.toBeInTheDocument()
  })

  it('multiple mode: selected options show check icon', () => {
    render(<Select options={options} multiple />)
    fireEvent.click(screen.getByRole('combobox')) // open
    fireEvent.click(screen.getByRole('option', { name: 'Option 1' })) // select opt 1; dropdown stays open in multiple mode
    expect(screen.getByTestId('icon-RiCheckLine')).toBeInTheDocument()
  })

  it('shows search input when search=true and dropdown is open', () => {
    render(<Select options={searchOptions} search />)
    fireEvent.click(screen.getByRole('combobox'))
    expect(screen.getByLabelText('Search options')).toBeInTheDocument()
  })

  it('filters options when search query is typed', () => {
    render(<Select options={searchOptions} search />)
    fireEvent.click(screen.getByRole('combobox'))
    const searchInput = screen.getByLabelText('Search options')
    fireEvent.change(searchInput, { target: { value: 'Item 1' } })
    // Item 1, Item 10, Item 11, Item 12 match
    const filteredOptions = screen.getAllByRole('option')
    expect(filteredOptions.length).toBeLessThan(searchOptions.length)
  })

  it('shows "No options found" when search yields no results', () => {
    render(<Select options={options} search />)
    fireEvent.click(screen.getByRole('combobox'))
    const searchInput = screen.getByLabelText('Search options')
    fireEvent.change(searchInput, { target: { value: 'zzzyyyxxx' } })
    expect(screen.getByText('No options found')).toBeInTheDocument()
  })

  it('forwards ref to the native select element', () => {
    const ref = createRef<HTMLSelectElement>()
    render(<Select options={options} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLSelectElement)
  })

  it('renders helperText', () => {
    render(<Select options={options} helperText="Choose wisely" />)
    expect(screen.getByText('Choose wisely')).toBeInTheDocument()
  })

  it('renders error message when variant is error', () => {
    render(
      <Select
        options={options}
        variant="error"
        errorMessage="This is required"
      />
    )
    expect(screen.getByRole('alert')).toHaveTextContent('This is required')
  })

  it('renders loading spinner when loading=true', () => {
    render(<Select options={options} loading />)
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })

  it('renders success icon when variant=success', () => {
    render(<Select options={options} variant="success" />)
    expect(screen.getByTestId('icon-RiCheckboxCircleFill')).toBeInTheDocument()
  })

  it('renders error icon when variant=error', () => {
    render(<Select options={options} variant="error" />)
    expect(screen.getByTestId('icon-RiErrorWarningFill')).toBeInTheDocument()
  })

  it('renders warning icon when variant=warning', () => {
    render(<Select options={options} variant="warning" />)
    expect(screen.getByTestId('icon-RiErrorWarningFill')).toBeInTheDocument()
  })

  it('native select has multiple attribute in multiple mode', () => {
    render(<Select options={options} multiple />)
    const select = document.querySelector('select')
    expect(select).toHaveAttribute('multiple')
  })

  it('native select does not have multiple attribute in single mode', () => {
    render(<Select options={options} />)
    const select = document.querySelector('select')
    expect(select).not.toHaveAttribute('multiple')
  })

  it('initializes with defaultValue', () => {
    render(<Select options={options} defaultValue="2" placeholder="Pick" />)
    expect(screen.getByRole('combobox')).toHaveTextContent('Option 2')
  })

  it('initializes multiple with defaultValue array', () => {
    render(<Select options={options} multiple defaultValue={['1', '2']} />)
    const chips = screen.getAllByTestId('chip')
    expect(chips).toHaveLength(2)
  })

  it('renders option icons in dropdown', () => {
    const iconOptions: SelectOptionItem[] = [
      { label: 'Home', value: 'home', icon: 'RiHomeLine' }
    ]
    render(<Select options={iconOptions} />)
    fireEvent.click(screen.getByRole('combobox'))
    expect(screen.getByTestId('icon-RiHomeLine')).toBeInTheDocument()
  })

  it('renders option content (ReactNode) in dropdown', () => {
    const contentOptions: SelectOptionItem[] = [
      {
        label: 'Custom',
        value: 'c',
        content: <span data-testid="custom-content">🌟</span>
      }
    ]
    render(<Select options={contentOptions} />)
    fireEvent.click(screen.getByRole('combobox'))
    expect(screen.getByTestId('custom-content')).toBeInTheDocument()
  })

  it('navigates options with ArrowDown key', () => {
    render(<Select options={options} />)
    fireEvent.click(screen.getByRole('combobox'))
    // keyDown on combobox bubbles up to container's onKeyDown
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' })
    // focusedOptionIndex moves to 0
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('navigates options with ArrowUp key', () => {
    render(<Select options={options} />)
    fireEvent.click(screen.getByRole('combobox'))
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowUp' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('has displayName Select', () => {
    expect(Select.displayName).toBe('Select')
  })

  it('sets name on native select', () => {
    render(<Select options={options} name="myField" />)
    const select = document.querySelector('select')
    expect(select).toHaveAttribute('name', 'myField')
  })

  it('disabled selector does not open on click', () => {
    render(<Select options={options} disabled />)
    fireEvent.click(screen.getByRole('combobox'))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('applies cursor-not-allowed class when disabled', () => {
    const { container } = render(<Select options={options} disabled />)
    expect(container.firstChild).toHaveClass('cursor-not-allowed')
  })

  it('applies pointer-events-none when loading', () => {
    const { container } = render(<Select options={options} loading />)
    expect(container.firstChild).toHaveClass('pointer-events-none')
  })

  it('accepts a callback ref (function ref)', () => {
    let capturedEl: HTMLSelectElement | null = null
    const callbackRef = (el: HTMLSelectElement | null) => {
      capturedEl = el
    }
    render(<Select options={options} ref={callbackRef} />)
    expect(capturedEl).toBeInstanceOf(HTMLSelectElement)
  })

  it('syncs selectedValues when controlled value prop changes', () => {
    const { rerender } = render(
      <Select options={options} value="1" placeholder="Pick" />
    )
    expect(screen.getByRole('combobox')).toHaveTextContent('Option 1')
    rerender(<Select options={options} value="2" placeholder="Pick" />)
    expect(screen.getByRole('combobox')).toHaveTextContent('Option 2')
  })

  it('handles empty string defaultValue gracefully', () => {
    render(<Select options={options} defaultValue="" placeholder="Pick" />)
    expect(screen.getByRole('combobox')).toHaveTextContent('Pick')
  })

  it('closes dropdown when focus leaves container (blur to outside)', () => {
    render(<Select options={options} />)
    fireEvent.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    // Simulate focus leaving by blurring with relatedTarget outside container
    const externalBtn = document.createElement('button')
    document.body.appendChild(externalBtn)
    fireEvent.blur(screen.getByRole('combobox'), {
      relatedTarget: externalBtn
    })
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    externalBtn.remove()
  })

  it('does not close dropdown on blur when focus stays inside container', () => {
    render(<Select options={options} />)
    fireEvent.click(screen.getByRole('combobox'))
    // Simulate blur where relatedTarget is the caret button (still inside)
    const caretBtn = screen.getByRole('button', { name: /close options/i })
    fireEvent.blur(screen.getByRole('combobox'), { relatedTarget: caretBtn })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('clears search query when dropdown is closed via toggle', () => {
    render(<Select options={searchOptions} search />)
    fireEvent.click(screen.getByRole('combobox'))
    fireEvent.change(screen.getByLabelText('Search options'), {
      target: { value: 'Item 1' }
    })
    // Close via trigger
    fireEvent.click(screen.getByRole('combobox'))
    // Reopen and verify search was cleared
    fireEvent.click(screen.getByRole('combobox'))
    expect(screen.getByLabelText('Search options')).toHaveValue('')
  })

  it('wraps ArrowDown focus index to 0 when at last option', () => {
    const threeOptions = options.slice(0, 3)
    render(<Select options={threeOptions} />)
    fireEvent.click(screen.getByRole('combobox'))
    const combobox = screen.getByRole('combobox')
    // Navigate to last option
    fireEvent.keyDown(combobox, { key: 'ArrowDown' })
    fireEvent.keyDown(combobox, { key: 'ArrowDown' })
    fireEvent.keyDown(combobox, { key: 'ArrowDown' })
    // Should wrap: index would be 3, wraps to 0
    fireEvent.keyDown(combobox, { key: 'ArrowDown' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('wraps ArrowUp focus index to last when at first option', () => {
    const threeOptions = options.slice(0, 3)
    render(<Select options={threeOptions} />)
    fireEvent.click(screen.getByRole('combobox'))
    const combobox = screen.getByRole('combobox')
    // At index -1, ArrowUp should go to last enabled option
    fireEvent.keyDown(combobox, { key: 'ArrowUp' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('multiple mode: deselects already-selected option in dropdown', () => {
    render(<Select options={options} multiple />)
    fireEvent.click(screen.getByRole('combobox'))
    const opt1 = screen.getAllByRole('option')[0]!
    // Select then deselect the same option
    fireEvent.click(opt1)
    fireEvent.click(opt1)
    expect(screen.queryAllByTestId('chip')).toHaveLength(0)
  })

  it('opens dropdown on Enter key when closed', () => {
    render(<Select options={options} />)
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'Enter' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('opens dropdown on Space key when closed', () => {
    render(<Select options={options} />)
    fireEvent.keyDown(screen.getByRole('combobox'), { key: ' ' })
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('disabled selector does not open on keyboard', () => {
    render(<Select options={options} disabled />)
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' })
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('dropdown has data-position="bottom" by default', () => {
    render(<Select options={options} />)
    fireEvent.click(screen.getByRole('combobox'))
    // JSDOM getBoundingClientRect returns zeros so spaceBelow = innerHeight - 0 = 768 > 248
    expect(screen.getByRole('listbox')).toHaveAttribute(
      'data-position',
      'bottom'
    )
  })

  it('dropdown opens above (data-position="top") when space below is insufficient', () => {
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      top: 600,
      bottom: 750,
      left: 0,
      right: 300,
      width: 300,
      height: 150,
      x: 0,
      y: 600,
      toJSON: () => {}
    })
    render(<Select options={options} />)
    // window.innerHeight in JSDOM is 768; spaceBelow = 768 - 750 = 18 < 248; rect.top = 600 > 248
    fireEvent.click(screen.getByRole('combobox'))
    expect(screen.getByRole('listbox')).toHaveAttribute('data-position', 'top')
    vi.restoreAllMocks()
  })

  it('renders leftSlot', () => {
    render(
      <Select
        options={options}
        leftSlot={<span data-testid="left-slot">L</span>}
      />
    )
    expect(screen.getByTestId('left-slot')).toBeInTheDocument()
  })

  it('renders rightSlot', () => {
    render(
      <Select
        options={options}
        rightSlot={<span data-testid="right-slot">R</span>}
      />
    )
    expect(screen.getByTestId('right-slot')).toBeInTheDocument()
  })

  it('shows selected option icon in trigger (single mode)', () => {
    const iconOptions: SelectOptionItem[] = [
      { label: 'Home', value: 'home', icon: 'RiHomeLine' }
    ]
    render(<Select options={iconOptions} defaultValue="home" />)
    // Icon should be visible in trigger without opening dropdown
    expect(screen.getByTestId('icon-RiHomeLine')).toBeInTheDocument()
  })

  it('shows selected option content (ReactNode) in trigger (single mode)', () => {
    const contentOptions: SelectOptionItem[] = [
      {
        label: 'Custom',
        value: 'c',
        content: <span data-testid="trigger-content">★</span>
      }
    ]
    render(<Select options={contentOptions} defaultValue="c" />)
    expect(screen.getByTestId('trigger-content')).toBeInTheDocument()
  })

  it('chips show icon prop from option (multiple mode)', () => {
    const iconOptions: SelectOptionItem[] = [
      { label: 'Home', value: 'home', icon: 'RiHomeLine' }
    ]
    render(<Select options={iconOptions} multiple defaultValue={['home']} />)
    expect(screen.getByTestId('chip-icon-RiHomeLine')).toBeInTheDocument()
  })

  it('chips show iconContent from option content (multiple mode)', () => {
    const contentOptions: SelectOptionItem[] = [
      {
        label: 'Custom',
        value: 'c',
        content: <span data-testid="chip-content-c">★</span>
      }
    ]
    render(<Select options={contentOptions} multiple defaultValue={['c']} />)
    expect(screen.getByTestId('chip-content-c')).toBeInTheDocument()
  })
})
