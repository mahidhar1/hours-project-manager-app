import { Box, Card, Typography, useTheme } from "@mui/material";
import React from "react";
import Row from "../../components/Row";

import GridViewIcon from "@mui/icons-material/GridView";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LoopIcon from "@mui/icons-material/Loop";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import GroupIcon from "@mui/icons-material/Group";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";

const NumberText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.8rem",
  fontWeight: "bold",
}));

const TitleText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "0.8rem",
  fontWeight: "bold",
}));

const Column = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  //border: "1px solid green",
  width: "100%",
}));

const FlexCard = styled(Card)(({ theme }) => ({
  width: "20%",
  height: "6rem",
  margin: "0 16px",
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
  },
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
  },
}));

function ListStatusCard() {
  const theme = useTheme();
  const members = useSelector((state) => state.team.members);
  const projectsList = useSelector((state) => state.projects.projectsList);
  const total = projectsList.length;
  const ongoing = projectsList.filter(
    (obj) => obj.completionStatus >= 0 && obj.completionStatus < 100,
  ).length;
  const completed = projectsList.filter(
    (obj) => obj.completionStatus === 100,
  ).length;
  const delayed = projectsList.filter((obj) => obj.completionStatus < 0).length;

  const projectStatus = {
    total,
    ongoing,
    completed,
    delayed,
  };

  return (
    <Row>
      <FlexCard>
        <GridViewIcon
          size="medium"
          sx={{ color: `${theme.palette.secondary.text}` }}
        />
        <Column
          sx={{
            justifyContent: "flex-start",
          }}
        >
          <NumberText>{projectStatus?.total}</NumberText>
          <TitleText>Total Projects</TitleText>
        </Column>
      </FlexCard>

      <FlexCard>
        <TaskAltIcon
          size="medium"
          sx={{ color: `${theme.palette.secondary.text}` }}
        />
        <Column
          sx={{
            justifyContent: "flex-start",
          }}
        >
          <NumberText>{projectStatus?.ongoing}</NumberText>
          <TitleText>Ongoing</TitleText>
        </Column>
      </FlexCard>
      <FlexCard>
        <LoopIcon
          size="medium"
          sx={{ color: `${theme.palette.secondary.text}` }}
        />
        <Column
          sx={{
            justifyContent: "flex-start",
          }}
        >
          <NumberText>{projectStatus?.completed}</NumberText>
          <TitleText>Completed</TitleText>
        </Column>
      </FlexCard>
      <FlexCard
        sx={{
          backgroundColor: `${projectStatus?.delayed > 0 ? "pink" : "white"}`,
        }}
      >
        <WarningAmberIcon
          size="medium"
          sx={{
            color: `${
              projectStatus?.delayed ? "red" : theme.palette.secondary.text
            }`,
          }}
        />

        <Column
          sx={{
            justifyContent: "flex-start",
          }}
        >
          <NumberText>{projectStatus?.delayed}</NumberText>
          <TitleText>Delayed</TitleText>
        </Column>
      </FlexCard>
      <FlexCard>
        <GroupIcon
          size="medium"
          sx={{ color: `${theme.palette.secondary.text}` }}
        />
        <Column
          sx={{
            justifyContent: "flex-start",
          }}
        >
          <NumberText>{members.length}</NumberText>
          <TitleText>Employees</TitleText>
        </Column>
      </FlexCard>
    </Row>
  );
}

export default ListStatusCard;

// const AutoAspectRatioCard = ({ children }) => {
//   return (
//     <Card
//       sx={{
//         display: "inline-block",
//         position: "relative",
//         width: "50%",
//         margin: "16px",
//       }}
//     >
//       <Box
//         sx={{
//           marginTop: "75%",
//         }}
//       ></Box>
//       <Box
//         sx={{
//           position: "absolute",
//           top: "0",
//           bottom: "0",
//           left: "0",
//           right: "0",
//         }}
//       >
//         {children}
//       </Box>
//     </Card>
//   );
// };
