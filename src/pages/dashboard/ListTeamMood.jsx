import { Avatar, Box, Card, Slider, Typography, useTheme } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "../../components/Column";
import Row from "../../components/Row";
import { setSection } from "../../redux/sectionSlice";

function ListTeamMood() {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.team.members);
  const theme = useTheme();

  return (
    <Box
      sx={{
        overflowY: "scroll",
        height: "355px",
        borderRadius: "8px",
        boxShadow: "0px 2px 3px grey",
        "&::-webkit-scrollbar": { width: "6px" },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#fff",
          borderRadius: "9px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `${theme.palette.primary.main}`,
          borderRadius: "9px",
        },
      }}
    >
      <Card
        sx={{
          padding: "8px 12px",
        }}
      >
        <Typography variant="h6">Team Mood</Typography>
        {members.map((obj) => (
          <Box key={obj.name}>
            <Row sx={{ justifyContent: "flex-start", margin: "8px 0px" }}>
              <Avatar variant="circle" />
              <Column sx={{ marginLeft: "8px" }}>
                <Typography variant="titleText">{obj.name}</Typography>
                <Typography variant="subtitleText">{obj.position}</Typography>
              </Column>
            </Row>
            <Slider
              defaultValue={obj.moodIndex}
              step={1}
              min={0}
              max={10}
              disabled
            />
          </Box>
        ))}
      </Card>
    </Box>
  );
}

export default ListTeamMood;
