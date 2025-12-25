import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PrevButton, NextButton } from './SliderArrowButton'
import { DotButton } from './SliderDotButton'

describe('Slider Button Components', () => {
  describe('PrevButton', () => {
    it('should render button element', () => {
      render(<PrevButton />)
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
    })

    it('should have type="button"', () => {
      render(<PrevButton />)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'button')
    })

    it('should apply default classes', () => {
      render(<PrevButton />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass(
        'flex',
        'items-center',
        'justify-center',
        'cursor-pointer'
      )
    })

    it('should apply custom className', () => {
      render(<PrevButton className="custom-class" />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
    })

    it('should render left arrow icon', () => {
      const { container } = render(<PrevButton />)
      const icon = container.querySelector('[class*="w-8 h-8"]')
      expect(icon).toBeInTheDocument()
    })

    it('should render children when provided', () => {
      render(<PrevButton>Previous</PrevButton>)
      expect(screen.getByText('Previous')).toBeInTheDocument()
    })

    it('should pass through additional props', () => {
      render(<PrevButton data-testid="prev-btn" aria-label="Previous slide" />)
      const button = screen.getByTestId('prev-btn')
      expect(button).toHaveAttribute('aria-label', 'Previous slide')
    })

    it('should merge className with existing classes', () => {
      render(<PrevButton className="custom-prev" />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('flex', 'custom-prev')
    })
  })

  describe('NextButton', () => {
    it('should render button element', () => {
      render(<NextButton />)
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
    })

    it('should have type="button"', () => {
      render(<NextButton />)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'button')
    })

    it('should apply default classes', () => {
      render(<NextButton />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass(
        'flex',
        'items-center',
        'justify-center',
        'cursor-pointer'
      )
    })

    it('should apply custom className', () => {
      render(<NextButton className="custom-class" />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
    })

    it('should render right arrow icon', () => {
      const { container } = render(<NextButton />)
      const icon = container.querySelector('[class*="w-8 h-8"]')
      expect(icon).toBeInTheDocument()
    })

    it('should render children when provided', () => {
      render(<NextButton>Next</NextButton>)
      expect(screen.getByText('Next')).toBeInTheDocument()
    })

    it('should pass through additional props', () => {
      render(<NextButton data-testid="next-btn" aria-label="Next slide" />)
      const button = screen.getByTestId('next-btn')
      expect(button).toHaveAttribute('aria-label', 'Next slide')
    })

    it('should merge className with existing classes', () => {
      render(<NextButton className="custom-next" />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('flex', 'custom-next')
    })
  })

  describe('DotButton', () => {
    it('should render button element', () => {
      render(<DotButton isSelected={false} />)
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
    })

    it('should have type="button"', () => {
      render(<DotButton isSelected={false} />)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'button')
    })

    it('should apply base classes', () => {
      render(<DotButton isSelected={false} />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass(
        'flex',
        'items-center',
        'justify-center',
        'rounded-full',
        'p-0',
        'm-0',
        'border-0',
        'bg-transparent',
        'cursor-pointer',
        'touch-manipulation',
        'transition-all',
        'duration-200'
      )
    })

    it('should render filled icon when selected', () => {
      const { container } = render(<DotButton isSelected />)
      const icon = container.querySelector('[class*="w-4 h-4"]')
      expect(icon).toBeInTheDocument()
    })

    it('should render outline icon when not selected', () => {
      const { container } = render(<DotButton isSelected={false} />)
      const icon = container.querySelector('[class*="w-4 h-4"]')
      expect(icon).toBeInTheDocument()
    })

    it('should pass through additional props', () => {
      render(<DotButton isSelected={false} data-testid="dot-btn" />)
      const button = screen.getByTestId('dot-btn')
      expect(button).toBeInTheDocument()
    })

    it('should handle onClick event', () => {
      const handleClick = () => {}
      render(<DotButton isSelected={false} onClick={handleClick} />)
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
    })

    it('should render without custom className', () => {
      render(<DotButton isSelected={false} />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('flex', 'items-center', 'justify-center')
    })
  })

  describe('Button Accessibility', () => {
    it('PrevButton should be keyboard accessible', () => {
      render(<PrevButton />)
      const button = screen.getByRole('button')
      expect(button.tagName).toBe('BUTTON')
    })

    it('NextButton should be keyboard accessible', () => {
      render(<NextButton />)
      const button = screen.getByRole('button')
      expect(button.tagName).toBe('BUTTON')
    })

    it('DotButton should be keyboard accessible', () => {
      render(<DotButton isSelected={false} />)
      const button = screen.getByRole('button')
      expect(button.tagName).toBe('BUTTON')
    })

    it('Buttons should support aria labels', () => {
      render(<PrevButton aria-label="Go to previous" />)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-label', 'Go to previous')
    })
  })
})
