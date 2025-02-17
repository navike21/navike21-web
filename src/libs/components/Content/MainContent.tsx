import React, { ReactNode } from "react";
import { MainContainer } from "./content.style";
import { Grid2Props } from "@mui/material";

export interface IMainContentProps extends Grid2Props {
  children: ReactNode;
  contentDirection: "row" | "column";
}

export const MainContent = ({
  children,
  contentDirection,
  ...props
}: IMainContentProps) => (
  <MainContainer contentDirection={contentDirection} {...props}>
    {children}
  </MainContainer>
);
