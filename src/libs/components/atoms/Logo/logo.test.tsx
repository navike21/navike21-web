import React from 'react'
import { render } from '@testing-library/react'
import { Logo } from './Logo'
import { PRIMARY, SMALL } from '@Constants/shared'

describe('Logo', () => {
  it('should render Logo', () => {
    render(<Logo />)
  })

  it('should render Logo with color', () => {
    render(<Logo color={PRIMARY} />)
  })

  it('should render Logo with size', () => {
    render(<Logo size={SMALL} />)
  })

  it('should render Logo with color and size', () => {
    render(<Logo color={PRIMARY} size={SMALL} />)
  })
})
