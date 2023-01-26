import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../redux/projectsSlice";

function DialogBoxAddProject({ open, onOpen, onClose }) {
  const dispatch = useDispatch();

  const members = useSelector((state) => state.team.members);

  const [projectData, setProjectData] = useState({
    projectTitle: "",
    client: "",
    totalBudget: 0,
    actualHours: 0,
    projectMembers: [],
  });

  const handleSubmit = () => {
    let otherData = {
      profit: "",
      completionStatus: 1,
      message: "",
    };
    dispatch(addProject({ ...projectData, ...otherData }));
    setProjectData({
      projectTitle: "",
      client: "",
      totalBudget: 0,
      actualHours: 0,
      members: [],
    });

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add A Project</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Project Name"
          type="text"
          fullWidth
          variant="standard"
          value={projectData?.projectTitle}
          onChange={(e) =>
            setProjectData({ ...projectData, projectTitle: e.target.value })
          }
        />
        <TextField
          margin="dense"
          label="Client Name"
          type="text"
          fullWidth
          variant="standard"
          value={projectData?.client}
          onChange={(e) =>
            setProjectData({ ...projectData, client: e.target.value })
          }
        />
        <TextField
          margin="dense"
          label="Budget allocated"
          type="text"
          fullWidth
          variant="standard"
          value={projectData?.totalBudget}
          onChange={(e) =>
            setProjectData({ ...projectData, totalBudget: e.target.value })
          }
        />
        <TextField
          margin="dense"
          label="Hours Allocated"
          type="text"
          fullWidth
          variant="standard"
          value={projectData?.actualHours}
          onChange={(e) =>
            setProjectData({ ...projectData, actualHours: e.target.value })
          }
        />
        <Autocomplete
          multiple
          id="tags-standard"
          options={members}
          getOptionLabel={(option) =>
            option ? `${option.name}, ${option.position}` : ""
          }
          defaultValue={[members.length > 0 ? members[0] : ""]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Multiple values"
              placeholder="Favorites"
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogBoxAddProject;
