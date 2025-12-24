import { renderHook } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useHeader } from './header.hooks'
import * as HeaderContext from '@Context/headerContext.hooks'
import * as motion from 'motion/react'
import type { MotionValue } from 'motion/react'

vi.mock('motion/react', () => ({
  useScroll: vi.fn(),
  useMotionValueEvent: vi.fn()
}))

vi.mock('@Context/headerContext.hooks')

vi.mock('@Constants/socialMedia', () => ({
  SOCIAL_MEDIA: [
    {
      icon: 'RiFacebookFill',
      name: 'Facebook',
      url: 'https://facebook.com',
      active: true
    },
    {
      icon: 'RiTwitterFill',
      name: 'Twitter',
      url: 'https://twitter.com',
      active: true
    },
    {
      icon: 'RiInstagramFill',
      name: 'Instagram',
      url: 'https://instagram.com',
      active: false
    }
  ]
}))

describe('useHeader hook', () => {
  const mockSetIsSolid = vi.fn()
  const mockSetToggleMenu = vi.fn()
  const mockScrollY = { get: vi.fn() }

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
      isSolid: false,
      setIsSolid: mockSetIsSolid,
      toggleMenu: false,
      setToggleMenu: mockSetToggleMenu
    })
    vi.mocked(motion.useScroll).mockReturnValue({
      scrollY: mockScrollY as unknown as MotionValue<number>,
      scrollYProgress: {} as unknown as MotionValue<number>,
      scrollX: {} as unknown as MotionValue<number>,
      scrollXProgress: {} as unknown as MotionValue<number>
    })
  })

  describe('basic functionality', () => {
    it('should return headerRef', () => {
      const { result } = renderHook(() => useHeader())
      expect(result.current.headerRef).toBeDefined()
      expect(result.current.headerRef.current).toBeNull()
    })

    it('should return isSolid from context', () => {
      const { result } = renderHook(() => useHeader())
      expect(result.current.isSolid).toBe(false)
    })

    it('should return toggleMenu from context', () => {
      const { result } = renderHook(() => useHeader())
      expect(result.current.toggleMenu).toBe(false)
    })

    it('should return setToggleMenu from context', () => {
      const { result } = renderHook(() => useHeader())
      expect(result.current.setToggleMenu).toBe(mockSetToggleMenu)
    })

    it('should call useHeaderContext', () => {
      renderHook(() => useHeader())
      expect(HeaderContext.useHeaderContext).toHaveBeenCalled()
    })

    it('should call useScroll', () => {
      renderHook(() => useHeader())
      expect(motion.useScroll).toHaveBeenCalled()
    })

    it('should call useMotionValueEvent', () => {
      renderHook(() => useHeader())
      expect(motion.useMotionValueEvent).toHaveBeenCalled()
    })
  })

  describe('social media filtering', () => {
    it('should return only active social media', () => {
      const { result } = renderHook(() => useHeader())
      expect(result.current.socialMedia).toHaveLength(2)
    })

    it('should filter out inactive social media', () => {
      const { result } = renderHook(() => useHeader())
      const hasInactive = result.current.socialMedia.some(
        item => item.name === 'Instagram'
      )
      expect(hasInactive).toBe(false)
    })

    it('should include Facebook in filtered list', () => {
      const { result } = renderHook(() => useHeader())
      const hasFacebook = result.current.socialMedia.some(
        item => item.name === 'Facebook'
      )
      expect(hasFacebook).toBe(true)
    })

    it('should include Twitter in filtered list', () => {
      const { result } = renderHook(() => useHeader())
      const hasTwitter = result.current.socialMedia.some(
        item => item.name === 'Twitter'
      )
      expect(hasTwitter).toBe(true)
    })

    it('should return social media with correct structure', () => {
      const { result } = renderHook(() => useHeader())
      const socialItem = result.current.socialMedia[0]
      expect(socialItem).toHaveProperty('icon')
      expect(socialItem).toHaveProperty('name')
      expect(socialItem).toHaveProperty('url')
      expect(socialItem).toHaveProperty('active')
      expect(socialItem?.active).toBe(true)
    })
  })

  describe('scroll behavior', () => {
    it('should setup motion value event listener', () => {
      renderHook(() => useHeader())
      expect(motion.useMotionValueEvent).toHaveBeenCalledWith(
        mockScrollY,
        'change',
        expect.any(Function)
      )
    })

    it('should handle scroll event with threshold check', () => {
      let scrollCallback: (y: number) => void = () => {}
      vi.mocked(motion.useMotionValueEvent).mockImplementation(
        (value, event, callback) => {
          scrollCallback = callback as (y: number) => void
        }
      )

      renderHook(() => useHeader())

      // Simulate scroll below threshold
      scrollCallback(5)
      // Should not call setIsSolid because isSolid is already false

      // Simulate scroll above threshold
      scrollCallback(15)
      expect(mockSetIsSolid).toHaveBeenCalledWith(true)
    })

    it('should not update isSolid if value has not changed', () => {
      vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
        isSolid: true,
        setIsSolid: mockSetIsSolid,
        toggleMenu: false,
        setToggleMenu: mockSetToggleMenu
      })

      let scrollCallback: (y: number) => void = () => {}
      vi.mocked(motion.useMotionValueEvent).mockImplementation(
        (value, event, callback) => {
          scrollCallback = callback as (y: number) => void
        }
      )

      renderHook(() => useHeader())
      mockSetIsSolid.mockClear()

      // Simulate scroll above threshold when already solid
      scrollCallback(15)
      // Should not call setIsSolid because isSolid is already true

      expect(mockSetIsSolid).not.toHaveBeenCalled()
    })

    it('should update to solid when scrolling past threshold', () => {
      let scrollCallback: (y: number) => void = () => {}
      vi.mocked(motion.useMotionValueEvent).mockImplementation(
        (value, event, callback) => {
          scrollCallback = callback as (y: number) => void
        }
      )

      renderHook(() => useHeader())

      scrollCallback(20)
      expect(mockSetIsSolid).toHaveBeenCalledWith(true)
    })

    it('should update to not solid when scrolling below threshold', () => {
      vi.mocked(HeaderContext.useHeaderContext).mockReturnValue({
        isSolid: true,
        setIsSolid: mockSetIsSolid,
        toggleMenu: false,
        setToggleMenu: mockSetToggleMenu
      })

      let scrollCallback: (y: number) => void = () => {}
      vi.mocked(motion.useMotionValueEvent).mockImplementation(
        (value, event, callback) => {
          scrollCallback = callback as (y: number) => void
        }
      )

      renderHook(() => useHeader())

      scrollCallback(5)
      expect(mockSetIsSolid).toHaveBeenCalledWith(false)
    })
  })

  describe('return structure', () => {
    it('should return all required properties', () => {
      const { result } = renderHook(() => useHeader())
      expect(result.current).toHaveProperty('headerRef')
      expect(result.current).toHaveProperty('isSolid')
      expect(result.current).toHaveProperty('socialMedia')
      expect(result.current).toHaveProperty('toggleMenu')
      expect(result.current).toHaveProperty('setToggleMenu')
    })

    it('should return correct types for all properties', () => {
      const { result } = renderHook(() => useHeader())
      expect(typeof result.current.isSolid).toBe('boolean')
      expect(typeof result.current.toggleMenu).toBe('boolean')
      expect(typeof result.current.setToggleMenu).toBe('function')
      expect(Array.isArray(result.current.socialMedia)).toBe(true)
    })
  })
})
