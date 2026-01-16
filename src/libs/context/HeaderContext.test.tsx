import { render, screen, renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { HeaderProvider } from '.'
import { useHeaderContext } from './headerContext.hooks'
import type { ReactNode } from 'react'

const headerProviderWrapper = ({ children }: { children: ReactNode }) => (
  <HeaderProvider>{children}</HeaderProvider>
)

const DefaultValuesConsumer = () => {
  const { isSolid, toggleMenu } = useHeaderContext()
  return (
    <div>
      <span data-testid="is-solid">{String(isSolid)}</span>
      <span data-testid="toggle-menu">{String(toggleMenu)}</span>
    </div>
  )
}

const IsSolidUpdateConsumer = () => {
  const { isSolid, setIsSolid } = useHeaderContext()
  const handleSetSolid = () => setIsSolid(true)
  return (
    <div>
      <span data-testid="is-solid">{String(isSolid)}</span>
      <button onClick={handleSetSolid}>Set Solid</button>
    </div>
  )
}

const ToggleMenuUpdateConsumer = () => {
  const { toggleMenu, setToggleMenu } = useHeaderContext()
  const handleToggleMenu = () => setToggleMenu(true)
  return (
    <div>
      <span data-testid="toggle-menu">{String(toggleMenu)}</span>
      <button onClick={handleToggleMenu}>Toggle Menu</button>
    </div>
  )
}

const IsSolidTrueFalseConsumer = () => {
  const { isSolid, setIsSolid } = useHeaderContext()
  const handleSetTrue = () => setIsSolid(true)
  const handleSetFalse = () => setIsSolid(false)
  return (
    <div>
      <span data-testid="is-solid">{String(isSolid)}</span>
      <button onClick={handleSetTrue}>Set True</button>
      <button onClick={handleSetFalse}>Set False</button>
    </div>
  )
}

const ToggleMenuTrueFalseConsumer = () => {
  const { toggleMenu, setToggleMenu } = useHeaderContext()
  const handleOpenMenu = () => setToggleMenu(true)
  const handleCloseMenu = () => setToggleMenu(false)
  return (
    <div>
      <span data-testid="toggle-menu">{String(toggleMenu)}</span>
      <button onClick={handleOpenMenu}>Open Menu</button>
      <button onClick={handleCloseMenu}>Close Menu</button>
    </div>
  )
}

const IndependentStateConsumer = () => {
  const { isSolid, toggleMenu, setIsSolid, setToggleMenu } = useHeaderContext()
  const handleSetSolid = () => setIsSolid(true)
  const handleOpenMenu = () => setToggleMenu(true)
  return (
    <div>
      <span data-testid="is-solid">{String(isSolid)}</span>
      <span data-testid="toggle-menu">{String(toggleMenu)}</span>
      <button onClick={handleSetSolid}>Set Solid</button>
      <button onClick={handleOpenMenu}>Open Menu</button>
    </div>
  )
}

const MultipleUpdatesConsumer = () => {
  const { isSolid, toggleMenu, setIsSolid, setToggleMenu } = useHeaderContext()
  const handleToggleSolid = () => setIsSolid(!isSolid)
  const handleToggleMenu = () => setToggleMenu(!toggleMenu)
  return (
    <div>
      <span data-testid="is-solid">{String(isSolid)}</span>
      <span data-testid="toggle-menu">{String(toggleMenu)}</span>
      <button onClick={handleToggleSolid}>Toggle Solid</button>
      <button onClick={handleToggleMenu}>Toggle Menu</button>
    </div>
  )
}

const OutsideProviderConsumer = () => {
  useHeaderContext()
  return <div>Test</div>
}

const Consumer1SolidSetter = () => {
  const { isSolid, setIsSolid } = useHeaderContext()
  const handleSetSolid = () => setIsSolid(true)
  return (
    <div>
      <span data-testid="consumer1-solid">{String(isSolid)}</span>
      <button onClick={handleSetSolid}>Set Solid</button>
    </div>
  )
}

const Consumer2SolidReader = () => {
  const { isSolid } = useHeaderContext()
  return <span data-testid="consumer2-solid">{String(isSolid)}</span>
}

const ConcurrentUpdateConsumer = () => {
  const { isSolid, toggleMenu, setIsSolid, setToggleMenu } = useHeaderContext()
  const handleUpdateBoth = () => {
    setIsSolid(true)
    setToggleMenu(true)
  }
  return (
    <div>
      <span data-testid="is-solid">{String(isSolid)}</span>
      <span data-testid="toggle-menu">{String(toggleMenu)}</span>
      <button onClick={handleUpdateBoth}>Update Both</button>
    </div>
  )
}

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
      render(
        <HeaderProvider>
          <DefaultValuesConsumer />
        </HeaderProvider>
      )

      expect(screen.getByTestId('is-solid')).toHaveTextContent('false')
      expect(screen.getByTestId('toggle-menu')).toHaveTextContent('false')
    })

    it('should update isSolid state', () => {
      render(
        <HeaderProvider>
          <IsSolidUpdateConsumer />
        </HeaderProvider>
      )

      expect(screen.getByTestId('is-solid')).toHaveTextContent('false')

      act(() => {
        screen.getByText('Set Solid').click()
      })

      expect(screen.getByTestId('is-solid')).toHaveTextContent('true')
    })

    it('should update toggleMenu state', () => {
      render(
        <HeaderProvider>
          <ToggleMenuUpdateConsumer />
        </HeaderProvider>
      )

      expect(screen.getByTestId('toggle-menu')).toHaveTextContent('false')

      act(() => {
        screen.getByText('Toggle Menu').click()
      })

      expect(screen.getByTestId('toggle-menu')).toHaveTextContent('true')
    })

    it('should update isSolid to false', () => {
      render(
        <HeaderProvider>
          <IsSolidTrueFalseConsumer />
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
      render(
        <HeaderProvider>
          <ToggleMenuTrueFalseConsumer />
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
      render(
        <HeaderProvider>
          <IndependentStateConsumer />
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
      render(
        <HeaderProvider>
          <MultipleUpdatesConsumer />
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
      const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

      expect(() => render(<OutsideProviderConsumer />)).toThrow(
        'useHeaderContext must be used within a HeaderProvider'
      )

      errorSpy.mockRestore()
    })

    it('should return context value when used inside HeaderProvider', () => {
      const { result } = renderHook(() => useHeaderContext(), {
        wrapper: headerProviderWrapper
      })

      expect(result.current).toHaveProperty('isSolid')
      expect(result.current).toHaveProperty('toggleMenu')
      expect(result.current).toHaveProperty('setIsSolid')
      expect(result.current).toHaveProperty('setToggleMenu')
    })

    it('should have isSolid as false by default', () => {
      const { result } = renderHook(() => useHeaderContext(), {
        wrapper: headerProviderWrapper
      })

      expect(result.current.isSolid).toBe(false)
    })

    it('should have toggleMenu as false by default', () => {
      const { result } = renderHook(() => useHeaderContext(), {
        wrapper: headerProviderWrapper
      })

      expect(result.current.toggleMenu).toBe(false)
    })

    it('should update isSolid with setIsSolid', () => {
      const { result } = renderHook(() => useHeaderContext(), {
        wrapper: headerProviderWrapper
      })

      act(() => {
        result.current.setIsSolid(true)
      })

      expect(result.current.isSolid).toBe(true)
    })

    it('should update toggleMenu with setToggleMenu', () => {
      const { result } = renderHook(() => useHeaderContext(), {
        wrapper: headerProviderWrapper
      })

      act(() => {
        result.current.setToggleMenu(true)
      })

      expect(result.current.toggleMenu).toBe(true)
    })

    it('should maintain referential equality for setter functions', () => {
      const { result, rerender } = renderHook(() => useHeaderContext(), {
        wrapper: headerProviderWrapper
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
      const { result } = renderHook(() => useHeaderContext(), {
        wrapper: headerProviderWrapper
      })

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
      render(
        <HeaderProvider>
          <Consumer1SolidSetter />
          <Consumer2SolidReader />
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
      render(
        <HeaderProvider>
          <ConcurrentUpdateConsumer />
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
