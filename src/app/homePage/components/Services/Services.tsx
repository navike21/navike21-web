import { Content } from "@Components/Content/Content";
import React from "react";
import { ServicesWrapper } from "./services.style";
import { FeatureCard } from "@Components/FeatureCard/FeatureCard";
import { useServices } from "./services.hook";

export const Services = () => {
  const { services, iconServices } = useServices();

  return (
    <Content
      subtitle={{
        text: "Que te ofrecemos",
        textAlign: "center",
        color: "primary",
      }}
      title={{
        text: "Transformando empresas en la era digital",
        textAlign: "center",
      }}
    >
      <ServicesWrapper>
        {services.map(({ id, name, description, slug }) => (
          <FeatureCard
            key={id}
            icon={iconServices[id]}
            title={name}
            description={description}
            ctaText="Ver más"
            ctaLink={slug}
          />
        ))}
      </ServicesWrapper>
    </Content>
  );
};
