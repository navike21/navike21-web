import type { StaticImageData } from 'next/image'

export interface TestimonialsItemProps {
  author: string
  role: string
  content: string
  avatar: string | StaticImageData
  starRating?: number
}
