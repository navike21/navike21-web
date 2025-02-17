import React, { ReactNode } from "react";
import { Container, ContentTitle, Wrap } from "./content.style";
import { MainContent } from "./MainContent";
import { Title } from "@Components/Title/Title";

export interface IWrapProps {
  backgroundImage?: string;
  backgroundColor?: string;
}

export interface ITitleProps {
  textAlign?: "left" | "center" | "right";
  color?: "primary" | "white";
}

export interface ITitle extends ITitleProps {
  text: string;
}

export interface ISubtitle extends ITitleProps {
  text: string;
}

interface ContentProps extends IWrapProps {
  children: ReactNode;
  title?: ITitle;
  subtitle?: ISubtitle;
}

export const Content = ({
  backgroundImage,
  backgroundColor,
  children,
  subtitle,
  title,
}: ContentProps) => (
  <Wrap backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
    <Container>
      <MainContent>
        {(title || subtitle) && (
          <ContentTitle>
            {subtitle && (
              <Title
                type="subtitle"
                textAlign={subtitle.textAlign}
                variant="h4"
                color={subtitle.color}
              >
                {subtitle.text}
              </Title>
            )}
            {title && (
              <Title type="title2" textAlign={title.textAlign} variant="h3">
                {title.text}
              </Title>
            )}
          </ContentTitle>
        )}
        {children}
      </MainContent>
    </Container>
  </Wrap>
);
