import { Almazen } from '@Components/atoms/clientsLogo/Almazen'
import { Anker } from '@Components/atoms/clientsLogo/Anker'
import { Beats } from '@Components/atoms/clientsLogo/Beats'
import { Carbyne } from '@Components/atoms/clientsLogo/Carbyne'
import { Circurela } from '@Components/atoms/clientsLogo/Circurela'
import { ColegioLaUnion } from '@Components/atoms/clientsLogo/ColegioLaUnion'
import { Eurogourmet } from '@Components/atoms/clientsLogo/Eurogourmet'
import { HammerBlocs } from '@Components/atoms/clientsLogo/HammerBlocs'
import { RkPower } from '@Components/atoms/clientsLogo/RkPower'
import { TentacionesGourmet } from '@Components/atoms/clientsLogo/TentacionesGourmet'
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
    logo: Eurogourmet
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
