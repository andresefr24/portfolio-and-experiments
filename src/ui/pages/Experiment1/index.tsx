import React, { ReactNode, useState } from "react";
import MainContainer from "../../components/MainContainer";
import { Box, Grid } from "@mui/material";
import { keyframes } from "@emotion/react";

const lineAnimation = ({
  scale,
  originTransformation,
}: {
  scale: number;
  originTransformation: string;
}) => keyframes`
  0% {
    transform: ${originTransformation} translateY(${0}px);
  }
  100%{
    transform: ${originTransformation} translateY(${scale * 100}px);
  }
`;

export default function Experiment1() {
  const [width] = useState<number>(250);
  const [height] = useState<number>(300);

  const drawHorizontal = ({
    from = 0,
  }: {
    from: number | string | undefined;
  }): ReactNode[] => {
    const result: ReactNode[] = [];
    for (let i = 0; i < width; i = i + 2) {
      result.push(
        <Box
          sx={{
            position: "absolute",
            top: from,
            left: i,
            width: i % 3 ? "2px" : 0,
            height: Math.floor(Math.random() * 100),
            backgroundColor: "red",
            transform: `rotateX(90deg)`,
            transformOrigin: "top",
            animation: `${lineAnimation({
              scale: Math.random(),
              originTransformation: "rotateX(90deg)",
            })} ${
              Math.floor(Math.random() * (30 - 20)) + 20
            }s linear infinite alternate`,
          }}
        />
      );
    }
    return result;
  };

  const drawVertical = ({
    from = 0,
  }: {
    from: number | string | undefined;
  }): ReactNode[] => {
    const result = [];
    for (let i = 0; i < height; i = i + 2) {
      result.push(
        <Box
          sx={{
            position: "absolute",
            top: i,
            left: from,
            width: i % 3 ? "2px" : 0,
            height: Math.floor(Math.random() * 100),
            backgroundColor: "red",
            transform: `rotateX(90deg) rotateY(90deg)`,
            transformOrigin: "top",
            animation: `${lineAnimation({
              scale: Math.random(),
              originTransformation: `rotateX(90deg) rotateY(90deg)`,
            })} ${
              Math.floor(Math.random() * (30 - 20)) + 20
            }s linear infinite alternate`,
            animationDelay: `${Math.floor(Math.random() * (5 - 3)) + 3}s`,
          }}
        />
      );
    }
    return result;
  };

  return (
    <MainContainer sx={{ backgroundColor: "white", overflow: "hidden" }}>
      <Grid
        item
        container
        xs={12}
        sx={{ minHeight: "100vh" }}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{
            width: width,
            height: height,
            perspective: 100,
          }}
        >
          {drawHorizontal({ from: "100%" }).map((element) => element)}
          {drawHorizontal({ from: 0 }).map((element) => element)}
          {drawVertical({ from: "100%" }).map((element) => element)}
          {drawVertical({ from: 0 }).map((element) => element)}
        </Box>
      </Grid>
    </MainContainer>
  );
}
