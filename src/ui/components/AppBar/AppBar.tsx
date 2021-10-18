import React, { useState } from "react";
import {
  AppBar as MUIAppBar,
  AppBarProps,
  Box,
  Grid,
  IconButton,
  SwipeableDrawer,
  Divider,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import routes from "../../routes";
import AppBarItem from "./components/AppBarItem";
import { useHistory } from "react-router-dom";

export default function AppBar(props: AppBarProps) {
  const { location } = useHistory();

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const filteredRoutes = routes.filter(
    ({ path }) => path !== location.pathname
  );

  return (
    <>
      <MUIAppBar {...props}>
        <Grid item container xs={12} alignItems="center">
          <IconButton size="small" onClick={() => setDrawerIsOpen(true)}>
            <Menu
              sx={{
                fontSize: 24,
                color: ({ palette }) => palette.primary.dark,
              }}
            />
          </IconButton>
        </Grid>
      </MUIAppBar>

      <React.Fragment key="left">
        <SwipeableDrawer
          anchor="left"
          open={drawerIsOpen}
          onClose={() => setDrawerIsOpen(false)}
          onOpen={() => setDrawerIsOpen(true)}
        >
          <Box
            sx={{
              minWidth: 300,
              backgroundColor: ({ palette }) => palette.primary.main,
              height: "100%",
              overflowX: "hidden",
            }}
          >
            {filteredRoutes.map(({ name, path }, i) => (
              <>
                <AppBarItem
                  key={`app-bar-item-${name}`}
                  path={path}
                  onClick={() => {
                    setDrawerIsOpen(false);
                  }}
                >
                  {name}
                </AppBarItem>
                {i < filteredRoutes.length - 1 && (
                  <Divider sx={{ backgroundColor: "red" }} />
                )}
              </>
            ))}
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </>
  );
}
