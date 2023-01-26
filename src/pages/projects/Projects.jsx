import { Box, Button, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Column from "../../components/Column";
import Row from "../../components/Row";

import LinearProgress from "@mui/material/LinearProgress";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DialogBoxAddProject from "../../components/DialogBoxAddProject";

function Projects() {
  const projectsList = useSelector((state) => state.projects.projectsList);
  const [selected, setSelected] = useState(0);

  const handleSelect = (index) => {
    setSelected(index);
  };
  return (
    <Box
      sx={{
        width: "90%",
        margin: "0 auto",
      }}
    >
      <Row
        sx={{
          margin: "16px 0px",
        }}
      >
        <ProjectsList
          projects={projectsList}
          selected={selected}
          handleSelect={handleSelect}
        />
        <ProjectDetails data={projectsList[selected]} />
      </Row>
    </Box>
  );
}

export default Projects;

const ProjectsList = ({ projects, selected, handleSelect }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    //handleSelect(projects.length);
  };

  return (
    <>
      <Column
        sx={{
          width: "50%",
          margin: "8px 16px",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "start",
            width: "100%",
            height: "100px",
            padding: "16px 8px",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Projects
          </Typography>
          <Button variant="contained" onClick={handleOpen}>
            Add Project
          </Button>
        </Card>

        {projects.map((obj, index) => (
          <Card
            key={index}
            sx={{
              width: "100%",
              margin: "0px 0px 4px 0px",
              padding: "16px 8px",
              backgroundColor: `${selected === index ? "transparent" : "#FFF"}`,
            }}
            onClick={() => handleSelect(index)}
          >
            <Row
              sx={{
                justifyContent: "start",
              }}
            >
              <Column>
                <Typography>{obj?.projectTitle}</Typography>
                <Typography>{obj?.client}</Typography>
              </Column>
            </Row>
          </Card>
        ))}
      </Column>
      <DialogBoxAddProject
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
      />
    </>
  );
};

const ProjectDetails = ({ data }) => {
  const [colorLinearProgress, setColorLinearProgress] = useState("inprogress");
  const { completionStatus } = data;
  useEffect(() => {
    if (completionStatus < 0) {
      setColorLinearProgress("delayed");
    } else if (completionStatus === 100) {
      setColorLinearProgress("completed");
    } else {
      setColorLinearProgress("inprogress");
    }
  }, [completionStatus]);

  return (
    <Card
      sx={{
        width: "50%",
        height: "520px",
        padding: "16px 8px",
        margin: "8px 16px",
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        {data?.projectTitle}
      </Typography>
      <Typography>{data?.client}</Typography>
      <Column>
        <Typography variant="subtitleText">
          Total Budget <Box component="span">{data?.totalBudget}</Box>
        </Typography>
        <Typography variant="subtitleText">
          Profitability <Box component="span">{data?.profit}</Box>
        </Typography>
      </Column>
      {data?.completionStatus < 0 && (
        <Row sx={{ justifyContent: "flex-end" }}>
          <WarningAmberIcon color={"incomplete"} />
        </Row>
      )}
      {data?.completionStatus > 0 && data?.completionStatus < 100 && (
        <Row sx={{ justifyContent: "flex-end", visibility: "hidden" }}>
          <WarningAmberIcon />
        </Row>
      )}
      {data?.completionStatus === 100 && (
        <Row sx={{ justifyContent: "flex-end" }}>
          <TaskAltIcon size="medium" color="completed" />
        </Row>
      )}

      <LinearProgress
        variant="determinate"
        value={data?.completionStatus < 0 ? 100 : data?.completionStatus}
        color={colorLinearProgress}
      />
      <Column>
        <Typography variant="subtitleText">
          Actual Hours <Box component="span">{data?.actualHours}</Box>
        </Typography>
        <Typography variant="subtitleText">{data?.message}</Typography>
      </Column>
    </Card>
  );
};
