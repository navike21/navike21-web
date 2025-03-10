import clsx from 'clsx'
import { IComponentProps } from '@Types/interfaces/common'
import styles from './Content.module.scss'

export const Content = ({ children, className }: IComponentProps) => {
  return <div className={clsx(styles.content, className)}>{children}</div>
}
