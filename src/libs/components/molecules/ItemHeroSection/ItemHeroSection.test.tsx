import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ItemHeroSection } from './ItemHeroSection'
import type { StaticImageData } from 'next/image'

vi.mock('next/image', () => ({
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string | StaticImageData
    alt: string
    [key: string]: unknown
  }) => (
    <img src={typeof src === 'string' ? src : src.src} alt={alt} {...props} />
  )
}))

const mockImage: StaticImageData = {
  src: '/test-hero-image.jpg',
  width: 1920,
  height: 1080,
  blurDataURL: ''
}

describe('ItemHeroSection component', () => {
  const defaultProps = {
    heroImage: mockImage,
    title: 'Test Hero Title',
    description: 'Test hero description text'
  }

  describe('basic rendering', () => {
    it('should render the component', () => {
      const { container } = render(<ItemHeroSection {...defaultProps} />)
      expect(container.firstChild).toBeInTheDocument()
    })

    it('should render the title', () => {
      render(<ItemHeroSection {...defaultProps} />)
      expect(screen.getByText('Test Hero Title')).toBeInTheDocument()
    })

    it('should render the description', () => {
      render(<ItemHeroSection {...defaultProps} />)
      expect(screen.getByText('Test hero description text')).toBeInTheDocument()
    })

    it('should render the hero image', () => {
      render(<ItemHeroSection {...defaultProps} />)
      const image = screen.getByAltText(
        'Abstract shiny blue presentation background'
      )
      expect(image).toBeInTheDocument()
    })
  })

  describe('title styling', () => {
    it('should apply correct classes to title', () => {
      render(<ItemHeroSection {...defaultProps} />)
      const title = screen.getByText('Test Hero Title')
      expect(title).toHaveClass(
        'text-3xl',
        'font-semibold',
        'leading-tight',
        'text-white',
        'md:text-primary-text',
        'md:w-11/12',
        'lg:text-4xl',
        'xl:text-5xl'
      )
    })

    it('should render title as h2 element', () => {
      render(<ItemHeroSection {...defaultProps} />)
      const title = screen.getByRole('heading', { level: 2 })
      expect(title).toHaveTextContent('Test Hero Title')
    })
  })

  describe('description styling', () => {
    it('should apply correct classes to description', () => {
      render(<ItemHeroSection {...defaultProps} />)
      const description = screen.getByText('Test hero description text')
      expect(description).toHaveClass(
        'w-full',
        'text-white',
        'md:w-11/12',
        'md:text-primary-text',
        'lg:w-10/12'
      )
    })

    it('should render description as paragraph', () => {
      render(<ItemHeroSection {...defaultProps} />)
      const description = screen.getByText('Test hero description text')
      expect(description.tagName).toBe('P')
    })
  })

  describe('control actions', () => {
    it('should not render actions when controlActions is empty', () => {
      render(<ItemHeroSection {...defaultProps} />)
      const actionContainer = screen.queryByRole('link')
      expect(actionContainer).not.toBeInTheDocument()
    })

    it('should not render actions when controlActions is not provided', () => {
      const { container } = render(<ItemHeroSection {...defaultProps} />)
      const links = container.querySelectorAll('a')
      expect(links.length).toBe(0)
    })

    it('should render action buttons when provided', () => {
      const controlActions = [
        {
          children: 'Get Started',
          href: '/start',
          variant: 'primary' as const
        },
        {
          children: 'Learn More',
          href: '/learn',
          variant: 'secondary' as const
        }
      ]
      render(
        <ItemHeroSection {...defaultProps} controlActions={controlActions} />
      )
      expect(screen.getByText('Get Started')).toBeInTheDocument()
      expect(screen.getByText('Learn More')).toBeInTheDocument()
    })

    it('should render correct number of action buttons', () => {
      const controlActions = [
        { children: 'Button 1', href: '/1', variant: 'primary' as const },
        { children: 'Button 2', href: '/2', variant: 'secondary' as const },
        { children: 'Button 3', href: '/3', variant: 'primary' as const }
      ]
      render(
        <ItemHeroSection {...defaultProps} controlActions={controlActions} />
      )
      expect(screen.getByText('Button 1')).toBeInTheDocument()
      expect(screen.getByText('Button 2')).toBeInTheDocument()
      expect(screen.getByText('Button 3')).toBeInTheDocument()
    })

    it('should apply correct classes to actions container', () => {
      const controlActions = [
        { children: 'Action', href: '/action', variant: 'primary' as const }
      ]
      const { container } = render(
        <ItemHeroSection {...defaultProps} controlActions={controlActions} />
      )
      const section = container.querySelector('section')
      expect(section).toHaveClass('flex', 'flex-col', 'gap-4')
    })
  })

  describe('layout structure', () => {
    it('should render main container with correct classes', () => {
      const { container } = render(<ItemHeroSection {...defaultProps} />)
      const mainDiv = container.firstChild as HTMLElement
      expect(mainDiv).toHaveClass('bg-slate-950', 'relative', 'md:bg-white')
    })

    it('should render section with correct responsive classes', () => {
      const { container } = render(<ItemHeroSection {...defaultProps} />)
      const section = container.querySelector('section')
      expect(section).toHaveClass(
        'w-full',
        'flex',
        'flex-col',
        'gap-4',
        'md:w-9/12',
        'md:gap-6',
        'lg:w-7/12',
        'lg:gap-6'
      )
    })

    it('should apply correct classes to Container', () => {
      const { container } = render(<ItemHeroSection {...defaultProps} />)
      const containerDiv = container.querySelector(
        '.flex.items-center.justify-between'
      )
      expect(containerDiv).toHaveClass(
        'flex-wrap',
        'content-center',
        'z-10',
        'relative',
        'h-dvh',
        'max-h-250',
        'md:gap-8',
        'md:flex-nowrap',
        'lg:gap-20'
      )
    })
  })

  describe('parallax image', () => {
    it('should render ParallaxImage with correct props', () => {
      render(<ItemHeroSection {...defaultProps} />)
      const image = screen.getByAltText(
        'Abstract shiny blue presentation background'
      )
      expect(image).toHaveAttribute('src', '/test-hero-image.jpg')
    })

    it('should apply correct classes to ParallaxImage container', () => {
      const { container } = render(<ItemHeroSection {...defaultProps} />)
      const imageContainer = container.querySelector('.absolute.top-0.right-0')
      expect(imageContainer).toHaveClass(
        'h-full',
        'z-0',
        'w-12/12',
        'opacity-50',
        'clip-diagonal',
        'md:w-4/12',
        'md:opacity-100',
        'lg:w-5/12',
        'xl:w-6/12'
      )
    })

    it('should position image absolutely', () => {
      const { container } = render(<ItemHeroSection {...defaultProps} />)
      const imageContainer = container.querySelector('.absolute')
      expect(imageContainer).toHaveClass('absolute', 'top-0', 'right-0')
    })
  })

  describe('responsive design', () => {
    it('should have mobile-first background color', () => {
      const { container } = render(<ItemHeroSection {...defaultProps} />)
      const mainDiv = container.firstChild as HTMLElement
      expect(mainDiv).toHaveClass('bg-slate-950')
    })

    it('should have desktop background color', () => {
      const { container } = render(<ItemHeroSection {...defaultProps} />)
      const mainDiv = container.firstChild as HTMLElement
      expect(mainDiv).toHaveClass('md:bg-white')
    })

    it('should have responsive text sizing on title', () => {
      render(<ItemHeroSection {...defaultProps} />)
      const title = screen.getByText('Test Hero Title')
      expect(title).toHaveClass('text-3xl', 'lg:text-4xl', 'xl:text-5xl')
    })

    it('should have responsive width on description', () => {
      render(<ItemHeroSection {...defaultProps} />)
      const description = screen.getByText('Test hero description text')
      expect(description).toHaveClass('w-full', 'md:w-11/12', 'lg:w-10/12')
    })
  })

  describe('accessibility', () => {
    it('should have semantic section element', () => {
      const { container } = render(<ItemHeroSection {...defaultProps} />)
      const section = container.querySelector('section')
      expect(section).toBeInTheDocument()
    })

    it('should have proper heading hierarchy', () => {
      render(<ItemHeroSection {...defaultProps} />)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toBeInTheDocument()
    })

    it('should have alt text for image', () => {
      render(<ItemHeroSection {...defaultProps} />)
      const image = screen.getByAltText(
        'Abstract shiny blue presentation background'
      )
      expect(image).toBeInTheDocument()
    })
  })

  describe('edge cases', () => {
    it('should handle empty title', () => {
      render(<ItemHeroSection {...defaultProps} title="" />)
      const title = screen.getByRole('heading', { level: 2 })
      expect(title).toHaveTextContent('')
    })

    it('should handle empty description', () => {
      render(<ItemHeroSection {...defaultProps} description="" />)
      const { container } = render(
        <ItemHeroSection {...defaultProps} description="" />
      )
      const paragraphs = container.querySelectorAll('p')
      const hasEmptyDescription = Array.from(paragraphs).some(
        p => p.textContent === ''
      )
      expect(hasEmptyDescription).toBe(true)
    })

    it('should handle long title text', () => {
      const longTitle =
        'This is a very long title that should still render correctly even with many words'
      render(<ItemHeroSection {...defaultProps} title={longTitle} />)
      expect(screen.getByText(longTitle)).toBeInTheDocument()
    })

    it('should handle long description text', () => {
      const longDescription =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(10)
      render(
        <ItemHeroSection {...defaultProps} description={longDescription} />
      )

      expect(
        screen.getByText((content, element) => {
          return (
            element?.tagName.toLowerCase() === 'p' &&
            content.includes('Lorem ipsum')
          )
        })
      ).toBeInTheDocument()
    })

    it('should handle empty controlActions array', () => {
      render(<ItemHeroSection {...defaultProps} controlActions={[]} />)
      const links = screen.queryAllByRole('link')
      expect(links.length).toBe(0)
    })
  })
})
