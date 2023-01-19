import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Row from "./Row";

function Navbar() {
  return (
    <Row
      sx={{
        background: "purple",
        color: "white",
        height: "40px",
        alignItems: "center",
      }}
    >
      <Row
        sx={{
          border: "1px solid green",
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <Typography>Hours</Typography>
      </Row>
      <Row
        sx={{
          justifyContent: "flex-start",
          border: "1px solid green",
          flexGrow: 3,
        }}
      >
        <Typography>Dashboard</Typography>
        <Typography>Projects</Typography>
        <Typography>Team</Typography>
        <Typography>Clients</Typography>
        <Typography>Time</Typography>
        <Typography>Reports</Typography>
      </Row>
      <Row
        sx={{
          flexGrow: 1,
          border: "1px solid green",
          justifyContent: "center",
        }}
      >
        <Typography>End Section</Typography>
      </Row>
    </Row>
  );
}

export default Navbar;
