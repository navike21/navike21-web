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
})
