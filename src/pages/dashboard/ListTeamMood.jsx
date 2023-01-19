import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import Row from "../../components/Row";

function ListTeamMood() {
  const names = [
    { profilePic: "", name: "Andrea", position: "UX Junior", moodIndex: 2 },
    {
      profilePic: "",
      name: "Alvaro",
      position: "Backend Developer",
      moodIndex: 5,
    },
    { profilePic: "", name: "Juan", position: "UX Senior", moodIndex: 4 },
    { profilePic: "", name: "Jose", position: "UX Junior", moodIndex: 1 },
    { profilePic: "", name: "Maria", position: "UX Junior", moodIndex: 3 },
  ];
  return (
    <>
      <Typography>Team Mood</Typography>
      {names.map((obj) => (
        <Box key={obj.name}>
          <Row sx={{ justifyContent: "flex-start" }}>
            <Avatar variant="square" />
            <Box>
              <Typography>{obj.name}</Typography>
              <Typography>{obj.position}</Typography>
            </Box>
          </Row>
        </Box>
      ))}
    </>
  );
}

export default ListTeamMood;
