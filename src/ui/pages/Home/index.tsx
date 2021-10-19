import React from "react";
import MainContainer from "../../components/MainContainer";
import { Box, Grid, Typography } from "@mui/material";
import HomeBackground from "./components/HomeBackground";

export default function Home() {
  return (
    <MainContainer>
      <Grid
        item
        container
        xs={12}
        sx={{
          minHeight: "100vh",
          background: () => `linear-gradient(45deg, #028090, #E4FDE1)`,
        }}
        alignItems="center"
        justifyContent="center"
      >
        <HomeBackground />
        <Box
          p={4}
          sx={{
            backgroundColor: ({ palette }) => palette.primary.dark,
            borderRadius: 2,
            width: "50%",
            zIndex: 1,
          }}
        >
          <Grid item container xs={12}>
            <Grid item container xs={12}>
              <Typography variant="h4" color="primary.light">
                Welcome!
              </Typography>
              <br />
              <br />
              <br />
            </Grid>
            <Grid item container xs={12}>
              <Typography variant="body1" color="primary.light">
                I`m Andrés, a Madrid based venezuelan frontend developer that
                loves to doodle and make visual experiments.
              </Typography>
              <br />
              <br />
            </Grid>
            <Grid item container xs={12}>
              <Typography variant="body1" color="primary.light">
                I`ve made this website to let the world see those alive and also
                to publish some articles about the daily life of a frontend
                developer.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </MainContainer>
  );
}
