import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type TStoreInitializer<T extends object> = (
  set: (partial: T | ((state: T) => T)) => void,
  get: () => T
) => T

export function createStore<T extends object>(
  initializer: TStoreInitializer<T>,
  storageKey: string
) {
  return create<T>()(
    devtools(initializer, {
      name: storageKey
    })
  )
}
