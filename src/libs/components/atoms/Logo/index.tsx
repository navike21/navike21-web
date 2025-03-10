import clsx from 'clsx'
import { TSizes } from '@Types/types/common'
import styles from './Logo.module.scss'
import { Title } from '../Title'
import { Paragraph } from '../Paragraph'

interface ILogoProps {
  variation?: 'primary' | 'white' | 'black'
  size?: TSizes
}

export const Logo = ({ variation = 'primary', size = 'md' }: ILogoProps) => {
  return (
    <div
      className={clsx({
        [styles.logoContentXs]: size === 'xs',
        [styles.logoContentSm]: size === 'sm',
        [styles.logoContentMd]: size === 'md',
        [styles.logoContentLg]: size === 'lg',
        [styles.logoContentXl]: size === 'xl'
      })}
    >
      <svg
        className={clsx({
          [styles.logoWhite]: variation === 'white',
          [styles.logoPrimary]: variation === 'primary',
          [styles.logoBlack]: variation === 'black',
          [styles.logoXs]: size === 'xs',
          [styles.logoSm]: size === 'sm',
          [styles.logoMd]: size === 'md',
          [styles.logoLg]: size === 'lg',
          [styles.logoXl]: size === 'xl'
        })}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM15.6034 13.1752H11.9745V27.1337H15.6034V18.8314C15.7464 18.4809 15.9604 18.1403 16.2455 17.8093C16.7293 17.2289 17.3621 16.7514 18.1437 16.3769C18.9253 16.0025 19.7999 15.8152 20.7677 15.8152C22.0517 15.8152 22.9729 16.0961 23.5312 16.6578C24.1081 17.2008 24.3966 18.0621 24.3966 19.2417V27.1337H28.0255V18.5957C28.0255 17.6033 27.8766 16.7514 27.5788 16.0399C27.2811 15.3097 26.8624 14.7105 26.3227 14.2424C25.783 13.7743 25.1503 13.4279 24.4245 13.2033C23.6987 12.9786 22.9078 12.8662 22.0517 12.8662C21.0654 12.8662 20.1814 13.016 19.3998 13.3156C18.6182 13.6152 17.939 14.0271 17.3621 14.5514C16.8038 15.0569 16.3571 15.6186 16.0222 16.2365C15.851 16.5522 15.7114 16.8728 15.6034 17.1983V13.1752Z"
        />
      </svg>
      <div
        className={clsx({
          [styles.logoTextXs]: size === 'xs',
          [styles.logoTextSm]: size === 'sm',
          [styles.logoTextMd]: size === 'md',
          [styles.logoTextLg]: size === 'lg',
          [styles.logoTextXl]: size === 'xl'
        })}
      >
        <Title variant="h6">navike21</Title>
        <Paragraph variant="body1">A software company</Paragraph>
      </div>
    </div>
  )
}
