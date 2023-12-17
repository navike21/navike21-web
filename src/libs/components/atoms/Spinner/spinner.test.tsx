import React from 'react'
import { render } from '@testing-library/react'
import { Spinner } from './Spinner'
import { MEDIUM, PRIMARY } from '@Constants/shared'

describe('Spinner', () => {
  it('should render Spinner', () => {
    render(<Spinner />)
  })

  it('should render Spinner with color', () => {
    render(<Spinner color={PRIMARY} />)
  })

  it('should render Spinner with size', () => {
    render(<Spinner size={MEDIUM} />)
  })

  it('should render Spinner with color and size', () => {
    render(<Spinner color={PRIMARY} size={MEDIUM} />)
  })
})
