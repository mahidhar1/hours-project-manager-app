import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Column = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
}));

export default Column;
