import React from 'react'
import { render } from '@testing-library/react'

import { Button } from './Button'

describe('Button Component', () => {
	it('should render button with text', () => {
		const { getByText } = render(<Button>Button</Button>)
		expect(getByText('Button')).toBeTruthy()
	})

	it('should render button with text and outline', () => {
		const { getByText } = render(<Button outline>Button</Button>)
		expect(getByText('Button')).toBeTruthy()
	})

	it('should render button with text and disabled', () => {
		const { getByText } = render(<Button disabled>Button</Button>)
		expect(getByText('Button')).toBeTruthy()
	})

	it('should render button with text, outline and disabled', () => {
		const { getByText } = render(
			<Button outline disabled>
				Button
			</Button>
		)
		expect(getByText('Button')).toBeTruthy()
	})

	it('should render button with text and size small', () => {
		const { getByText } = render(<Button size="small">Button</Button>)
		expect(getByText('Button')).toBeTruthy()
	})

	it('should render button with text and size medium', () => {
		const { getByText } = render(<Button size="medium">Button</Button>)
		expect(getByText('Button')).toBeTruthy()
	})

	it('should render button with text and size large', () => {
		const { getByText } = render(<Button size="large">Button</Button>)
		expect(getByText('Button')).toBeTruthy()
	})

	it('should render button with text and size extra large', () => {
		const { getByText } = render(<Button size="extra-large">Button</Button>)
		expect(getByText('Button')).toBeTruthy()
	})

	it('should render button with text, size small and outline', () => {
		const { getByText } = render(
			<Button size="small" outline>
				Button
			</Button>
		)
		expect(getByText('Button')).toBeTruthy()
	})

	it('should render button with text, size medium and outline', () => {
		const { getByText } = render(
			<Button size="medium" outline>
				Button
			</Button>
		)
		expect(getByText('Button')).toBeTruthy()
	})

	it('should render button with text, size large and outline', () => {
		const { getByText } = render(
			<Button size="large" outline>
				Button
			</Button>
		)
		expect(getByText('Button')).toBeTruthy()
	})

	it('should render button with text, size extra large and outline', () => {
		const { getByText } = render(
			<Button size="extra-large" outline>
				Button
			</Button>
		)
		expect(getByText('Button')).toBeTruthy()
	})

	it('should render button with text, size small and disabled', () => {
		const { getByText } = render(
			<Button size="small" disabled>
				Button
			</Button>
		)
		expect(getByText('Button')).toBeTruthy()
	})
})
