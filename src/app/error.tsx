'use client'

import { useEffect } from 'react'
import { Button } from '@Components/atoms'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Application error:', error)
    }
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold">Something went wrong</h2>
        <p className="text-gray-600">
          An unexpected error occurred. Please try again.
        </p>
      </div>
      <Button onClick={reset}>Try again</Button>
    </div>
  )
}
