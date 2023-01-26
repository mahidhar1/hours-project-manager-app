import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import Row from "../../components/Row";

import DialogBoxAddProject from "../../components/DialogBoxAddProject";

const ActionButton = styled(Button)(({ theme }) => ({
  fontSize: "0.8rem",
  lineHeight: "1rem",
  margin: "4px 8px 0 8px",
  height: "24px",
}));

// const StyledDateInput = styled(TextField)(({ theme }) => ({
//   padding: 0,
//   backgroundColor: "#838383",
//   [theme.breakpoints.up("md")]: {},
//   [theme.breakpoints.down("md")]: {},
// }));

function ListActionButtons() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Row
        sx={{
          justifyContent: "flex-start",
          padding: "0px 0px 8px 32px",
        }}
      >
        <Typography variant="h6">Budget Status</Typography>
        <ActionButton variant="contained" onClick={handleOpen}>
          Add new Project
        </ActionButton>
        <ActionButton
          variant="outlined"
          sx={{ backgroundColor: "#fff", fontWeight: "600" }}
        >
          Download Report
        </ActionButton>
        <ActionButton
          variant="outlined"
          sx={{ backgroundColor: "#fff", fontWeight: "600" }}
        >
          dd/mm/yyyy - dd/mm/yyyy
        </ActionButton>
        <ActionButton
          variant="outlined"
          sx={{ backgroundColor: "#fff", fontWeight: "600" }}
        >
          Filter
        </ActionButton>
      </Row>
      <DialogBoxAddProject
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
      />
    </>
  );
}

export default ListActionButtons;
