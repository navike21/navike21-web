import {
  Almazen,
  Anker,
  Beats,
  Carbyne,
  Circurela,
  ColegioLaUnion,
  EuroGourmet,
  HammerBlocs,
  RkPower,
  TentacionesGourmet
} from '@Components/atoms'
import { ISvgProps } from '@Types/svg'
import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

interface IClientImage {
  mobile: StaticImageData[]
}
interface IClient {
  id: string
  name: string
  best?: boolean
  url: string
  logo: (params: ISvgProps) => ReactNode
  images?: IClientImage
}

export const clients: IClient[] = [
  {
    id: 'tentaciones-gourmet',
    name: 'Tentaciones Gourmet',
    best: true,
    url: 'tentaciones-gourmet.pe',
    logo: TentacionesGourmet
  },
  {
    id: 'colegio-la-union',
    name: 'Colegio La Unión',
    best: true,
    url: 'www.launion.edu.pe',
    logo: ColegioLaUnion
  },
  {
    id: 'almazen',
    name: 'Almazen',
    url: 'almazen.com.pe',
    logo: Almazen
  },
  {
    id: 'anker',
    name: 'Anker',
    url: 'ankerpaints.com',
    logo: Anker
  },
  {
    id: 'beats',
    name: 'Beats',
    url: 'beatsmusica.com',
    logo: Beats
  },
  {
    id: 'carbyne',
    name: 'Carbyne',
    url: 'carbyne-safety.com',
    logo: Carbyne
  },
  {
    id: 'circurela',
    name: 'Circurela',
    url: 'circurela.com',
    logo: Circurela
  },
  {
    id: 'eurogourmet',
    name: 'Eurogourmet',
    url: 'eurogourmet.com.pe',
    logo: EuroGourmet
  },
  {
    id: 'hammer-blocs',
    name: 'Hammer Blocs',
    url: 'hammerblocs.com',
    logo: HammerBlocs
  },
  {
    id: 'rk-power',
    name: 'RK Power',
    url: 'rkpower.com',
    logo: RkPower
  }
]
