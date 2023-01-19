import { Box, Card, Typography } from "@mui/material";
import React from "react";
import Row from "../../components/Row";

import GridViewIcon from "@mui/icons-material/GridView";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LoopIcon from "@mui/icons-material/Loop";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import GroupIcon from "@mui/icons-material/Group";
import { styled } from "@mui/system";

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
  height: "5rem",
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
  return (
    <Row>
      <FlexCard>
        <GridViewIcon fontSize="1.5rem" />
        <Column
          sx={{
            justifyContent: "flex-start",
          }}
        >
          <NumberText>5</NumberText>
          <TitleText>Total Projects</TitleText>
        </Column>
      </FlexCard>

      <FlexCard>
        <TaskAltIcon fontSize="1.5rem" />
        <Column
          sx={{
            justifyContent: "flex-start",
          }}
        >
          <NumberText>5</NumberText>
          <TitleText>Total Projects</TitleText>
        </Column>
      </FlexCard>
      <FlexCard>
        <LoopIcon fontSize="1.5rem" />
        <Column
          sx={{
            justifyContent: "flex-start",
          }}
        >
          <NumberText>5</NumberText>
          <TitleText>Total Projects</TitleText>
        </Column>
      </FlexCard>
      <FlexCard>
        <WarningAmberIcon fontSize="1.5rem" />
        <Column
          sx={{
            justifyContent: "flex-start",
          }}
        >
          <NumberText>5</NumberText>
          <TitleText>Total Projects</TitleText>
        </Column>
      </FlexCard>
      <FlexCard>
        <GroupIcon fontSize="1.5rem" />
        <Column
          sx={{
            justifyContent: "flex-start",
          }}
        >
          <NumberText>5</NumberText>
          <TitleText>Total Projects</TitleText>
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
