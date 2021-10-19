import React from "react";
import { Paper, Box } from "@mui/material";
import { SizeMe } from "react-sizeme";
import { keyframes } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const animation = (degs: number, size: number, cellSize: number) => keyframes`
  0% {
    transform: rotate(${degs}deg) scale(1);
  }
  50% { 
    transform: rotate(0deg) scale(${cellSize / size - 0.025});
  }
  100%{
    transform: rotate(${degs}deg) scale(1);
  }
`;

export default function HomeBackground() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  if (isSm) return null;
  return (
    <SizeMe monitorHeight monitorWidth refreshRate={32}>
      {({ size }) => {
        const cellSize = 48;
        const numberOfRows =
          Math.ceil(Math.round(Number(size?.height)) / cellSize) || 0;
        const numberOfColumns =
          Math.ceil(Math.round(Number(size?.width)) / cellSize) || 0;

        const rows: null[][] = [];

        for (let i = 0; i < numberOfRows; i++) {
          const column: null[] = [];
          for (let j = 0; j < numberOfColumns; j++) {
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
              backgroundColor: "transparent",
              zIndex: 0,
              overflow: "hidden",
            }}
          >
            {rows.map((row, i) =>
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
                    animation: `${animation(
                      j,
                      cellSize - j / 6,
                      cellSize
                    )} 10s linear infinite alternate`,

                    "&:hover": {
                      backgroundColor: ({ palette }) => palette.secondary.main,
                      height: cellSize,
                      width: cellSize,
                    },
                  }}
                />
              ))
            )}
          </Paper>
        );
      }}
    </SizeMe>
  );
}
