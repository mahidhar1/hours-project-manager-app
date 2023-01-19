import { Box, Button, Typography } from "@mui/material";
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
          border: "1px solid green",
        }}
      >
        <Box
          sx={{
            border: "1px solid red",
            width: "85%",
            padding: "16px 0px 0px 0px",
          }}
        >
          <ListStatusCard />
          <Row>
            <Box
              sx={{
                flexGrow: "3",
                border: "1px solid green",
              }}
            >
              <ChartLine />
            </Box>
            <Box
              sx={{
                flexGrow: "2",
                border: "1px solid green",
              }}
            >
              <ChartPie />
            </Box>
          </Row>
        </Box>
        <Box
          sx={{
            width: "15%",
            border: "1px solid grey",
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
