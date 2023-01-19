import { Button, Typography } from "@mui/material";
import React from "react";
import Row from "../../components/Row";

function ListActionButtons() {
  return (
    <Row
      sx={{
        justifyContent: "flex-start",
        border: "1px solid blue",
      }}
    >
      <Typography>Budget Status</Typography>
      <Button variant="contained">Add new Project</Button>
      <Button variant="outlined">Download Report</Button>
      <Button variant="outlined">dd/mm/yyyy - dd/mm/yyyy</Button>
      <Button variant="outlined">Filter</Button>
    </Row>
  );
}

export default ListActionButtons;
