import React, { ReactNode, useCallback, useEffect, useState } from "react";
import MainContainer from "../../../components/MainContainer";
import { Box, Grid } from "@mui/material";
import useWindowSize from "../../../hooks/useWindowSize";

export default function Experiment2() {
  const windowSize = useWindowSize();

  const [scrollTop, setScrollTop] = useState(0);

  const layerDistance = 30;

  const [shapeDimensions] = useState<{ min: number; max: number }>({
    min: 50,
    max: 150,
  });
  const [parallaxWidth, setParallaxWidth] = useState<number>(windowSize.width);
  const [shapes, setShapes] = useState<ReactNode[][]>([]);

  useEffect(() => {
    function onScroll() {
      const currentPosition = window.scrollY;
      setScrollTop(currentPosition <= 0 ? 0 : Math.floor(currentPosition));
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    if (windowSize.width !== 0) {
      setParallaxWidth(windowSize.width);
    }
  }, [windowSize, setParallaxWidth]);

  const drawShapes = useCallback((): ReactNode[][] => {
    const { min, max } = shapeDimensions;
    const axes = Math.ceil(windowSize.height / layerDistance + 1);

    const resultantArrays = [];

    for (let i = 0; i < axes; i++) {
      const shapeArray = [];
      let remainingParallaxWidth = parallaxWidth;
      while (remainingParallaxWidth !== 0) {
        const shapeMeasure = Math.floor(Math.random() * (max - min + 1) + min);
        const randomMargin =
          Math.floor(Math.random() * (max / 2 - 35 + 1) + min) - 75;
        const randomHueValue = () =>
          Math.floor(Math.random() * (255 - 100 + 1) + 100);
        let resultantStyles = {
          backgroundColor: `rgb(0, ${randomHueValue()}, 0)`,
          width: 0,
          height: 0,
          marginLeft: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: shapeArray.length + 1,
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        };
        if (shapeMeasure > remainingParallaxWidth) {
          resultantStyles = {
            ...resultantStyles,
            width: remainingParallaxWidth,
            height: remainingParallaxWidth,
          };
          remainingParallaxWidth = 0;
        } else {
          resultantStyles = {
            ...resultantStyles,
            width: shapeMeasure,
            height: shapeMeasure,
            marginLeft: `${shapeArray.length === 0 ? 0 : randomMargin}px`,
          };
          remainingParallaxWidth =
            remainingParallaxWidth - shapeMeasure - randomMargin;
        }
        // @ts-ignore
        shapeArray.push(
          <Box
            key={`shape-${String(shapeArray.length)}`}
            sx={resultantStyles}
          />
        );
      }

      remainingParallaxWidth = parallaxWidth;

      resultantArrays.push(shapeArray);
    }

    return resultantArrays;
  }, [parallaxWidth, shapeDimensions, windowSize]);

  useEffect(() => {
    if (shapes.length === 0 && parallaxWidth > 0) {
      setShapes(drawShapes());
    }
  }, [drawShapes, shapes, setShapes, parallaxWidth]);

  return (
    <MainContainer sx={{ backgroundColor: "rgb(0,100,0)", overflow: "hidden" }}>
      <Grid
        item
        container
        xs={12}
        sx={{ minHeight: windowSize.height * 3 }}
        alignItems="center"
        justifyContent="center"
      >
        {shapes.map((shapeArray, i) => (
          <Box
            key={`shape-row-${i}`}
            sx={{
              overflow: "visible",
              position: "fixed",
              top: "50%",
              marginTop: `${
                (-shapes.length / 2) * layerDistance + i * layerDistance
              }px`,
              width: "150%",
              height: "1px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              transform: `translateY(${
                (scrollTop / windowSize.height) * 10 * i
              }px)`,
              transition: "transform 0.2s",
              transitionDelay: "0.2s",
            }}
          >
            {shapeArray}
          </Box>
        ))}
      </Grid>
    </MainContainer>
  );
}
