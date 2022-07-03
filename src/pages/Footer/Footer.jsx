import React from "react";
import { AppBar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          padding: "15px",
        }}>
        <Typography variant="h6">@dmnlgn</Typography>
      </AppBar>
    </>
  );
};

export default Footer;
