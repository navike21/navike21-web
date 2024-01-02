import React from 'react'
import { render } from '@testing-library/react'

import { Button } from './Button'

describe('Button Component', () => {
  it('should render button with text', () => {
    const { getByText } = render(<Button>Button</Button>)
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text and outline', () => {
    const { getByText } = render(<Button outline>Button</Button>)
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text and disabled', () => {
    const { getByText } = render(<Button disabled>Button</Button>)
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text, outline and disabled', () => {
    const { getByText } = render(
      <Button outline disabled>
        Button
      </Button>
    )
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text and color', () => {
    const { getByText } = render(<Button color="primary">Button</Button>)
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text, outline and color', () => {
    const { getByText } = render(
      <Button outline color="primary">
        Button
      </Button>
    )
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text and type', () => {
    const { getByText } = render(<Button type="submit">Button</Button>)
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text, outline and type', () => {
    const { getByText } = render(
      <Button outline type="submit">
        Button
      </Button>
    )
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text and loading', () => {
    const { getByText } = render(<Button loading="true">Button</Button>)
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text, outline and loading', () => {
    const { getByText } = render(
      <Button outline loading="true">
        Button
      </Button>
    )
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text and size', () => {
    const { getByText } = render(<Button size="small">Button</Button>)
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text, outline and size', () => {
    const { getByText } = render(
      <Button outline size="small">
        Button
      </Button>
    )
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text and startIcon', () => {
    const { getByText } = render(<Button startIcon="test">Button</Button>)
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text, outline and startIcon', () => {
    const { getByText } = render(
      <Button outline startIcon="test">
        Button
      </Button>
    )
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text and endIcon', () => {
    const { getByText } = render(<Button endIcon="test">Button</Button>)
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text, outline and endIcon', () => {
    const { getByText } = render(
      <Button outline endIcon="test">
        Button
      </Button>
    )
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text, outline, color, type, loading, size, startIcon and endIcon', () => {
    const { getByText } = render(
      <Button
        outline
        color="primary"
        type="submit"
        loading="true"
        size="small"
        startIcon="test"
        endIcon="test"
      >
        Button
      </Button>
    )
    expect(getByText('Button')).toBeTruthy()
  })
})
