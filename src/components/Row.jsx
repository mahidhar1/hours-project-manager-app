import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Row = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "flex-start",
}));

export default Row;
