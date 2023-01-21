import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Row from "../../components/Row";
import { addProject } from "../../redux/projectsSlice";
import moment from "moment/moment";

const ActionButton = styled(Button)(({ theme }) => ({
  fontSize: "0.8rem",
  lineHeight: "1rem",
  margin: "4px 8px 0 8px",
  height: "24px",
}));

const StyledDateInput = styled(TextField)(({ theme }) => ({
  padding: 0,
  backgroundColor: "#838383",
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
}));

function ListActionButtons() {
  const members = useSelector((state) => state.team.members);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);

  const [open, setOpen] = useState(false);

  const [projectTitle, setProjectTitle] = useState("");
  const [client, setClient] = useState("");
  const [totalBudget, setTotalBudget] = useState(0);
  const [actualHours, setActualHours] = useState(0);
  const [projectMembers, setProjectMembers] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let projectData = {
      projectTitle,
      client,
      totalBudget,
      actualHours,
      profit: "",
      completionStatus: 0,
      message: "",
      projectMembers,
    };
    dispatch(addProject(projectData));
    setOpen(false);
    setProjectTitle("");
    setClient("");
    setTotalBudget(0);
    setActualHours(0);
    setProjectMembers([]);
  };
  return (
    <>
      <Row
        sx={{
          justifyContent: "flex-start",
          padding: "0px 0px 8px 32px",
        }}
      >
        <Typography variant="h6">Budget Status</Typography>
        <ActionButton variant="contained" onClick={handleClickOpen}>
          Add new Project
        </ActionButton>
        <ActionButton
          variant="outlined"
          sx={{ backgroundColor: "#fff", fontWeight: "600" }}
        >
          Download Report
        </ActionButton>
        <ActionButton
          variant="outlined"
          sx={{ backgroundColor: "#fff", fontWeight: "600" }}
        >
          dd/mm/yyyy - dd/mm/yyyy
        </ActionButton>
        <ActionButton
          variant="outlined"
          sx={{ backgroundColor: "#fff", fontWeight: "600" }}
        >
          Filter
        </ActionButton>
      </Row>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add A Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Project Name"
            type="text"
            fullWidth
            variant="standard"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Client Name"
            type="text"
            fullWidth
            variant="standard"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Budget allocated"
            type="text"
            fullWidth
            variant="standard"
            value={totalBudget}
            onChange={(e) => setTotalBudget(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Hours Allocated"
            type="text"
            fullWidth
            variant="standard"
            value={actualHours}
            onChange={(e) => setActualHours(e.target.value)}
          />
          <Autocomplete
            multiple
            id="tags-standard"
            options={members}
            getOptionLabel={(option) => `${option.name}, ${option.position}`}
            defaultValue={[members[0]]}
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ListActionButtons;
