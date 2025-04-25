import { EService } from '@Enums/services'
import { ReactNode } from 'react'
import { BsMegaphone } from 'react-icons/bs'
import { IoMailOutline } from 'react-icons/io5'
import { MdOutlineCode } from 'react-icons/md'
import {
  PiDeviceMobileCameraLight,
  PiDevices,
  PiPaintBrush,
  PiShoppingCart
} from 'react-icons/pi'
import { TbSearch } from 'react-icons/tb'

type TIconServices = {
  [key in EService]: ReactNode
}

export const iconServices: TIconServices = {
  [EService.WEB_DEVELOPMENT]: <PiDevices />,
  [EService.CUSTOM_SOFTWARE]: <MdOutlineCode />,
  [EService.DIGITAL_MARKETING]: <BsMegaphone />,
  [EService.UX_UI]: <PiPaintBrush />,
  [EService.ECOMMERCE]: <PiShoppingCart />,
  [EService.MOBILE_APP]: <PiDeviceMobileCameraLight />,
  [EService.EMAIL_MARKETING]: <IoMailOutline />,
  [EService.SEO]: <TbSearch />
}
