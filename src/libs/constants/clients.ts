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
import { type SvgProps } from '@Types/svg'
import { type ReactNode } from 'react'

interface Client {
  id: string
  name: string
  best?: boolean
  url: string
  logo: (params: SvgProps) => ReactNode
}

export const CLIENTS: Client[] = [
  {
    id: 'tentaciones-gourmet',
    name: 'Tentaciones Gourmet',
    best: true,
    url: 'https://tentacionesgourmet.pe/',
    logo: TentacionesGourmet
  },
  {
    id: 'colegio-la-union',
    name: 'Colegio La Unión',
    best: true,
    url: 'https://www.launion.edu.pe',
    logo: ColegioLaUnion
  },
  {
    id: 'almazen',
    name: 'Almazen',
    url: 'https://almazen.com.pe',
    logo: Almazen
  },
  {
    id: 'anker',
    name: 'Anker',
    url: 'https://ankerpaints.com',
    logo: Anker
  },
  {
    id: 'carbyne',
    name: 'Carbyne',
    url: 'https://carbyne-safety.com',
    logo: Carbyne
  },
  {
    id: 'beats',
    name: 'Beats',
    url: 'https://beatsmusica.com',
    logo: Beats
  },
  {
    id: 'circurela',
    name: 'Circurela',
    url: 'https://circurela.com',
    logo: Circurela
  },
  {
    id: 'eurogourmet',
    name: 'Eurogourmet',
    url: 'https://eurogourmet.com.pe',
    logo: EuroGourmet
  },
  {
    id: 'hammer-blocs',
    name: 'Hammer Blocs',
    url: 'https://hammerblocs.com',
    logo: HammerBlocs
  },
  {
    id: 'rk-power',
    name: 'RK Power',
    url: 'https://rkpower.com',
    logo: RkPower
  }
]
