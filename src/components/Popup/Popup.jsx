import React, { useEffect, useState } from "react";
import { fetchRandomJoke } from "../../scripts/fetch";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from "@mui/material";

const Popup = (props) => {
  const { onClose, selectedValue, open, category } = props;

  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetchRandomJoke(category, (data) => setJoke(data));
  }, []);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const onClick = () => {
    fetchRandomJoke(category, (data) => setJoke(data));
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        open={open}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px",
              backgroundColor: "#160019",
              "& .MuiCardContent-root": {
                height: "150px",
                overflowY: "scroll",
              },
            },
          },
        }}>
        <DialogTitle>
          Category: {category}
          {onClose ? (
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                borderRadius: "5px",
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[300],
              }}>
              {"x"}
            </IconButton>
          ) : null}
        </DialogTitle>
        {joke && (
          <DialogContent>
            <Typography variant="subtitle1" gutterBottom component="div">
              created: {joke?.created_at}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              gutterBottom
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                "& a": {
                  color: "#0ec9d0;",
                  height: "25px",
                  display: "flex",
                },
              }}>
              source url: <a href={joke?.url}>{joke?.url}</a>
            </Typography>
            <Card>
              <CardContent variant="outlined">
                <Typography paragraph>{joke?.value}</Typography>
              </CardContent>
            </Card>
            <CardActions>
              <Button
                color="secondary"
                variant="outlined"
                size="medium"
                onClick={onClick}>
                NEXT RANDOM JOKE
              </Button>
            </CardActions>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default Popup;
