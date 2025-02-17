import { Content } from "@Components/Content/Content";
import React from "react";
import { ClientLogo, ContentClientLogo } from "./clients.style";
import { clients } from "@Utils/clients";
import { EGrey } from "@Enums/color";

export const Clients = () => {
  return (
    <Content
      backgroundColor={EGrey._900}
      subtitle={{
        text: "Ellos confían en nosotros",
        textAlign: "center",
      }}
    >
      <ContentClientLogo>
        {clients.map(({ icon, name, mode = "square" }) => (
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
    </Content>
  );
};
