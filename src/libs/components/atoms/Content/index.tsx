import { IComponentProps } from '@Types/interfaces/common'
import styles from './Content.module.scss'
import clsx from 'clsx'

export const Content = ({ children, className }: IComponentProps) => {
  return <div className={clsx(styles.content, className)}>{children}</div>
}
