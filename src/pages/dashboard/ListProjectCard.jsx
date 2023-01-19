import { Avatar, Box, Card, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Row from "../../components/Row";
import LinearProgress from "@mui/material/LinearProgress";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

function ListProjectCard() {
  const [value, setValue] = useState(1);
  const data = [
    {
      projectTitle: "Insurance App",
      client: "Verto",
      totalBudget: "5000",
      profit: "2500",
      completionStatus: "25",
      isDelayed: true,
      actualHours: 1100,
      message: "1000 hours over budget",
    },
    {
      projectTitle: "Insurance App",
      client: "Verto",
      totalBudget: "5000",
      profit: "2500",
      completionStatus: "25",
      isDelayed: true,
      actualHours: 1100,
      message: "1000 hours over budget",
    },
    {
      projectTitle: "Insurance App",
      client: "Verto",
      totalBudget: "5000",
      profit: "2500",
      completionStatus: "25",
      isDelayed: true,
      actualHours: 1100,
      message: "1000 hours over budget",
    },
    {
      projectTitle: "Insurance App",
      client: "Verto",
      totalBudget: "5000",
      profit: "2500",
      completionStatus: "25",
      isDelayed: true,
      actualHours: 1100,
      message: "1000 hours over budget",
    },
    {
      projectTitle: "Insurance App",
      client: "Verto",
      totalBudget: "5000",
      profit: "2500",
      completionStatus: "25",
      isDelayed: true,
      actualHours: 1100,
      message: "1000 hours over budget",
    },
    {
      projectTitle: "Insurance App",
      client: "Verto",
      totalBudget: "5000",
      profit: "2500",
      completionStatus: "25",
      isDelayed: true,
      actualHours: 1100,
      message: "1000 hours over budget",
    },
  ];
  return (
    <Tabs
      value={value}
      onChange={(e) => setValue(e.target.value)}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="scrollable force tabs example"
    >
      {data.map((obj, index) => (
        <Card
          sx={{
            minWidth: "250px",
            //margin: "0 16px",
            padding: "10px 12px",
            border: "1px solid grey",
            margin: "0 16px 0px 0px",
          }}
        >
          <ProjectSummary
            key={index}
            projectTitle={obj.projectTitle}
            client={obj.client}
            totalBudget={obj.totalBudget}
            profit={obj.profit}
            completionStatus={obj.completionStatus}
            isDelayed={obj.isDelayed}
            actualHours={obj.actualHours}
            message={obj.message}
          ></ProjectSummary>
        </Card>
      ))}
    </Tabs>
  );
  // return (
  //   <Row
  //     sx={{
  //       border: "1px solid green",
  //       justifyContent: "flex-start",
  //       overflowX: "scroll",
  //       width: "100%",
  //     }}
  //   >
  //     {data.map((obj, index) => (
  //       <Box
  //         sx={{
  //           width: "500px",
  //           //margin: "0 16px",
  //           padding: "10px 12px",
  //           border: "1px solid grey",
  //         }}
  //       >
  //         <ProjectSummary
  //           key={index}
  //           projectTitle={obj.projectTitle}
  //           client={obj.client}
  //           totalBudget={obj.totalBudget}
  //           profit={obj.profit}
  //           completionStatus={obj.completionStatus}
  //           isDelayed={obj.isDelayed}
  //           actualHours={obj.actualHours}
  //           message={obj.message}
  //         ></ProjectSummary>
  //       </Box>
  //     ))}
  //   </Row>
  // );
}

export default ListProjectCard;

const ProjectSummary = ({
  projectTitle,
  client,
  totalBudget,
  profit,
  completionStatus,
  isDelayed,
  actualHours,
  message,
}) => {
  return (
    <>
      <Row
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Typography>{projectTitle}</Typography>
          <Typography>{client}</Typography>
        </Box>
        <Avatar />
      </Row>
      <Box>
        <Typography>
          Total Budget <Box component="span">{totalBudget}</Box>
        </Typography>
        <Typography>
          Profitability <Box component="span">{profit}</Box>
        </Typography>
      </Box>
      {isDelayed ? (
        <Row sx={{ justifyContent: "flex-end" }}>
          <WarningAmberIcon />
        </Row>
      ) : (
        <></>
      )}

      <LinearProgress variant="determinate" value={completionStatus} />
      <Box>
        <Typography>
          Actual Hours <Box component="span">{actualHours}</Box>
        </Typography>
        <Typography>{message}</Typography>
      </Box>
    </>
  );
};
