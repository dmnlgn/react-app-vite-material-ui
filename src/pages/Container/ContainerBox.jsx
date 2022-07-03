import React, { useEffect, useState } from "react";

import {
  Container,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from "@mui/material";
import Sort from "../../components/Sort/Sort";
import Popup from "../../components/Popup/Popup";

const ContainerBox = (props) => {
  const [chuckCategories, setChuckCategories] = useState([]);
  const [value, setValue] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);

  useEffect(() => {
    setChuckCategories(props.chuckCategories);
  }, [props.chuckCategories]);

  const handleClick = (event) => {
    const value = event.target.innerText;
    setValue(value);
    setDialogVisible(true);
  };

  const onClose = () => {
    setDialogVisible(false);
  };

  const getSorted = (sorted) => {
    setChuckCategories(sorted);
  };

  return (
    <>
      <Container maxWidth="100%">
        <Paper sx={{ width: "300px", margin: "0 auto" }}>
          <Sort getSorted={getSorted} chuckCategories={chuckCategories} />
          <MenuList>
            {chuckCategories.map((element, index) => (
              <MenuItem key={index} onClick={handleClick}>
                <ListItemText>{element}</ListItemText>
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Container>
      {dialogVisible && (
        <Popup open={dialogVisible} onClose={onClose} category={value} />
      )}
    </>
  );
};

export default ContainerBox;
