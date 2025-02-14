import { EServices } from "@Enums/services";
import { useServices as useServicesPrincipal } from "@Hooks/useServices";
import { TfiWorld } from "react-icons/tfi";
import {
  FaLaptopCode,
  FaEnvelopeOpenText,
  FaPenNib,
  FaMobileAlt,
} from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { ReactElement } from "react";

type IIConServices = {
  [key in EServices]: ReactElement;
};

export const useServices = () => {
  const { services } = useServicesPrincipal();

  const iconServices: IIConServices = {
    [EServices.WEB_DEVELOPMENT]: <TfiWorld />,
    [EServices.CUSTOM_SOFTWARE]: <FaLaptopCode />,
    [EServices.EMAIL_MARKETING]: <FaEnvelopeOpenText />,
    [EServices.UX_UI_DESIGN]: <FaPenNib />,
    [EServices.ECOMMERCE_SOLUTIONS]: <HiShoppingCart />,
    [EServices.SEO]: <MdOutlineScreenSearchDesktop />,
    [EServices.DIGITAL_MARKETING]: <FaChartLine />,
    [EServices.MOBILE_APPS]: <FaMobileAlt />,
  };

  return {
    services,
    iconServices,
  };
};
