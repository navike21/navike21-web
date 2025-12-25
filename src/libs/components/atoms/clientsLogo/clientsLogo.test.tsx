import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import {
  Almazen,
  Anker,
  Beats,
  Carbyne,
  Circurela,
  ColegioLaUnion,
  EuroGourmet,
  HammerBlocs,
  RkPower,
  TentacionesGourmet
} from './index'

describe('ClientsLogo components', () => {
  const logos = [
    { name: 'Almazen', Component: Almazen },
    { name: 'Anker', Component: Anker },
    { name: 'Beats', Component: Beats },
    { name: 'Carbyne', Component: Carbyne },
    { name: 'Circurela', Component: Circurela },
    { name: 'ColegioLaUnion', Component: ColegioLaUnion },
    { name: 'EuroGourmet', Component: EuroGourmet },
    { name: 'HammerBlocs', Component: HammerBlocs },
    { name: 'RkPower', Component: RkPower },
    { name: 'TentacionesGourmet', Component: TentacionesGourmet }
  ]

  describe('basic rendering', () => {
    logos.forEach(({ name, Component }) => {
      it(`should render ${name} logo`, () => {
        const { container } = render(<Component />)
        const svg = container.querySelector('svg')
        expect(svg).toBeInTheDocument()
      })
    })
  })

  describe('color variants', () => {
    logos.forEach(({ name, Component }) => {
      it(`should render ${name} with color`, () => {
        const { container } = render(<Component isColor />)
        const svg = container.querySelector('svg')
        expect(svg).toBeInTheDocument()
      })

      it(`should render ${name} without color (default)`, () => {
        const { container } = render(<Component isColor={false} />)
        const svg = container.querySelector('svg')
        expect(svg).toBeInTheDocument()
      })
    })
  })

  describe('custom props', () => {
    logos.forEach(({ name, Component }) => {
      it(`should apply className to ${name}`, () => {
        const { container } = render(
          <Component className="custom-logo-class" />
        )
        const svg = container.querySelector('svg')
        expect(svg).toHaveClass('custom-logo-class')
      })

      it(`should apply custom attributes to ${name}`, () => {
        const { container } = render(
          <Component data-testid={`${name}-logo`} aria-label={`${name} Logo`} />
        )
        const svg = container.querySelector('svg')
        expect(svg).toHaveAttribute('data-testid', `${name}-logo`)
        expect(svg).toHaveAttribute('aria-label', `${name} Logo`)
      })
    })
  })

  describe('SVG structure', () => {
    logos.forEach(({ name, Component }) => {
      it(`${name} should have viewBox attribute`, () => {
        const { container } = render(<Component />)
        const svg = container.querySelector('svg')
        expect(svg).toHaveAttribute('viewBox')
      })

      it(`${name} should have fill="none" attribute`, () => {
        const { container } = render(<Component />)
        const svg = container.querySelector('svg')
        expect(svg).toHaveAttribute('fill', 'none')
      })

      it(`${name} should contain path elements`, () => {
        const { container } = render(<Component />)
        const paths = container.querySelectorAll('path')
        expect(paths.length).toBeGreaterThan(0)
      })
    })
  })

  describe('responsive behavior', () => {
    logos.forEach(({ name, Component }) => {
      it(`${name} should work with different sizes via className`, () => {
        const { container: smallContainer } = render(
          <Component className="w-12 h-12" />
        )
        const smallSvg = smallContainer.querySelector('svg')
        expect(smallSvg).toHaveClass('w-12', 'h-12')

        const { container: largeContainer } = render(
          <Component className="w-32 h-32" />
        )
        const largeSvg = largeContainer.querySelector('svg')
        expect(largeSvg).toHaveClass('w-32', 'h-32')
      })
    })
  })
})
