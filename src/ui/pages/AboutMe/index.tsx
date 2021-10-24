import React from "react";
import MainContainer from "../../components/MainContainer";
import { Box, Divider, Grid, Typography } from "@mui/material";
import portrait from "../../../assets/images/AndresE1.png";
import hexagonPrimary from "../../../assets/vectors/hex-primary-main.svg";
import hexagonSecondary from "../../../assets/vectors/hex-secondary-main.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function AboutMe() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MainContainer>
      <Box
        sx={{
          position: "absolute",
          backgroundImage: `url(${hexagonPrimary})`,
          backgroundSize: "150%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 80%",
          width: "70%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "70%",
            left: "75%",
            height: "10vw",
            width: "10vw",
            backgroundColor: ({ palette }) => palette.primary.dark,
            mask: `url(${hexagonPrimary})`,
            maskSize: "100%",
          }}
        />
      </Box>
      <Grid
        item
        container
        xs={12}
        sx={{ minHeight: "100vh", p: isSm ? 3 : 12 }}
        alignItems="center"
        direction={isSm ? "column-reverse" : "row"}
      >
        <Grid item container xs={isSm ? 12 : 6}>
          <Box
            sx={{
              width: "100%",
              p: 4,
              zIndex: 1,
            }}
          >
            <Typography variant="h3" color="primary.light">
              About me
            </Typography>
            <Divider
              sx={{
                backgroundColor: ({ palette }) => palette.secondary.main,
                mt: 3,
                mb: 4,
                height: 2,
                width: "30%",
              }}
            />

            <Typography variant="body1" color="primary.light">
              {`I'm Andrés Ferrero, a Madrid based venezuelan frontend developer
                    with over 7 years experience. An enthusiast of aesthetics and art that occasionally enjoys making visual experiments and pushing the boundaries of the frontend stack.`}
            </Typography>
            <br />
            <Typography variant="body1" color="primary.light">
              {`Lately, i've been focusing my career path towards software architecture patterns applied to frontend projects.`}
            </Typography>
            <br />
            <Typography variant="body1" color="primary.light">
              {`I made this website to post some of my discoveries during my work as a developer, show what i'm capable of, have fun making visual experiments and let the world know me better through my work.`}
            </Typography>
            <br />
            <Typography variant="body1" color="primary.light">
              {`I usually find inspiration in geometric shapes and progressions like fractals. Also video games, other artists and developers.`}
            </Typography>
            <br />
            <Typography variant="body1" color="primary.light">
              {`Besides all that, I play guitar and sing on the band 'Los Oxidados'. I like sci-fi, epic, animated, and mentally challenging films (and series). I'm also a big fan of RPG, adventure and strategy video games. I enjoy occasional hikes and riding my longboard.`}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          xs={isSm ? 12 : 6}
          sx={{ p: 4 }}
          justifyContent="center"
        >
          <Box
            sx={{
              background: `url(${hexagonSecondary})`,
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "114%",
              width: isSm ? "50vw" : "25vw",
              height: isSm ? "60vw" : "30vw",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                paddingTop: "1px",
                width: "100%",
                height: "100%",
                backgroundSize: "100%",
                backgroundPosition: "100% 40%",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${portrait})`,
                backgroundBlendMode: "multiply",
                mask: `url(${hexagonSecondary})`,
                maskSize: "140%",
                maskRepeat: "no-repeat",
                maskPosition: "bottom center",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </MainContainer>
  );
}
