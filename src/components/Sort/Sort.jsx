import React from "react";

import { Button, CardActions } from "@mui/material";

const Sort = (props) => {
  const chuckCategories = props.chuckCategories;

  const sortAsc = () => {
    const sorted = chuckCategories.sort();
    props.getSorted(() => [...sorted]);
  };

  const sortDesc = () => {
    const sorted = chuckCategories.sort().reverse();
    props.getSorted(() => [...sorted]);
  };

  return (
    <>
      <CardActions
        sx={{
          justifyContent: "space-around",
        }}>
        <Button
          color="secondary"
          variant="outlined"
          size="medium"
          onClick={() => sortAsc("ASC")}>
          SORT ASC
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          size="medium"
          onClick={() => sortDesc("DESC")}>
          SORT DESC
        </Button>
      </CardActions>
    </>
  );
};

export default Sort;
