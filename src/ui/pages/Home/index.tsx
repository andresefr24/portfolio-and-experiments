import React from "react";
import MainContainer from "../../components/MainContainer";
import { Box, Grid, Typography, Fade, useMediaQuery } from "@mui/material";
import HomeBackground from "./components/HomeBackground";

export default function Home() {
  const isMdOrLess = useMediaQuery("(max-width:484px)");

  console.log(isMdOrLess);

  return (
    <MainContainer>
      <Grid
        item
        container
        xs={12}
        sx={{
          minHeight: "100vh",
        }}
        alignItems="center"
      >
        <HomeBackground />
        <Box
          p={4}
          sx={{
            borderRadius: 2,
            pl: isMdOrLess ? 3 : 12,
            zIndex: 1,
          }}
        >
          <Fade in>
            <Grid item container xs={12}>
              <Grid item container xs={12}>
                <Typography
                  variant={isMdOrLess ? "h4" : "h1"}
                  color="primary.light"
                  sx={{
                    lineHeight: isMdOrLess ? "42px" : "125px",
                    fontFamily: "Arimo",
                    fontWeight: 600,
                    letterSpacing: 0.5,

                    "& span": {
                      color: ({ palette }) => palette.secondary.main,
                    },
                  }}
                >
                  Hello<span>.</span> <br />
                  I am <br />
                  Andres
                </Typography>
                <br />
                <br />
                <br />
              </Grid>
              <Grid item container xs={12} sx={{ pt: isMdOrLess ? 1 : 3 }}>
                <Typography
                  variant={isMdOrLess ? "subtitle2" : "h5"}
                  color="primary.light"
                  sx={{
                    letterSpacing: isMdOrLess ? 8 : 15,
                    color: ({ palette }) => palette.secondary.main,
                  }}
                >
                  Frontend Developer
                </Typography>
                <br />
                <br />
              </Grid>
            </Grid>
          </Fade>
        </Box>
      </Grid>
    </MainContainer>
  );
}
