import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ItemFooter, LinkFooter } from './ItemFooter'

// Mock Next.js Link
vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode
    href: string
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}))

describe('ItemFooter component', () => {
  describe('basic rendering', () => {
    it('should render section element', () => {
      const { container } = render(<ItemFooter>Content</ItemFooter>)
      const section = container.querySelector('section')
      expect(section).toBeInTheDocument()
    })

    it('should render children', () => {
      render(<ItemFooter>Test content</ItemFooter>)
      expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('should apply default classes', () => {
      const { container } = render(<ItemFooter>Content</ItemFooter>)
      const section = container.querySelector('section')
      expect(section).toHaveClass(
        'col-span-2',
        'flex',
        'flex-col',
        'gap-4',
        'md:col-span-1'
      )
    })
  })

  describe('with title', () => {
    it('should render title when provided', () => {
      render(<ItemFooter title="Test Title">Content</ItemFooter>)
      expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    it('should not render title when not provided', () => {
      const { container } = render(<ItemFooter>Content</ItemFooter>)
      const heading = container.querySelector('h2')
      expect(heading).not.toBeInTheDocument()
    })

    it('should render title as h2 element', () => {
      render(<ItemFooter title="Test Title">Content</ItemFooter>)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveTextContent('Test Title')
    })

    it('should apply correct classes to title', () => {
      render(<ItemFooter title="Test Title">Content</ItemFooter>)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toHaveClass(
        'text-md',
        'uppercase',
        'font-semibold',
        'tracking-wide'
      )
    })
  })

  describe('with custom className', () => {
    it('should apply custom className', () => {
      const { container } = render(
        <ItemFooter className="custom-class">Content</ItemFooter>
      )
      const section = container.querySelector('section')
      expect(section).toHaveClass('custom-class')
    })

    it('should merge custom className with default classes', () => {
      const { container } = render(
        <ItemFooter className="custom-class">Content</ItemFooter>
      )
      const section = container.querySelector('section')
      expect(section).toHaveClass('col-span-2', 'flex', 'custom-class')
    })
  })

  describe('children rendering', () => {
    it('should render multiple children', () => {
      render(
        <ItemFooter>
          <p>Child 1</p>
          <p>Child 2</p>
        </ItemFooter>
      )
      expect(screen.getByText('Child 1')).toBeInTheDocument()
      expect(screen.getByText('Child 2')).toBeInTheDocument()
    })

    it('should render complex children', () => {
      render(
        <ItemFooter title="Title">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </ItemFooter>
      )
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
    })
  })
})

describe('LinkFooter component', () => {
  describe('basic rendering', () => {
    it('should render as link element', () => {
      render(<LinkFooter href="/test">Link text</LinkFooter>)
      const link = screen.getByRole('link')
      expect(link).toBeInTheDocument()
    })

    it('should render children', () => {
      render(<LinkFooter href="/test">Link content</LinkFooter>)
      expect(screen.getByText('Link content')).toBeInTheDocument()
    })

    it('should apply default classes', () => {
      render(<LinkFooter href="/test">Link</LinkFooter>)
      const link = screen.getByRole('link')
      expect(link).toHaveClass(
        'text-sm',
        'text-white/80',
        'decoration-0',
        'transition-all',
        'ease-in-out',
        'duration-500',
        'hover:text-white'
      )
    })
  })

  describe('href prop', () => {
    it('should render with provided href', () => {
      render(<LinkFooter href="/test-page">Link</LinkFooter>)
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '/test-page')
    })

    it('should render with empty href when not provided', () => {
      render(<LinkFooter>Link</LinkFooter>)
      const link = screen.getByText('Link')
      // Next.js Link with empty href renders as an anchor with empty href
      expect(link).toBeInTheDocument()
    })

    it('should handle external links', () => {
      render(<LinkFooter href="https://example.com">External</LinkFooter>)
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', 'https://example.com')
    })
  })

  describe('target prop', () => {
    it('should apply target attribute when provided', () => {
      render(
        <LinkFooter href="/test" target="_blank">
          Link
        </LinkFooter>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('target', '_blank')
    })

    it('should not have target attribute when not provided', () => {
      render(<LinkFooter href="/test">Link</LinkFooter>)
      const link = screen.getByRole('link')
      expect(link).not.toHaveAttribute('target')
    })
  })

  describe('rel prop', () => {
    it('should apply rel attribute when provided', () => {
      render(
        <LinkFooter href="/test" rel="noopener noreferrer">
          Link
        </LinkFooter>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('should not have rel attribute when not provided', () => {
      render(<LinkFooter href="/test">Link</LinkFooter>)
      const link = screen.getByRole('link')
      expect(link).not.toHaveAttribute('rel')
    })
  })

  describe('custom className', () => {
    it('should apply custom className', () => {
      render(
        <LinkFooter href="/test" className="custom-link-class">
          Link
        </LinkFooter>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveClass('custom-link-class')
    })

    it('should merge custom className with default classes', () => {
      render(
        <LinkFooter href="/test" className="custom-class">
          Link
        </LinkFooter>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveClass('text-sm', 'text-white/80', 'custom-class')
    })
  })

  describe('children rendering', () => {
    it('should render text children', () => {
      render(<LinkFooter href="/test">Simple text</LinkFooter>)
      expect(screen.getByText('Simple text')).toBeInTheDocument()
    })

    it('should render element children', () => {
      render(
        <LinkFooter href="/test">
          <span>Nested element</span>
        </LinkFooter>
      )
      expect(screen.getByText('Nested element')).toBeInTheDocument()
    })

    it('should render complex children structure', () => {
      render(
        <LinkFooter href="/test">
          <div>
            <span>Icon</span>
            <span>Text</span>
          </div>
        </LinkFooter>
      )
      expect(screen.getByText('Icon')).toBeInTheDocument()
      expect(screen.getByText('Text')).toBeInTheDocument()
    })
  })

  describe('combined props', () => {
    it('should handle all props together', () => {
      render(
        <LinkFooter
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-class"
        >
          Full link
        </LinkFooter>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', 'https://example.com')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      expect(link).toHaveClass('custom-class')
      expect(screen.getByText('Full link')).toBeInTheDocument()
    })
  })
})
