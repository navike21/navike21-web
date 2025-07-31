import { GradientText } from '@Components/atoms'
import { uuidV7 } from './generateKeys'
import { Fragment } from 'react'

export function parseTitleWithHighlight(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map(part => {
    const regex = /^\*\*(.+)\*\*$/
    const match = regex.exec(part)
    if (match) {
      return <GradientText key={uuidV7()}>{match[1]}</GradientText>
    }
    return <Fragment key={uuidV7()}>{part}</Fragment>
  })
}
