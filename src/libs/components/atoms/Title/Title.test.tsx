import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Title } from '.'

describe('Title component', () => {
  describe('basic rendering', () => {
    it('should render title text', () => {
      render(<Title title="Test Title" />)
      expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    it('should render title as h2 element', () => {
      render(<Title title="Main Title" />)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Main Title')
    })

    it('should render without subtitle', () => {
      render(<Title title="Only Title" />)
      expect(screen.getByText('Only Title')).toBeInTheDocument()
      expect(screen.queryByRole('paragraph')).not.toBeInTheDocument()
    })
  })

  describe('subtitle rendering', () => {
    it('should render subtitle when provided', () => {
      render(<Title title="Title" subTitle="This is a subtitle" />)
      expect(screen.getByText('This is a subtitle')).toBeInTheDocument()
    })

    it('should render subtitle as paragraph', () => {
      const { container } = render(
        <Title title="Title" subTitle="Subtitle text" />
      )
      const paragraph = container.querySelector('p')
      expect(paragraph).toBeInTheDocument()
      expect(paragraph).toHaveTextContent('Subtitle text')
    })

    it('should not render subtitle element when subTitle is undefined', () => {
      const { container } = render(<Title title="Title" />)
      const paragraph = container.querySelector('p')
      expect(paragraph).not.toBeInTheDocument()
    })

    it('should render both title and subtitle together', () => {
      render(<Title title="Main Title" subTitle="Supporting text" />)
      expect(screen.getByText('Main Title')).toBeInTheDocument()
      expect(screen.getByText('Supporting text')).toBeInTheDocument()
    })
  })

  describe('styling', () => {
    it('should have title-area container with default classes', () => {
      const { container } = render(<Title title="Title" />)
      const titleArea = container.querySelector('.title-area')
      expect(titleArea).toHaveClass('flex', 'flex-col', 'gap-5', 'items-center')
    })

    it('should apply title styling classes', () => {
      render(<Title title="Styled Title" />)
      const heading = screen.getByRole('heading')
      expect(heading).toHaveClass(
        'text-center',
        'text-3xl',
        'font-medium',
        'w-full',
        'md:w-10/12',
        'lg:text-4xl'
      )
    })

    it('should apply subtitle styling classes', () => {
      const { container } = render(<Title title="Title" subTitle="Subtitle" />)
      const paragraph = container.querySelector('p')
      expect(paragraph).toHaveClass('text-center', 'md:w-10/12')
    })
  })

  describe('custom className', () => {
    it('should apply custom className to container', () => {
      const { container } = render(
        <Title title="Title" className="custom-title-class" />
      )
      const titleArea = container.querySelector('.title-area')
      expect(titleArea).toHaveClass('custom-title-class')
    })

    it('should merge custom className with default classes', () => {
      const { container } = render(
        <Title title="Title" className="my-custom-class" />
      )
      const titleArea = container.querySelector('.title-area')
      expect(titleArea).toHaveClass(
        'title-area',
        'flex',
        'flex-col',
        'gap-5',
        'items-center',
        'my-custom-class'
      )
    })

    it('should work without custom className', () => {
      const { container } = render(<Title title="Title" />)
      const titleArea = container.querySelector('.title-area')
      expect(titleArea).toBeInTheDocument()
    })
  })

  describe('content variations', () => {
    it('should handle long title text', () => {
      const longTitle =
        'This is a very long title that should still render correctly in the component'
      render(<Title title={longTitle} />)
      expect(screen.getByText(longTitle)).toBeInTheDocument()
    })

    it('should handle long subtitle text', () => {
      const longSubtitle =
        'This is a very long subtitle text that provides additional context and information'
      render(<Title title="Title" subTitle={longSubtitle} />)
      expect(screen.getByText(longSubtitle)).toBeInTheDocument()
    })

    it('should handle special characters in title', () => {
      render(<Title title="Title & Subtitle © 2024" />)
      expect(screen.getByText('Title & Subtitle © 2024')).toBeInTheDocument()
    })

    it('should handle HTML entities in subtitle', () => {
      render(<Title title="Title" subTitle="Less than < and greater than >" />)
      expect(
        screen.getByText('Less than < and greater than >')
      ).toBeInTheDocument()
    })
  })

  describe('responsive behavior', () => {
    it('should have responsive width classes on title', () => {
      render(<Title title="Responsive Title" />)
      const heading = screen.getByRole('heading')
      expect(heading).toHaveClass('w-full', 'md:w-10/12')
    })

    it('should have responsive text size classes', () => {
      render(<Title title="Responsive Text" />)
      const heading = screen.getByRole('heading')
      expect(heading).toHaveClass('text-3xl', 'lg:text-4xl')
    })

    it('should have responsive width on subtitle', () => {
      const { container } = render(
        <Title title="Title" subTitle="Responsive subtitle" />
      )
      const paragraph = container.querySelector('p')
      expect(paragraph).toHaveClass('md:w-10/12')
    })
  })

  describe('component structure', () => {
    it('should wrap content in a div container', () => {
      const { container } = render(<Title title="Title" />)
      expect(container.firstChild).toBeInstanceOf(HTMLDivElement)
    })

    it('should maintain correct DOM hierarchy', () => {
      const { container } = render(<Title title="Title" subTitle="Subtitle" />)
      const titleArea = container.querySelector('.title-area')
      const h2 = titleArea?.querySelector('h2')
      const p = titleArea?.querySelector('p')

      expect(h2).toBeInTheDocument()
      expect(p).toBeInTheDocument()
    })
  })
})
