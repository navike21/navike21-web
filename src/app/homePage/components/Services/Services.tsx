import { Content } from "@Components/Content/Content";
import { MainContent } from "@Components/Content/MainContent";
import { Title } from "@Components/Title/Title";
import React from "react";
import { ContentTitle, ServicesWrapper } from "./services.style";
import { FeatureCard } from "@Components/FeatureCard/FeatureCard";
import { useServices } from "./services.hook";

export const Services = () => {
  const { services, iconServices } = useServices();

  return (
    <Content>
      <MainContent>
        <ContentTitle>
          <Title
            type="subtitle"
            textAlign="center"
            variant="h4"
            color="primary"
          >
            Que te ofrecemos
          </Title>
          <Title type="title2" textAlign="center" variant="h3">
            Transformando empresas en la era digital
          </Title>
        </ContentTitle>

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
      </MainContent>
    </Content>
  );
};
