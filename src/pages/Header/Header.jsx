import React from "react";

import { AppBar, CardHeader, TextField, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          padding: "15px",
        }}>
        <Typography variant="h4">ChuckNorris jokes</Typography>
      </AppBar>
    </>
  );
};

export default Header;
