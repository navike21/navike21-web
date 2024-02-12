import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LinkTag } from './LinkTag'

describe('LinkTag', () => {
  it('should render LinkTag with children', () => {
    render(
      <LinkTag href="/">
        <div>test</div>
      </LinkTag>
    )
    expect(screen.getByText('test')).toBeTruthy()
  })

  it('should hover LinkTag', () => {
    render(
      <LinkTag href="/">
        <div>test</div>
      </LinkTag>
    )
    const link = screen.getByRole('link')
    userEvent.hover(link)

    const style = window.getComputedStyle(link)
    expect(style.opacity).toBe('0.7')
  })

  it('should render LinkTag with href parameter', () => {
    render(
      <LinkTag href="/">
        <div>test</div>
      </LinkTag>
    )

    const link = screen.getByRole('link')

    expect(link.getAttribute('href')).toBe('/')
  })
})
