import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Card, ItemCard, ItemLinkCard } from './Card'

describe('Card component', () => {
  it('should render children correctly', () => {
    render(<Card>Test Content</Card>)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('should render line when showLine is true', () => {
    const { container } = render(<Card showLine>Content</Card>)
    const line = container.querySelector('.bg-gradient-horizontal')
    expect(line).toBeInTheDocument()
  })

  it('should not render line when showLine is false', () => {
    const { container } = render(<Card showLine={false}>Content</Card>)
    const line = container.querySelector('.bg-gradient-horizontal')
    expect(line).not.toBeInTheDocument()
  })

  it('should not render line by default', () => {
    const { container } = render(<Card>Content</Card>)
    const line = container.querySelector('.bg-gradient-horizontal')
    expect(line).not.toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(<Card className="custom-class">Content</Card>)
    const card = container.firstChild
    expect(card).toHaveClass('custom-class')
  })

  it('should have base styling classes', () => {
    const { container } = render(<Card>Content</Card>)
    const card = container.firstChild
    expect(card).toHaveClass('bg-white', 'shadow-md', 'rounded-lg', 'p-8')
  })
})

describe('ItemCard component', () => {
  it('should render title correctly', () => {
    render(<ItemCard title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('should render description correctly', () => {
    render(<ItemCard description="Test Description" />)
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('should render both title and description', () => {
    render(<ItemCard title="Title" description="Description" />)
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('should render icon when provided', () => {
    const { container } = render(
      <ItemCard icon="RiHomeLine" title="With Icon" />
    )
    const iconContainer = container.querySelector('.bg-gradient-diagonal')
    expect(iconContainer).toBeInTheDocument()
  })

  it('should not render icon container when icon not provided', () => {
    const { container } = render(<ItemCard title="No Icon" />)
    const iconContainer = container.querySelector('.bg-gradient-diagonal')
    expect(iconContainer).not.toBeInTheDocument()
  })

  it('should render line by default (inherited from Card)', () => {
    const { container } = render(<ItemCard title="Test" />)
    const line = container.querySelector('.bg-gradient-horizontal')
    expect(line).toBeInTheDocument()
  })

  it('should apply custom className', () => {
    const { container } = render(
      <ItemCard title="Test" className="custom-item-class" />
    )
    const card = container.querySelector('.custom-item-class')
    expect(card).toBeInTheDocument()
  })

  it('should render without any props', () => {
    const { container } = render(<ItemCard />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('should pass additional props to Card', () => {
    const { container } = render(<ItemCard showLine={false} title="Test" />)
    const line = container.querySelector('.bg-gradient-horizontal')
    expect(line).not.toBeInTheDocument()
  })
})

describe('ItemLinkCard component', () => {
  it('should render as a link with correct href', () => {
    render(<ItemLinkCard href="/test-page" title="Link Card" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/test-page')
  })

  it('should render ItemCard content inside link', () => {
    render(
      <ItemLinkCard href="/test" title="Card Title" description="Card Desc" />
    )
    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card Desc')).toBeInTheDocument()
  })

  it('should render with icon', () => {
    const { container } = render(
      <ItemLinkCard href="/test" icon="RiHomeLine" title="Icon Link" />
    )
    const iconContainer = container.querySelector('.bg-gradient-diagonal')
    expect(iconContainer).toBeInTheDocument()
  })

  it('should pass className to ItemCard', () => {
    const { container } = render(
      <ItemLinkCard href="/test" title="Test" className="custom-link-card" />
    )
    const card = container.querySelector('.custom-link-card')
    expect(card).toBeInTheDocument()
  })

  it('should have full width link wrapper', () => {
    render(<ItemLinkCard href="/test" title="Test" />)
    const link = screen.getByRole('link')
    expect(link).toHaveClass('w-full')
  })
})
