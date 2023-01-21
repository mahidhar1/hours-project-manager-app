import { Avatar, Box, Card, Tabs, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Row from "../../components/Row";
import LinearProgress from "@mui/material/LinearProgress";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Column from "../../components/Column";
import { useSelector } from "react-redux";

function ListProjectCard() {
  const [value, setValue] = useState(1);
  const projectsList = useSelector((state) => state.projects.projectsList);

  return (
    <Tabs
      value={value}
      onChange={(e) => setValue(e.target.value)}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="scrollable force tabs example"
    >
      {projectsList.map((obj, index) => (
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
  actualHours,
  message,
}) => {
  const theme = useTheme();
  const [colorLinearProgress, setColorLinearProgress] = useState("inprogress");
  useEffect(() => {
    if (completionStatus < 0) {
      setColorLinearProgress("delayed");
    } else if (completionStatus === 100) {
      setColorLinearProgress("completed");
    } else {
      setColorLinearProgress("inprogress");
    }
  }, [completionStatus, theme]);

  return (
    <>
      <Row
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Column>
          <Typography variant="titleText">{projectTitle}</Typography>
          <Typography variant="subtitleText">{client}</Typography>
        </Column>
        <Avatar />
      </Row>
      <Column>
        <Typography variant="subtitleText">
          Total Budget <Box component="span">{totalBudget}</Box>
        </Typography>
        <Typography variant="subtitleText">
          Profitability <Box component="span">{profit}</Box>
        </Typography>
      </Column>
      {completionStatus < 0 && (
        <Row sx={{ justifyContent: "flex-end" }}>
          <WarningAmberIcon color={"incomplete"} />
        </Row>
      )}
      {completionStatus > 0 && completionStatus < 100 && (
        <Row sx={{ justifyContent: "flex-end", visibility: "hidden" }}>
          <WarningAmberIcon />
        </Row>
      )}
      {completionStatus === 100 && (
        <Row sx={{ justifyContent: "flex-end" }}>
          <TaskAltIcon size="medium" color="completed" />
        </Row>
      )}

      <LinearProgress
        variant="determinate"
        value={completionStatus < 0 ? 100 : completionStatus}
        color={colorLinearProgress}
      />
      <Column>
        <Typography variant="subtitleText">
          Actual Hours <Box component="span">{actualHours}</Box>
        </Typography>
        <Typography variant="subtitleText">{message}</Typography>
      </Column>
    </>
  );
};
