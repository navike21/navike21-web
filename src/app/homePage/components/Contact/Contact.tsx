import { Content } from "@Components/Content/Content";
import { MainContent } from "@Components/Content/MainContent";
import { Title } from "@Components/Title/Title";
import { useThemeMui } from "@Hooks/useThemeMui";
import React from "react";

export const Contact = () => {
  const { palette } = useThemeMui();
  return (
    <Content backgroundColor={palette.grey[900]}>
      <MainContent>
        <Title type="subtitle" variant="h4" color="primary">
          ¿Por qué contactarnos?
        </Title>
        <Title type="title2" variant="h3">
          Apoyamos tu crecimiento y desarrollo de manera creativa y profesional.
        </Title>
      </MainContent>
    </Content>
  );
};
