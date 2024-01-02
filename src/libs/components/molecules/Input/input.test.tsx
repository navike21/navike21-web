import React from 'react'
import { render } from '@testing-library/react'
import { Input } from './Input'
import { MEDIUM, SMALL } from '@Constants/shared'

describe('Input Component', () => {
  test('should render input component with label', () => {
    const { getByLabelText } = render(<Input label="Label" />)
    expect(getByLabelText('Label')).toBeTruthy()
  })

  test('should render input component with label and value', () => {
    const { getByDisplayValue, getByLabelText } = render(
      <Input label="Label" defaultValue="Value" />
    )
    expect(getByDisplayValue('Value')).toBeTruthy()
    expect(getByLabelText('Label')).toBeTruthy()
  })

  test('should render input component with label and disabled', () => {
    const { getByLabelText } = render(<Input label="Label" disabled />)
    expect(getByLabelText('Label')).toBeTruthy()
  })

  test('should render input component with label and disabled', () => {
    const { getByLabelText } = render(<Input label="Label" disabled />)
    expect(getByLabelText('Label')).toBeTruthy()
  })

  test('should render input component with label and error', () => {
    const { getByLabelText } = render(<Input label="Label" error />)
    expect(getByLabelText('Label')).toBeTruthy()
  })

  test('should render input component with label and helperText', () => {
    const { getByLabelText } = render(
      <Input label="Label" error helperText="Helper Text" />
    )
    expect(getByLabelText('Label')).toBeTruthy()
  })

  test('should render input component with label and size', () => {
    const { getByLabelText } = render(<Input label="Label" size={SMALL} />)
    expect(getByLabelText('Label')).toBeTruthy()
  })

  test('should render input component with label and size', () => {
    const { getByLabelText } = render(<Input label="Label" size={MEDIUM} />)
    expect(getByLabelText('Label')).toBeTruthy()
  })
})
