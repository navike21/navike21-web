import { renderHook } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useMenu } from './menu.hooks'
import * as HeaderContext from '@Context/headerContext.hooks'

// Mock HeaderContext
vi.mock('@Context/headerContext.hooks')

// Mock pages constants
vi.mock('@Constants/pages', () => ({
  PAGES_INFORMATION: {
    home: { es: { id: 1, name: 'Inicio', slug: '/' } },
    services: { es: { id: 2, name: 'Servicios', slug: '/servicios' } },
    about: { es: { id: 3, name: 'Nosotros', slug: '/nosotros' } }
  }
}))

describe('useMenu hook', () => {
  beforeEach(() => {
    vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
      toggleMenu: false,
      setToggleMenu: vi.fn(),
      isSolid: false,
      setIsSolid: vi.fn()
    })
  })

  describe('basic functionality', () => {
    it('should return menuList', () => {
      const { result } = renderHook(() => useMenu())
      expect(result.current.menuList).toBeDefined()
      expect(Array.isArray(result.current.menuList)).toBe(true)
    })

    it('should return toggleMenu from context', () => {
      const { result } = renderHook(() => useMenu())
      expect(result.current.toggleMenu).toBe(false)
    })

    it('should return menuVariants', () => {
      const { result } = renderHook(() => useMenu())
      expect(result.current.menuVariants).toBeDefined()
      expect(result.current.menuVariants).toHaveProperty('initial')
      expect(result.current.menuVariants).toHaveProperty('animate')
      expect(result.current.menuVariants).toHaveProperty('exit')
    })

    it('should return imageVariants', () => {
      const { result } = renderHook(() => useMenu())
      expect(result.current.imageVariants).toBeDefined()
      expect(result.current.imageVariants).toHaveProperty('initial')
      expect(result.current.imageVariants).toHaveProperty('animate')
      expect(result.current.imageVariants).toHaveProperty('exit')
    })

    it('should return itemMenuVariants', () => {
      const { result } = renderHook(() => useMenu())
      expect(result.current.itemMenuVariants).toBeDefined()
      expect(result.current.itemMenuVariants).toHaveProperty('initial')
      expect(result.current.itemMenuVariants).toHaveProperty('animate')
      expect(result.current.itemMenuVariants).toHaveProperty('exit')
    })

    it('should call useHeaderContext', () => {
      renderHook(() => useMenu())
      expect(HeaderContext.useHeaderContext).toHaveBeenCalled()
    })
  })

  describe('menuList generation', () => {
    it('should generate menuList from PAGES_INFORMATION', () => {
      const { result } = renderHook(() => useMenu())
      expect(result.current.menuList.length).toBe(3)
    })

    it('should extract es locale from each page', () => {
      const { result } = renderHook(() => useMenu())
      result.current.menuList.forEach(item => {
        expect(item).toHaveProperty('id')
        expect(item).toHaveProperty('name')
        expect(item).toHaveProperty('slug')
      })
    })

    it('should contain correct page names', () => {
      const { result } = renderHook(() => useMenu())
      const names = result.current.menuList.map(item => item.name)
      expect(names).toContain('Inicio')
      expect(names).toContain('Servicios')
      expect(names).toContain('Nosotros')
    })

    it('should contain correct page slugs', () => {
      const { result } = renderHook(() => useMenu())
      const slugs = result.current.menuList.map(item => item.slug)
      expect(slugs).toContain('/')
      expect(slugs).toContain('/servicios')
      expect(slugs).toContain('/nosotros')
    })
  })

  describe('menuVariants configuration', () => {
    it('should have initial state with height 0', () => {
      const { result } = renderHook(() => useMenu())
      expect(result.current.menuVariants['initial']).toEqual({ height: 0 })
    })

    it('should have animate state with full viewport height', () => {
      const { result } = renderHook(() => useMenu())
      expect(result.current.menuVariants['animate']).toHaveProperty(
        'height',
        '100dvh'
      )
    })

    it('should have animate state with transition settings', () => {
      const { result } = renderHook(() => useMenu())
      const animate = result.current.menuVariants['animate'] as Record<
        string,
        unknown
      >
      expect(animate['transition']).toBeDefined()
      const transition = animate['transition'] as Record<string, unknown>
      expect(transition['duration']).toBe(0.5)
      expect(transition['ease']).toBe('easeInOut')
      expect(transition['when']).toBe('beforeChildren')
      expect(transition['staggerChildren']).toBe(0.2)
    })

    it('should have exit state with height 0', () => {
      const { result } = renderHook(() => useMenu())
      expect(result.current.menuVariants['exit']).toHaveProperty('height', 0)
    })

    it('should have exit transition settings', () => {
      const { result } = renderHook(() => useMenu())
      const exit = result.current.menuVariants['exit'] as Record<
        string,
        unknown
      >
      expect(exit['transition']).toBeDefined()
      const transition = exit['transition'] as Record<string, unknown>
      expect(transition['duration']).toBe(0.5)
      expect(transition['ease']).toBe('easeInOut')
    })
  })

  describe('imageVariants configuration', () => {
    it('should have initial state', () => {
      const { result } = renderHook(() => useMenu())
      expect(result.current.imageVariants['initial']).toEqual({
        opacity: 0,
        scale: 1.1
      })
    })

    it('should have animate state', () => {
      const { result } = renderHook(() => useMenu())
      const animate = result.current.imageVariants['animate'] as Record<
        string,
        unknown
      >
      expect(animate['opacity']).toBe(1)
      expect(animate['scale']).toBe(1)
      const transition = animate['transition'] as Record<string, unknown>
      expect(transition['duration']).toBe(0.5)
      expect(transition['ease']).toBe('easeInOut')
    })

    it('should have exit state', () => {
      const { result } = renderHook(() => useMenu())
      const exit = result.current.imageVariants['exit'] as Record<
        string,
        unknown
      >
      expect(exit['opacity']).toBe(0)
      expect(exit['scale']).toBe(1.1)
      const transition = exit['transition'] as Record<string, unknown>
      expect(transition['duration']).toBe(0.5)
      expect(transition['ease']).toBe('easeInOut')
    })
  })

  describe('itemMenuVariants configuration', () => {
    it('should have initial state', () => {
      const { result } = renderHook(() => useMenu())
      expect(result.current.itemMenuVariants['initial']).toEqual({
        opacity: 0,
        y: -10
      })
    })

    it('should have animate state', () => {
      const { result } = renderHook(() => useMenu())
      const animate = result.current.itemMenuVariants['animate'] as Record<
        string,
        unknown
      >
      expect(animate['opacity']).toBe(1)
      expect(animate['y']).toBe(0)
      const transition = animate['transition'] as Record<string, unknown>
      expect(transition['duration']).toBe(0.3)
      expect(transition['ease']).toBe('easeInOut')
    })

    it('should have exit state', () => {
      const { result } = renderHook(() => useMenu())
      const exit = result.current.itemMenuVariants['exit'] as Record<
        string,
        unknown
      >
      expect(exit['opacity']).toBe(0)
      expect(exit['y']).toBe(-10)
      const transition = exit['transition'] as Record<string, unknown>
      expect(transition['duration']).toBe(0.3)
      expect(transition['ease']).toBe('easeInOut')
    })
  })

  describe('toggleMenu state', () => {
    it('should reflect toggleMenu from context', () => {
      vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
        toggleMenu: true,
        setToggleMenu: vi.fn(),
        isSolid: false,
        setIsSolid: vi.fn()
      })
      const { result } = renderHook(() => useMenu())
      expect(result.current.toggleMenu).toBe(true)
    })

    it('should update when toggleMenu changes', () => {
      const { result, rerender } = renderHook(() => useMenu())
      expect(result.current.toggleMenu).toBe(false)

      vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
        toggleMenu: true,
        setToggleMenu: vi.fn(),
        isSolid: false,
        setIsSolid: vi.fn()
      })
      rerender()
      expect(result.current.toggleMenu).toBe(true)
    })
  })

  describe('return structure', () => {
    it('should return all required properties', () => {
      const { result } = renderHook(() => useMenu())
      expect(result.current).toHaveProperty('menuList')
      expect(result.current).toHaveProperty('toggleMenu')
      expect(result.current).toHaveProperty('menuVariants')
      expect(result.current).toHaveProperty('imageVariants')
      expect(result.current).toHaveProperty('itemMenuVariants')
    })

    it('should have correct types', () => {
      const { result } = renderHook(() => useMenu())
      expect(Array.isArray(result.current.menuList)).toBe(true)
      expect(typeof result.current.toggleMenu).toBe('boolean')
      expect(typeof result.current.menuVariants).toBe('object')
      expect(typeof result.current.imageVariants).toBe('object')
      expect(typeof result.current.itemMenuVariants).toBe('object')
    })
  })
})
