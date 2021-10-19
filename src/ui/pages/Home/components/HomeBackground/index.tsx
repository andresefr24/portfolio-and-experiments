import React from "react";
import { Paper, Box } from "@mui/material";
import { SizeMe } from "react-sizeme";
import { keyframes } from "@emotion/react";

const animation = (degs: number, size: number) => keyframes`
  0% {
    transform: rotate(${degs}deg) scale(1);
  }
  50% { 
    transform: rotate(0deg) scale(${48 / size - 0.025});
  }
  100%{
    transform: rotate(${degs}deg) scale(1);
  }
`;

export default function HomeBackground() {
  return (
    <SizeMe monitorHeight monitorWidth refreshRate={32}>
      {({ size }) => {
        const numberOfRows =
          Math.ceil(Math.round(Number(size?.height)) / 48) || 0;
        const numberOfColumns =
          Math.ceil(Math.round(Number(size?.width)) / 48) || 0;

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
                    top: 48 * i,
                    left: 48 * j,
                    height: 48 - j / 6,
                    width: 48 - j / 6,
                    backgroundColor: `#000000${58 - j}`,
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: `rotate(${j}deg)`,
                    transition: "all 0.2s",
                    animation: `${animation(
                      j,
                      48 - j / 6
                    )} 10s linear infinite alternate`,

                    "&:hover": {
                      backgroundColor: ({ palette }) => palette.secondary.main,
                      height: 48,
                      width: 48,
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
