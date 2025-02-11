import { Content } from "@Components/Content/Content";
import { useThemeMui } from "@Hooks/useThemeMui";
import React from "react";
import { ClientLogo, ContentClientLogo } from "./clients.style";
import { clients } from "@Utils/clients";
import { Title } from "@Components/Title/Title";
import { MainContent } from "@Components/Content/MainContent";

export const Clients = () => {
  const { palette } = useThemeMui();
  return (
    <Content backgroundColor={palette.grey[900]}>
      <MainContent>
        <Title type="subtitle" textAlign="center" variant="h4">
          Ellos confían en nosotros
        </Title>
        <ContentClientLogo>
          {clients.map(({ icon, name, mode = "sqare" }) => (
            <ClientLogo
              key={name}
              src={icon}
              alt="Client logo"
              width={200}
              height={100}
              mode={mode}
            />
          ))}
        </ContentClientLogo>
      </MainContent>
    </Content>
  );
};
