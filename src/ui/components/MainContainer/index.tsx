import React from "react";
import { Container, ContainerProps } from "@mui/material";
import AppBar from "../AppBar/AppBar";

interface MainContainerProps extends ContainerProps {
  topPadding?: boolean;
}

export default function MainContainer({
  children,
  maxWidth = false,
  topPadding,
  sx,
  ...rest
}: MainContainerProps) {
  return (
    <Container
      maxWidth={maxWidth}
      sx={{ paddingTop: topPadding ? "48px" : 0, ...sx, overflowX: "hidden" }}
      disableGutters
      {...rest}
    >
      <AppBar />
      {children}
    </Container>
  );
}
