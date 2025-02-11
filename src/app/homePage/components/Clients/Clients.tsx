import { Content } from "@Components/Content/Content";
import { useThemeMui } from "@Hooks/useThemeMui";
import React from "react";
import {
  ClientLogo,
  ClientTitle,
  ContentClientLogo,
  MainClients,
} from "./clients.style";
import { clients } from "@Utils/clients";

export const Clients = () => {
  const { palette } = useThemeMui();
  return (
    <Content backgroundColor={palette.grey[900]}>
      <MainClients>
        <ClientTitle>Ellos confían en nosotros</ClientTitle>
        <ContentClientLogo>
          {clients.map(({ icon, name }) => (
            <ClientLogo
              key={name}
              src={icon}
              alt="Client logo"
              width={200}
              height={100}
            />
          ))}
        </ContentClientLogo>
      </MainClients>
    </Content>
  );
};
