'use client'

import { ENVIRONMENT } from '@Config/environments'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState, type ReactNode } from 'react'
import { Toaster } from 'sileo'

interface ReactQueryProviderProps {
  children: ReactNode
}

export const ReactQueryProvider = ({
  children
}: Readonly<ReactQueryProviderProps>) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster position="top-center" offset={75} />
      {ENVIRONMENT === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
}
