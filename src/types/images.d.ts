// Type declarations for image imports
// Next.js handles image imports and returns StaticImageData

declare module '*.jpg' {
  import type { StaticImageData } from 'next/image'
  const content: StaticImageData
  export default content
}

declare module '*.jpeg' {
  import type { StaticImageData } from 'next/image'
  const content: StaticImageData
  export default content
}

declare module '*.png' {
  import type { StaticImageData } from 'next/image'
  const content: StaticImageData
  export default content
}

declare module '*.webp' {
  import type { StaticImageData } from 'next/image'
  const content: StaticImageData
  export default content
}

declare module '*.avif' {
  import type { StaticImageData } from 'next/image'
  const content: StaticImageData
  export default content
}

declare module '*.gif' {
  import type { StaticImageData } from 'next/image'
  const content: StaticImageData
  export default content
}

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.ico' {
  const content: string
  export default content
}
