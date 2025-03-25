import { Fragment } from 'react'
import { generateUUID } from './uuid'

export const formatTextToElements = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g)

  return parts.map(part => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <span key={generateUUID()}>{part.slice(2, -2)}</span>
    }
    return <Fragment key={generateUUID()}>{part}</Fragment>
  })
}
