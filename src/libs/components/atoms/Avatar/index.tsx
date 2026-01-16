'use client'

import clsx from 'clsx'
import { memo } from 'react'
import type { AvatarProps } from './Avatar.types'
import Image from 'next/image'
import { useAvatar } from './Avatar.hooks'

export const Avatar = memo(function Avatar({
  src,
  alt = 'User avatar',
  size = 'md',
  status = 'none',
  className,
  title,
  ...props
}: Readonly<AvatarProps>) {
  const {
    sizeMap,
    statusColorMap,
    statusEffectMap,
    statusSizeMap,
    initials,
    ariaLabel
  } = useAvatar({ ...props, alt })

  return (
    <figure
      className={clsx(
        'relative inline-flex rounded-full',
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
        <span className="flex items-center justify-center w-full h-full rounded-full bg-gray-200 text-gray-600 font-bold uppercase select-none">
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
