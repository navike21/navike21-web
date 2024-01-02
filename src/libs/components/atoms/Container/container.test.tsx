import React from 'react'
import { render } from '@testing-library/react'
import { Container } from './Container'

describe('Container', () => {
  it('should render Container with children', () => {
    const { getByText } = render(
      <Container>
        <div>test</div>
      </Container>
    )
    expect(getByText('test')).toBeTruthy()
  })
})
