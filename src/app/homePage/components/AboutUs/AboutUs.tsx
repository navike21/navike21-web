import { Content } from "@Components/Content/Content";
import React from "react";
import {
  AboutUsContent,
  AboutUsInfo,
  ImageAboutUs,
  MainContentAbout,
} from "./aboutUs.style";
import { ABOUT_US_BACKGROUND } from "@Assets/images/images";
import { Title } from "@Components/Title/Title";
import { LinkButton } from "@Components/LinkButton/LinkButton";

export const AboutUs = () => {
  return (
    <Content>
      <MainContentAbout>
        <ImageAboutUs
          src={ABOUT_US_BACKGROUND}
          width={100}
          height={100}
          alt="image-about-us"
          quality={100}
        />
        <AboutUsInfo>
          <Title variant="h4" type="subtitle" color="primary">
            ¿Quiénes somos?
          </Title>
          <Title variant="h3" type="title2">
            Personas detrás de cada solución.
          </Title>
          <AboutUsContent>
            En navike21 combinamos creatividad y tecnología para transformar
            ideas en resultados.
          </AboutUsContent>
          <LinkButton href="/about-us" color="primary">
            Leer más
          </LinkButton>
        </AboutUsInfo>
      </MainContentAbout>
    </Content>
  );
};
