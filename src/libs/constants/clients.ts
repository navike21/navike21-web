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
import { ReactNode } from 'react'

interface IClient {
  id: string
  name: string
  best?: boolean
  logo: (params: ISvgProps) => ReactNode
}

export const clients: IClient[] = [
  {
    id: 'tentaciones-gourmet',
    name: 'Tentaciones Gourmet',
    best: true,
    logo: TentacionesGourmet
  },
  {
    id: 'almazen',
    name: 'Almazen',
    logo: Almazen
  },
  {
    id: 'anker',
    name: 'Anker',
    logo: Anker
  },
  {
    id: 'beats',
    name: 'Beats',
    logo: Beats
  },
  {
    id: 'carbyne',
    name: 'Carbyne',
    logo: Carbyne
  },
  {
    id: 'circurela',
    name: 'Circurela',
    logo: Circurela
  },
  {
    id: 'colegio-la-union',
    name: 'Colegio La Unión',
    logo: ColegioLaUnion
  },
  {
    id: 'eurogourmet',
    name: 'Eurogourmet',
    logo: EuroGourmet
  },
  {
    id: 'hammer-blocs',
    name: 'Hammer Blocs',
    logo: HammerBlocs
  },
  {
    id: 'rk-power',
    name: 'RK Power',
    logo: RkPower
  }
]
