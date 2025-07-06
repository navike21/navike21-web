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

import homeTentaciones from '@Assets/images/projects/tentaciones-gourmet/converted/home-mobile-thumb.webp'
import homeEuroGourmet from '@Assets/images/projects/eurogourmet/converted/home-mobile-thumb.webp'
import homeCarbyne from '@Assets/images/projects/carbyne-safety/converted/home-mobile-thumb.webp'
import homeRKPower from '@Assets/images/projects/rk-power/converted/home-mobile-thumb.webp'
import homeCircurela from '@Assets/images/projects/circurela/converted/home-mobile-thumb.webp'

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
    logo: TentacionesGourmet,
    images: {
      mobile: [homeTentaciones]
    }
  },
  {
    id: 'colegio-la-union',
    name: 'Colegio La Unión',
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
    logo: Carbyne,
    images: {
      mobile: [homeCarbyne]
    }
  },
  {
    id: 'circurela',
    name: 'Circurela',
    url: 'circurela.com',
    logo: Circurela,
    images: {
      mobile: [homeCircurela]
    }
  },
  {
    id: 'eurogourmet',
    name: 'Eurogourmet',
    url: 'eurogourmet.com.pe',
    logo: EuroGourmet,
    images: {
      mobile: [homeEuroGourmet]
    }
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
    logo: RkPower,
    images: {
      mobile: [homeRKPower]
    }
  }
]
