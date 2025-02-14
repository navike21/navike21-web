import { ELanguage } from "@Enums/languages";
import { EServices } from "@Enums/services";

export interface IServiceInfo {
  id: EServices;
  name: string;
  slug: string;
  description: string;
}

export type IService = {
  [key in ELanguage]: IServiceInfo[];
};
