import React from "react";
import { Paper, Box } from "@mui/material";
import { SizeMe } from "react-sizeme";
import { keyframes } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const squareAnimation = (
  degs: number,
  size: number,
  cellSize: number
) => keyframes`
  0% {
    transform: rotate(${degs * 1.25}deg) scale(1);
  }
  25% { 
    transform: rotate(0deg) scale(${cellSize / size - 0.025});
  }
  50%{
    transform: rotate(${-degs * 1.25}deg) scale(1);
  }
  75% {
    transform: rotate(0deg) scale(${cellSize / size - 0.025});
  }
  100%{
    transform: rotate(${degs * 1.25}deg) scale(1);
  }
`;

const fadeIn = keyframes`
  0& {
    background-color: rgba(0,0,0,1);
   }
  100% {
    background-color: rgba(0,0,0,0.5);
  }
`;

export default function HomeBackground() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <SizeMe monitorHeight monitorWidth refreshRate={32}>
      {({ size }) => {
        const cellSize = 48;
        const numberOfRows =
          Math.ceil(Math.round(Number(size?.height)) / cellSize) || 0;
        const numberOfColumns =
          Math.ceil(Math.round(Number(size?.width)) / cellSize) || 0;

        const rows: null[][] = [];

        for (let i = 0; i <= numberOfRows; i++) {
          const column: null[] = [];
          for (let j = 0; j <= numberOfColumns; j++) {
            column.push(null);
          }
          rows.push(column);
        }

        return (
          <Paper
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: 0,
              overflow: "hidden",
              background: `linear-gradient(45deg, #028090, #E4FDE1)`,
            }}
          >
            <Paper
              sx={{
                height: "110%",
                width: "110%",
                backgroundColor: "black",
                animation: `${fadeIn} 1s linear forwards`,
                animationDelay: "1s",
                position: "absolute",
                top: -cellSize / 2,
                left: -cellSize / 2,
              }}
            >
              {!isSm &&
                rows.map((row, i) =>
                  row.map((_, j) => (
                    <Box
                      key={`home-background-cell-${String(i)}-${String(j)}`}
                      sx={{
                        position: "absolute",
                        top: cellSize * i,
                        left: cellSize * j,
                        height: cellSize - j / 6,
                        width: cellSize - j / 6,
                        backgroundColor: `#000000${cellSize + 10 - j}`,
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transform: `rotate(${j}deg)`,
                        transition: "all 0.2s",
                        animation: `${squareAnimation(
                          j + 8,
                          cellSize - j / 6,
                          cellSize
                        )} 15s linear infinite alternate`,
                      }}
                    />
                  ))
                )}
            </Paper>
          </Paper>
        );
      }}
    </SizeMe>
  );
}
