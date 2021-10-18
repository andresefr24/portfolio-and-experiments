import React from "react";
import MainContainer from "../../components/MainContainer";
import { Grid, Typography } from "@mui/material";

export default function Home() {
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
          Home
        </Typography>
      </Grid>
    </MainContainer>
  );
}
