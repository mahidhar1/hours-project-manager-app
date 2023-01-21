import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import Row from "../../components/Row";
import ChartLine from "./ChartLine";
import ChartPie from "./ChartPie";
import ListActionButtons from "./ListActionButtons";
import ListProjectCard from "./ListProjectCard";
import ListStatusCard from "./ListStatusCard";
import ListTeamMood from "./ListTeamMood";

function Dashboard() {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "0 auto",
      }}
    >
      <Row
        sx={{
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <Box
          sx={{
            width: "80%",
            padding: "0px 0px 0px 20px",
          }}
        >
          <ListStatusCard />
          <Row
            sx={{
              padding: "16px",
            }}
          >
            <ChartLine />
            <ChartPie />
          </Row>
        </Box>
        <Box
          sx={{
            width: "20%",
          }}
        >
          <ListTeamMood />
        </Box>
      </Row>

      <ListActionButtons />
      <ListProjectCard />
    </Box>
  );
}

export default Dashboard;
