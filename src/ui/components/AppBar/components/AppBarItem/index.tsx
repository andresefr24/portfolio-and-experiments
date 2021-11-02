import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function AppBarItem({
  path,
  children,
  onClick,
}: {
  path?: string;
  children: ReactNode | string;
  onClick?: () => void;
}) {
  return (
    <Box
      p={3}
      onClick={onClick}
      sx={{
        "& a": { textDecoration: "none" },
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {path ? (
        <Link to={path}>
          <Typography
            variant="body1"
            sx={{ textTransform: "capitalize" }}
            color="primary.light"
          >
            {children}
          </Typography>
        </Link>
      ) : (
        <Typography
          variant="body1"
          sx={{ textTransform: "capitalize" }}
          color="primary.light"
        >
          {children}
        </Typography>
      )}
    </Box>
  );
}
