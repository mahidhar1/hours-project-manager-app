import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "../../components/Column";
import Row from "../../components/Row";
import { addMember } from "../../redux/teamSlice";

function Team() {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.team.members);
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
        <MembersList
          members={members}
          selected={selected}
          handleSelect={handleSelect}
        />
        <MemberDetails data={members[selected]} />
      </Row>
    </Box>
  );
}

export default Team;

const MembersList = ({ members, selected, handleSelect }) => {
  const dispatch = useDispatch();
  const [memberName, setMemberName] = useState("");
  const [memberPosition, setMemberPosition] = useState("");

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let memberData = {
      name: memberName,
      position: memberPosition,
      profilePic: "",
      moodIndex: 4,
    };
    dispatch(addMember(memberData));

    setOpen(false);
    setMemberName("");
    setMemberPosition("");
    handleSelect(members.length);
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
            Members
          </Typography>
          <Button variant="contained" onClick={handleClickOpen}>
            Add Member
          </Button>
        </Card>

        {members.map((obj, index) => (
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
              <Avatar variant="circle" />
              <Column>
                <Typography>{obj?.name}</Typography>
                <Typography>{obj?.position}</Typography>
              </Column>
            </Row>
          </Card>
        ))}
      </Column>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add A Member</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Member Name"
            type="text"
            fullWidth
            variant="standard"
            value={memberName}
            onChange={(e) => setMemberName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Member Role"
            type="text"
            fullWidth
            variant="standard"
            value={memberPosition}
            onChange={(e) => setMemberPosition(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const MemberDetails = ({ data }) => {
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
        {data?.name}
      </Typography>
      <Typography>{data?.position}</Typography>
    </Card>
  );
};
