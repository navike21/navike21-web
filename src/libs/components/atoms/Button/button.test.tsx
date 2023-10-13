import React from 'react'
import { render } from '@testing-library/react'

import { Button } from './Button'
test('renders button text', () => {
	const { getByText } = render(<Button>Hi i'm button</Button>)
	const buttonElement = getByText('Button')
	expect(buttonElement).toBeTruthy()
})
