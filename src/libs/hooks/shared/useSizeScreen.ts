import { useEffect, useState } from 'react'

type TSizeScreen = {
  width: number
  height: number
}
export const useSizeScreen = () => {
  const [size, setSize] = useState<TSizeScreen>({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return size
}
