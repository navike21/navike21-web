import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { EXTRA_LARGE, LARGE, MEDIUM, SMALL } from '@Constants/shared'
import styles from './button.module.scss'

type TSizeButton =
	| typeof SMALL
	| typeof MEDIUM
	| typeof LARGE
	| typeof EXTRA_LARGE

type TSiseClass = {
	[key in TSizeButton]: string
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	className?: string
	size?: TSizeButton
	outline?: boolean
	disabled?: boolean
}

const SizeClass: TSiseClass = {
	[SMALL]: 'px-4 py-2 text-xs',
	[MEDIUM]: 'px-5 py-3 text-sm',
	[LARGE]: 'px-6 py-3 text-base',
	[EXTRA_LARGE]: 'px-8 py-4 text-lg'
}

const classDefault = `active:scale-95 text-grey-800 transition-all duration-200 ease-in-out outline-none overflow-hidden`

export const Button = ({
	children,
	className,
	size = MEDIUM,
	outline = false,
	disabled = false,
	...props
}: IButtonProps) => (
	<button
		className={clsx(
			'rounded-lg relative font-medium focus:outline-none',
			SizeClass[size],
			((disabled && outline) || (disabled && !outline)) &&
				'bg-grey-300 cursor-not-allowed text-grey-600 hover:animate-pulse hover:animate-duration-200 hover:animate-twice',
			!disabled &&
				outline &&
				`${classDefault} bg-transparent ring-inset ring-[0.15rem] ring-primary hover:bg-primary`,
			!disabled &&
				!outline &&
				`${classDefault} bg-primary hover:bg-primary-dark`,
			styles['i'],
			className
		)}
		{...props}
	>
		{children}
	</button>
)
