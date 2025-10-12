'use client'

import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx'

type TAvatarSize = 'sm' | 'md' | 'lg'
type TAvatarStatus = 'online' | 'offline' | 'busy' | 'away' | 'none'

interface IAvatarProps {
  src?: string | StaticImageData
  alt?: string
  name?: string
  size?: TAvatarSize
  status?: TAvatarStatus
  className?: string
}

export const Avatar = ({
  src,
  alt = 'User avatar',
  name,
  size = 'md',
  status = 'none',
  className
}: Readonly<IAvatarProps>) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg'
  }[size]

  const statusColor = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    busy: 'bg-red-500',
    away: 'bg-yellow-400',
    none: ''
  }[status]

  const statusEffect = {
    online: 'avatar-online-ripple',
    busy: 'avatar-busy-pulse',
    away: 'avatar-away-pulse',
    offline: 'avatar-offline',
    none: ''
  }[status]

  return (
    <div className={clsx('relative inline-flex', sizeClasses, className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100%"
          className="object-cover rounded-full"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full rounded-full bg-gray-200 text-gray-600 font-medium uppercase">
          {name ? name.charAt(0) : '?'}
        </div>
      )}

      {status !== 'none' && (
        <span
          className={clsx(
            'absolute bottom-0 right-0 rounded-full ring-2 ring-white',
            statusColor,
            {
              'w-3 h-3': size === 'sm',
              'w-3.5 h-3.5': size === 'md',
              'w-4 h-4': size === 'lg'
            },
            statusEffect
          )}
        />
      )}
    </div>
  )
}
