import { ReactNode } from 'react'

export interface IComponentPropsBase {
  children: ReactNode
}
export interface IComponentProps extends IComponentPropsBase {
  className?: string
}
