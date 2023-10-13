import React, { ReactNode } from 'react'
import clsx from 'clsx'

type TSizeButton = 'small' | 'medium' | 'large'

type TButtonProps = {
	children: ReactNode
	className?: string
	size?: TSizeButton
	outline?: boolean
}

type TSiseClass = {
	[key in TSizeButton]: string
}

const SizeClass: TSiseClass = {
	small: 'px-2 py-1 text-xs',
	medium: 'px-4 py-2 text-sm',
	large: 'px-6 py-3 text-base'
}

export const Button = ({
	children,
	className,
	size = 'medium',
	outline = false,
	...props
}: TButtonProps) => (
	<button className={clsx('rounded-lg', SizeClass[size], className)} {...props}>
		{children}
	</button>
)
