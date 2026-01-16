import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { IconComponent } from '.'

describe('IconComponent', () => {
  it('should render RemixIcon component', () => {
    const { container } = render(<IconComponent icon="RiHomeLine" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(
      <IconComponent icon="RiHomeLine" className="custom-icon-class" />
    )
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('custom-icon-class')
  })

  it('should render different icon types', () => {
    const { container: container1 } = render(
      <IconComponent icon="RiSearchLine" />
    )
    expect(container1.querySelector('svg')).toBeInTheDocument()

    const { container: container2 } = render(
      <IconComponent icon="RiMenuLine" />
    )
    expect(container2.querySelector('svg')).toBeInTheDocument()

    const { container: container3 } = render(
      <IconComponent icon="RiCloseLine" />
    )
    expect(container3.querySelector('svg')).toBeInTheDocument()
  })

  it('should apply multiple className values', () => {
    const { container } = render(
      <IconComponent icon="RiHomeLine" className="w-6 h-6 text-blue-500" />
    )
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('w-6', 'h-6', 'text-blue-500')
  })

  it('should render without className', () => {
    const { container } = render(<IconComponent icon="RiHomeLine" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
