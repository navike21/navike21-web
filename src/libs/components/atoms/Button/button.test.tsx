import React from 'react'
import { render } from '@testing-library/react'

import { Button } from './Button'
import { EXTRA_LARGE, LARGE, MEDIUM, SMALL } from '@Constants/shared'

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

  it('should render button with text and size small', () => {
    const { getByText } = render(<Button size={SMALL}>Button</Button>)
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text and size medium', () => {
    const { getByText } = render(<Button size={MEDIUM}>Button</Button>)
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text and size large', () => {
    const { getByText } = render(<Button size={LARGE}>Button</Button>)
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text and size extra large', () => {
    const { getByText } = render(<Button size={EXTRA_LARGE}>Button</Button>)
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text, size small and outline', () => {
    const { getByText } = render(
      <Button size={SMALL} outline>
        Button
      </Button>
    )
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text, size medium and outline', () => {
    const { getByText } = render(
      <Button size={MEDIUM} outline>
        Button
      </Button>
    )
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text, size large and outline', () => {
    const { getByText } = render(
      <Button size={LARGE} outline>
        Button
      </Button>
    )
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text, size extra large and outline', () => {
    const { getByText } = render(
      <Button size={EXTRA_LARGE} outline>
        Button
      </Button>
    )
    expect(getByText('Button')).toBeTruthy()
  })

  it('should render button with text, size small and disabled', () => {
    const { getByText } = render(
      <Button size={SMALL} disabled>
        Button
      </Button>
    )
    expect(getByText('Button')).toBeTruthy()
  })
})
