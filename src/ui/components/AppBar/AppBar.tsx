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
                fontSize: 30,
                color: ({ palette }) => palette.primary.light,
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
            {filteredRoutes.map(({ name, path, children }, i) => (
              <React.Fragment key={`app-bar-item-${name}`}>
                {!children ? (
                  <AppBarItem
                    path={path}
                    onClick={() => {
                      setDrawerIsOpen(false);
                    }}
                  >
                    {name}
                  </AppBarItem>
                ) : (
                  <>
                    <AppBarItem>{name}</AppBarItem>
                    <Box pl={3}>
                      {children
                        .filter(
                          ({ path: childrenPath }) =>
                            `${path}${childrenPath}` !== location.pathname
                        )
                        .map(({ name: childrenName, path: childrenPath }) => (
                          <AppBarItem
                            key={`${path}${childrenPath}`}
                            path={`${path}${childrenPath}`}
                          >
                            {childrenName}
                          </AppBarItem>
                        ))}
                    </Box>
                  </>
                )}
                {i < filteredRoutes.length - 1 && (
                  <Divider sx={{ backgroundColor: "red" }} />
                )}
              </React.Fragment>
            ))}
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </>
  );
}
