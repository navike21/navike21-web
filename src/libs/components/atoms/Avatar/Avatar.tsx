'use client'

import clsx from 'clsx'
import Image, { type StaticImageData } from 'next/image'
import { memo } from 'react'

type TAvatarSize = 'sm' | 'md' | 'lg'
type TAvatarStatus = 'online' | 'offline' | 'busy' | 'away' | 'none'

interface IAvatarProps {
  src?: string | StaticImageData
  alt?: string
  name?: string
  size?: TAvatarSize
  status?: TAvatarStatus
  className?: string
  title?: string
}

const sizeMap = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-12 h-12 text-base',
  lg: 'w-16 h-16 text-lg'
} as const

const statusColorMap = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  busy: 'bg-red-500',
  away: 'bg-yellow-400'
} as const

const statusEffectMap = {
  online: 'avatar-online-ripple',
  busy: 'avatar-busy-pulse',
  away: 'avatar-away-pulse',
  offline: 'avatar-offline'
} as const

const statusSizeMap = {
  sm: 'w-3 h-3',
  md: 'w-3.5 h-3.5',
  lg: 'w-4 h-4'
} as const

export const Avatar = memo(function Avatar({
  src,
  alt = 'User avatar',
  name,
  size = 'md',
  status = 'none',
  className,
  title
}: Readonly<IAvatarProps>) {
  const initials = name
    ? name
        .trim()
        .split(/\s+/)
        .map(n => n[0]?.toUpperCase())
        .slice(0, 2)
        .join('')
    : '?'

  const ariaLabel = name ?? alt

  return (
    <figure
      className={clsx(
        'relative inline-flex overflow-hidden rounded-full',
        sizeMap[size],
        className
      )}
      aria-label={ariaLabel}
      title={title ?? ariaLabel}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100%"
          className="object-cover rounded-full"
        />
      ) : (
        <span className="flex items-center justify-center w-full h-full rounded-full bg-gray-200 text-gray-600 font-medium uppercase select-none">
          {initials}
        </span>
      )}

      {status !== 'none' && (
        <span
          className={clsx(
            'absolute bottom-0 right-0 rounded-full ring-2 ring-white',
            statusColorMap[status],
            statusEffectMap[status],
            statusSizeMap[size]
          )}
        />
      )}
    </figure>
  )
})
