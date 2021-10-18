import React from "react";
import MainContainer from "../../components/MainContainer";
import { Grid, Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <MainContainer>
      <Grid
        item
        container
        xs={12}
        sx={{ minHeight: "100vh" }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3" color="primary">
          About me
        </Typography>
      </Grid>
    </MainContainer>
  );
}
