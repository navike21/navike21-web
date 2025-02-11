import React, { ReactNode } from "react";
import { Container, Wrap } from "./content.style";

export interface WrapProps {
  backgroundImage?: string;
  backgroundColor?: string;
}

interface ContentProps extends WrapProps {
  children: ReactNode;
}

export const Content = ({
  backgroundImage,
  backgroundColor,
  children,
}: ContentProps) => (
  <Wrap backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
    <Container>{children}</Container>
  </Wrap>
);
