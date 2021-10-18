import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function AppBarItem({
  path,
  children,
  onClick,
}: {
  path: string;
  children: ReactNode | string;
  onClick: () => void;
}) {
  return (
    <Box
      p={2}
      onClick={onClick}
      sx={{
        "& a": { textDecoration: "none" },
        height: 48,
        width: "100%",
      }}
    >
      <Link to={path}>
        <Typography
          variant="body1"
          sx={{ textTransform: "capitalize" }}
          color="grey.900"
        >
          {children}
        </Typography>
      </Link>
    </Box>
  );
}
