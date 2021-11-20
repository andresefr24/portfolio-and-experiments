import React, { ReactNode, useState } from "react";
import MainContainer from "../../../components/MainContainer";
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

  const getOrientationStyles = ({
    orientation = "horizontal",
    pixelsFromOrigin = 0,
    from = "0",
  }: {
    orientation: "horizontal" | "vertical";
    pixelsFromOrigin: number;
    from: string | number;
  }) => {
    let orientationStyles = {};

    if (orientation === "horizontal") {
      orientationStyles = {
        ...orientationStyles,
        top: from,
        left: pixelsFromOrigin,
      };
    }
    if (orientation === "vertical") {
      orientationStyles = {
        ...orientationStyles,
        top: pixelsFromOrigin,
        left: from,
      };
    }
    return orientationStyles;
  };

  const draw = ({
    orientation,
    from = "0",
  }: {
    orientation: "horizontal" | "vertical";
    from: string | number;
  }): ReactNode[] => {
    const result: ReactNode[] = [];

    const maxMeasure = orientation === "horizontal" ? width : height;

    for (let i = 0; i < maxMeasure; i = i + 2) {
      const transformation = `rotateX(90deg)${
        orientation === "vertical" ? " rotateY(90deg)" : ""
      }`;
      result.push(
        <Box
          sx={{
            ...getOrientationStyles({ orientation, pixelsFromOrigin: i, from }),
            position: "absolute",
            width: i % 3 ? "2px" : 0,
            height: Math.floor(Math.random() * 100),
            backgroundColor: "white",
            transform: transformation,
            transformOrigin: "top",
            animation: `${lineAnimation({
              scale: Math.random(),
              originTransformation: transformation,
            })} ${
              Math.floor(Math.random() * (30 - 20)) + 20
            }s linear infinite alternate`,
            animationDelay: `${Math.floor(Math.random() * (5 - 3)) + 1}s`,
          }}
        />
      );
    }
    return result;
  };

  return (
    <MainContainer sx={{ backgroundColor: "black", overflow: "hidden" }}>
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
          {draw({ orientation: "horizontal", from: "100%" }).map(
            (element) => element
          )}
          {draw({ orientation: "horizontal", from: 0 }).map(
            (element) => element
          )}
          {draw({ orientation: "vertical", from: "100%" }).map(
            (element) => element
          )}
          {draw({ orientation: "vertical", from: 0 }).map((element) => element)}
        </Box>
      </Grid>
    </MainContainer>
  );
}
