import { render, screen, renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HeaderProvider } from './HeaderContext'
import { useHeaderContext } from './headerContext.hooks'
import type { ReactNode } from 'react'

describe('HeaderContext', () => {
  describe('HeaderProvider', () => {
    it('should render children', () => {
      render(
        <HeaderProvider>
          <div>Test Content</div>
        </HeaderProvider>
      )
      expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    it('should provide default values', () => {
      const TestComponent = () => {
        const { isSolid, toggleMenu } = useHeaderContext()
        return (
          <div>
            <span data-testid="is-solid">{String(isSolid)}</span>
            <span data-testid="toggle-menu">{String(toggleMenu)}</span>
          </div>
        )
      }

      render(
        <HeaderProvider>
          <TestComponent />
        </HeaderProvider>
      )

      expect(screen.getByTestId('is-solid')).toHaveTextContent('false')
      expect(screen.getByTestId('toggle-menu')).toHaveTextContent('false')
    })

    it('should update isSolid state', () => {
      const TestComponent = () => {
        const { isSolid, setIsSolid } = useHeaderContext()
        return (
          <div>
            <span data-testid="is-solid">{String(isSolid)}</span>
            <button onClick={() => setIsSolid(true)}>Set Solid</button>
          </div>
        )
      }

      render(
        <HeaderProvider>
          <TestComponent />
        </HeaderProvider>
      )

      expect(screen.getByTestId('is-solid')).toHaveTextContent('false')

      act(() => {
        screen.getByText('Set Solid').click()
      })

      expect(screen.getByTestId('is-solid')).toHaveTextContent('true')
    })

    it('should update toggleMenu state', () => {
      const TestComponent = () => {
        const { toggleMenu, setToggleMenu } = useHeaderContext()
        return (
          <div>
            <span data-testid="toggle-menu">{String(toggleMenu)}</span>
            <button onClick={() => setToggleMenu(true)}>Toggle Menu</button>
          </div>
        )
      }

      render(
        <HeaderProvider>
          <TestComponent />
        </HeaderProvider>
      )

      expect(screen.getByTestId('toggle-menu')).toHaveTextContent('false')

      act(() => {
        screen.getByText('Toggle Menu').click()
      })

      expect(screen.getByTestId('toggle-menu')).toHaveTextContent('true')
    })

    it('should update isSolid to false', () => {
      const TestComponent = () => {
        const { isSolid, setIsSolid } = useHeaderContext()
        return (
          <div>
            <span data-testid="is-solid">{String(isSolid)}</span>
            <button onClick={() => setIsSolid(true)}>Set True</button>
            <button onClick={() => setIsSolid(false)}>Set False</button>
          </div>
        )
      }

      render(
        <HeaderProvider>
          <TestComponent />
        </HeaderProvider>
      )

      act(() => {
        screen.getByText('Set True').click()
      })
      expect(screen.getByTestId('is-solid')).toHaveTextContent('true')

      act(() => {
        screen.getByText('Set False').click()
      })
      expect(screen.getByTestId('is-solid')).toHaveTextContent('false')
    })

    it('should update toggleMenu to false', () => {
      const TestComponent = () => {
        const { toggleMenu, setToggleMenu } = useHeaderContext()
        return (
          <div>
            <span data-testid="toggle-menu">{String(toggleMenu)}</span>
            <button onClick={() => setToggleMenu(true)}>Open Menu</button>
            <button onClick={() => setToggleMenu(false)}>Close Menu</button>
          </div>
        )
      }

      render(
        <HeaderProvider>
          <TestComponent />
        </HeaderProvider>
      )

      act(() => {
        screen.getByText('Open Menu').click()
      })
      expect(screen.getByTestId('toggle-menu')).toHaveTextContent('true')

      act(() => {
        screen.getByText('Close Menu').click()
      })
      expect(screen.getByTestId('toggle-menu')).toHaveTextContent('false')
    })

    it('should maintain independent state for isSolid and toggleMenu', () => {
      const TestComponent = () => {
        const { isSolid, toggleMenu, setIsSolid, setToggleMenu } =
          useHeaderContext()
        return (
          <div>
            <span data-testid="is-solid">{String(isSolid)}</span>
            <span data-testid="toggle-menu">{String(toggleMenu)}</span>
            <button onClick={() => setIsSolid(true)}>Set Solid</button>
            <button onClick={() => setToggleMenu(true)}>Open Menu</button>
          </div>
        )
      }

      render(
        <HeaderProvider>
          <TestComponent />
        </HeaderProvider>
      )

      act(() => {
        screen.getByText('Set Solid').click()
      })
      expect(screen.getByTestId('is-solid')).toHaveTextContent('true')
      expect(screen.getByTestId('toggle-menu')).toHaveTextContent('false')

      act(() => {
        screen.getByText('Open Menu').click()
      })
      expect(screen.getByTestId('is-solid')).toHaveTextContent('true')
      expect(screen.getByTestId('toggle-menu')).toHaveTextContent('true')
    })

    it('should handle multiple state updates', () => {
      const TestComponent = () => {
        const { isSolid, toggleMenu, setIsSolid, setToggleMenu } =
          useHeaderContext()
        return (
          <div>
            <span data-testid="is-solid">{String(isSolid)}</span>
            <span data-testid="toggle-menu">{String(toggleMenu)}</span>
            <button onClick={() => setIsSolid(!isSolid)}>Toggle Solid</button>
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              Toggle Menu
            </button>
          </div>
        )
      }

      render(
        <HeaderProvider>
          <TestComponent />
        </HeaderProvider>
      )

      const toggleSolidBtn = screen.getByText('Toggle Solid')
      const toggleMenuBtn = screen.getByText('Toggle Menu')

      act(() => {
        toggleSolidBtn.click()
      })
      expect(screen.getByTestId('is-solid')).toHaveTextContent('true')

      act(() => {
        toggleMenuBtn.click()
      })
      expect(screen.getByTestId('toggle-menu')).toHaveTextContent('true')

      act(() => {
        toggleSolidBtn.click()
      })
      expect(screen.getByTestId('is-solid')).toHaveTextContent('false')

      act(() => {
        toggleMenuBtn.click()
      })
      expect(screen.getByTestId('toggle-menu')).toHaveTextContent('false')
    })
  })

  describe('useHeaderContext', () => {
    it('should throw error when used outside HeaderProvider', () => {
      // Suppress console.error for this test
      const originalError = console.error
      console.error = () => {}

      const TestComponent = () => {
        useHeaderContext()
        return <div>Test</div>
      }

      expect(() => render(<TestComponent />)).toThrow(
        'useHeaderContext must be used within a HeaderProvider'
      )

      console.error = originalError
    })

    it('should return context value when used inside HeaderProvider', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <HeaderProvider>{children}</HeaderProvider>
      )

      const { result } = renderHook(() => useHeaderContext(), { wrapper })

      expect(result.current).toHaveProperty('isSolid')
      expect(result.current).toHaveProperty('toggleMenu')
      expect(result.current).toHaveProperty('setIsSolid')
      expect(result.current).toHaveProperty('setToggleMenu')
    })

    it('should have isSolid as false by default', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <HeaderProvider>{children}</HeaderProvider>
      )

      const { result } = renderHook(() => useHeaderContext(), { wrapper })

      expect(result.current.isSolid).toBe(false)
    })

    it('should have toggleMenu as false by default', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <HeaderProvider>{children}</HeaderProvider>
      )

      const { result } = renderHook(() => useHeaderContext(), { wrapper })

      expect(result.current.toggleMenu).toBe(false)
    })

    it('should update isSolid with setIsSolid', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <HeaderProvider>{children}</HeaderProvider>
      )

      const { result } = renderHook(() => useHeaderContext(), { wrapper })

      act(() => {
        result.current.setIsSolid(true)
      })

      expect(result.current.isSolid).toBe(true)
    })

    it('should update toggleMenu with setToggleMenu', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <HeaderProvider>{children}</HeaderProvider>
      )

      const { result } = renderHook(() => useHeaderContext(), { wrapper })

      act(() => {
        result.current.setToggleMenu(true)
      })

      expect(result.current.toggleMenu).toBe(true)
    })

    it('should maintain referential equality for setter functions', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <HeaderProvider>{children}</HeaderProvider>
      )

      const { result, rerender } = renderHook(() => useHeaderContext(), {
        wrapper
      })

      const firstSetIsSolid = result.current.setIsSolid
      const firstSetToggleMenu = result.current.setToggleMenu

      act(() => {
        result.current.setIsSolid(true)
      })

      rerender()

      expect(result.current.setIsSolid).toBe(firstSetIsSolid)
      expect(result.current.setToggleMenu).toBe(firstSetToggleMenu)
    })

    it('should update state independently', () => {
      const wrapper = ({ children }: { children: ReactNode }) => (
        <HeaderProvider>{children}</HeaderProvider>
      )

      const { result } = renderHook(() => useHeaderContext(), { wrapper })

      act(() => {
        result.current.setIsSolid(true)
      })

      expect(result.current.isSolid).toBe(true)
      expect(result.current.toggleMenu).toBe(false)

      act(() => {
        result.current.setToggleMenu(true)
      })

      expect(result.current.isSolid).toBe(true)
      expect(result.current.toggleMenu).toBe(true)
    })
  })

  describe('integration tests', () => {
    it('should share state between multiple consumers', () => {
      const Consumer1 = () => {
        const { isSolid, setIsSolid } = useHeaderContext()
        return (
          <div>
            <span data-testid="consumer1-solid">{String(isSolid)}</span>
            <button onClick={() => setIsSolid(true)}>Set Solid</button>
          </div>
        )
      }

      const Consumer2 = () => {
        const { isSolid } = useHeaderContext()
        return <span data-testid="consumer2-solid">{String(isSolid)}</span>
      }

      render(
        <HeaderProvider>
          <Consumer1 />
          <Consumer2 />
        </HeaderProvider>
      )

      expect(screen.getByTestId('consumer1-solid')).toHaveTextContent('false')
      expect(screen.getByTestId('consumer2-solid')).toHaveTextContent('false')

      act(() => {
        screen.getByText('Set Solid').click()
      })

      expect(screen.getByTestId('consumer1-solid')).toHaveTextContent('true')
      expect(screen.getByTestId('consumer2-solid')).toHaveTextContent('true')
    })

    it('should handle concurrent state updates', () => {
      const TestComponent = () => {
        const { isSolid, toggleMenu, setIsSolid, setToggleMenu } =
          useHeaderContext()
        return (
          <div>
            <span data-testid="is-solid">{String(isSolid)}</span>
            <span data-testid="toggle-menu">{String(toggleMenu)}</span>
            <button
              onClick={() => {
                setIsSolid(true)
                setToggleMenu(true)
              }}
            >
              Update Both
            </button>
          </div>
        )
      }

      render(
        <HeaderProvider>
          <TestComponent />
        </HeaderProvider>
      )

      act(() => {
        screen.getByText('Update Both').click()
      })

      expect(screen.getByTestId('is-solid')).toHaveTextContent('true')
      expect(screen.getByTestId('toggle-menu')).toHaveTextContent('true')
    })
  })
})
