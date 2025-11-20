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
        <h2 className="mb-2 text-3xl font-bold">Algo salió mal</h2>
        <p className="text-gray-600">
          Ha ocurrido un error inesperado. Por favor, intenta de nuevo.
        </p>
      </div>
      <Button onClick={reset}>Intentar de nuevo</Button>
    </div>
  )
}
