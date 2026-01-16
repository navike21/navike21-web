import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Container } from '.'

describe('Container component', () => {
  it('should render children correctly', () => {
    render(
      <Container>
        <div>Test Content</div>
      </Container>
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('should apply default container classes', () => {
    const { container } = render(
      <Container>
        <div>Content</div>
      </Container>
    )
    const containerDiv = container.firstChild
    expect(containerDiv).toHaveClass(
      'container',
      'max-w-7xl',
      'mx-auto',
      'w-[80%]'
    )
  })

  it('should apply custom className', () => {
    const { container } = render(
      <Container className="custom-container-class">
        <div>Content</div>
      </Container>
    )
    const containerDiv = container.firstChild
    expect(containerDiv).toHaveClass('custom-container-class')
  })

  it('should merge custom className with default classes', () => {
    const { container } = render(
      <Container className="custom-class">
        <div>Content</div>
      </Container>
    )
    const containerDiv = container.firstChild
    expect(containerDiv).toHaveClass(
      'container',
      'max-w-7xl',
      'mx-auto',
      'custom-class'
    )
  })

  it('should render multiple children', () => {
    render(
      <Container>
        <div>First Child</div>
        <div>Second Child</div>
        <div>Third Child</div>
      </Container>
    )
    expect(screen.getByText('First Child')).toBeInTheDocument()
    expect(screen.getByText('Second Child')).toBeInTheDocument()
    expect(screen.getByText('Third Child')).toBeInTheDocument()
  })

  it('should render complex nested children', () => {
    render(
      <Container>
        <section>
          <h1>Title</h1>
          <p>Paragraph</p>
        </section>
      </Container>
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Paragraph')).toBeInTheDocument()
  })
})
