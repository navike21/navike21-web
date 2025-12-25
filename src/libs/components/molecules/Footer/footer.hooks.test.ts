import { useFooter } from './footer.hooks'
import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'

describe('useFooter hook', () => {
  describe('structure', () => {
    it('should return structure object', () => {
      const { result } = renderHook(() => useFooter())
      expect(result.current.structure).toBeDefined()
    })

    it('should return textFooter in structure', () => {
      const { result } = renderHook(() => useFooter())
      expect(result.current.structure.textFooter).toBeDefined()
      expect(typeof result.current.structure.textFooter).toBe('string')
    })

    it('should return servicesTitle in structure', () => {
      const { result } = renderHook(() => useFooter())
      expect(result.current.structure.servicesTitle).toBeDefined()
      expect(typeof result.current.structure.servicesTitle).toBe('string')
    })

    it('should return legalAreaTitle in structure', () => {
      const { result } = renderHook(() => useFooter())
      expect(result.current.structure.legalAreaTitle).toBeDefined()
      expect(typeof result.current.structure.legalAreaTitle).toBe('string')
    })

    it('should return contactTitle in structure', () => {
      const { result } = renderHook(() => useFooter())
      expect(result.current.structure.contactTitle).toBeDefined()
      expect(typeof result.current.structure.contactTitle).toBe('string')
    })

    it('should return rightsReserved in structure', () => {
      const { result } = renderHook(() => useFooter())
      expect(result.current.structure.rightsReserved).toBeDefined()
      expect(typeof result.current.structure.rightsReserved).toBe('string')
    })
  })

  describe('itemsInformation', () => {
    it('should return itemsInformation object', () => {
      const { result } = renderHook(() => useFooter())
      expect(result.current.itemsInformation).toBeDefined()
    })

    it('should return services array', () => {
      const { result } = renderHook(() => useFooter())
      expect(Array.isArray(result.current.itemsInformation.services)).toBe(true)
    })

    it('should return services with correct structure', () => {
      const { result } = renderHook(() => useFooter())
      const services = result.current.itemsInformation.services
      if (services.length > 0) {
        expect(services[0]).toHaveProperty('id')
        expect(services[0]).toHaveProperty('title')
        expect(services[0]).toHaveProperty('slug')
      }
    })

    it('should return legalArea array', () => {
      const { result } = renderHook(() => useFooter())
      expect(Array.isArray(result.current.itemsInformation.legalArea)).toBe(
        true
      )
    })

    it('should filter legalArea by showInFooter', () => {
      const { result } = renderHook(() => useFooter())
      const legalArea = result.current.itemsInformation.legalArea
      // All items should have showInFooter = true (or not have the property)
      expect(
        legalArea.every(item => {
          const itemWithFlag = item as { showInFooter?: boolean }
          return itemWithFlag.showInFooter !== false
        })
      ).toBe(true)
    })

    it('should return legalArea with correct structure', () => {
      const { result } = renderHook(() => useFooter())
      const legalArea = result.current.itemsInformation.legalArea
      if (legalArea.length > 0) {
        expect(legalArea[0]).toHaveProperty('slug')
        expect(legalArea[0]).toHaveProperty('title')
      }
    })

    it('should return contactInfo array', () => {
      const { result } = renderHook(() => useFooter())
      expect(Array.isArray(result.current.itemsInformation.contactInfo)).toBe(
        true
      )
    })

    it('should return contactInfo with correct structure', () => {
      const { result } = renderHook(() => useFooter())
      const contactInfo = result.current.itemsInformation.contactInfo
      if (contactInfo.length > 0) {
        expect(contactInfo[0]).toHaveProperty('key')
        expect(contactInfo[0]).toHaveProperty('value')
        expect(contactInfo[0]).toHaveProperty('href')
      }
    })

    it('should return socialMedia array', () => {
      const { result } = renderHook(() => useFooter())
      expect(Array.isArray(result.current.itemsInformation.socialMedia)).toBe(
        true
      )
    })

    it('should filter socialMedia by active status', () => {
      const { result } = renderHook(() => useFooter())
      const socialMedia = result.current.itemsInformation.socialMedia
      expect(socialMedia.every(item => item.active === true)).toBe(true)
    })

    it('should return socialMedia with correct structure', () => {
      const { result } = renderHook(() => useFooter())
      const socialMedia = result.current.itemsInformation.socialMedia
      if (socialMedia.length > 0) {
        expect(socialMedia[0]).toHaveProperty('icon')
        expect(socialMedia[0]).toHaveProperty('name')
        expect(socialMedia[0]).toHaveProperty('url')
        expect(socialMedia[0]).toHaveProperty('active')
      }
    })
  })

  describe('return structure', () => {
    it('should return object with structure and itemsInformation properties', () => {
      const { result } = renderHook(() => useFooter())
      expect(result.current).toHaveProperty('structure')
      expect(result.current).toHaveProperty('itemsInformation')
    })

    it('should be stable across re-renders', () => {
      const { result, rerender } = renderHook(() => useFooter())
      const firstResult = result.current
      rerender()
      expect(result.current).toEqual(firstResult)
    })
  })
})
