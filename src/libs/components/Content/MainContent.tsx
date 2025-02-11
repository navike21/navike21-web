import React, { ReactNode } from "react";
import { MainContainer } from "./content.style";
import { Grid2Props } from "@mui/material";

interface IMainContentProps extends Grid2Props {
  children: ReactNode;
}

export const MainContent = ({ children, ...props }: IMainContentProps) => (
  <MainContainer {...props}>{children}</MainContainer>
);
