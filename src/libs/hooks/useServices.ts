import services from "@Translations/services.json";
import { IServiceInfo } from "@Types/services";
import { useOptionsBrowserStore } from "@Store/optionBrowser/optionBrowser.hook";

import { useNavigation } from "./useNavigation";
import { EServices } from "@Enums/services";

export const useServices = () => {
  const { language } = useOptionsBrowserStore();
  const {
    servicesMenu: { slug: slugServices },
  } = useNavigation();

  const servicesRefactor: IServiceInfo[] = services[language].map(
    ({ id, name, description, slug }) => ({
      id: id as EServices,
      name,
      slug: `${slugServices}/${slug}`,
      description,
    })
  );

  return {
    services: servicesRefactor,
  };
};
