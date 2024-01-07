import { render, screen } from '@testing-library/react'
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
})
