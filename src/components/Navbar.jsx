import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSection } from "../redux/sectionSlice";
import Row from "./Row";

const NavText = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  lineHeight: "1rem",
  margin: "0 8px 0 8px",
  cursor: "pointer",
}));

function Navbar() {
  const theme = useTheme();
  const selectedSection = useSelector((state) => state.section.selected);
  const dispatch = useDispatch();
  console.log(selectedSection);
  return (
    <Row
      sx={{
        backgroundColor: `${theme.palette.primary.main}`,
        color: `${theme.palette.secondary.main}`,
        height: "40px",
        alignItems: "center",
      }}
    >
      <Row
        sx={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            lineHeight: "2rem",
          }}
        >
          <Box
            component="span"
            sx={{
              color: `${theme.palette.secondary.text}`,
            }}
          >
            H
          </Box>{" "}
          O U R S
        </Typography>
      </Row>
      <Row
        sx={{
          justifyContent: "center",
          flexGrow: 3,
        }}
      >
        <NavText
          sx={{
            borderBottom: `${
              selectedSection === "dashboard"
                ? `2px solid ${theme.palette.secondary.text}`
                : "none"
            }`,
            paddingBottom: "4px",
          }}
          onClick={() => dispatch(setSection("dashboard"))}
        >
          Dashboard
        </NavText>
        <NavText
          sx={{
            borderBottom: `${
              selectedSection === "projects"
                ? `2px solid ${theme.palette.secondary.text}`
                : "none"
            }`,
            paddingBottom: "4px",
          }}
          onClick={() => dispatch(setSection("projects"))}
        >
          Projects
        </NavText>
        <NavText
          sx={{
            borderBottom: `${
              selectedSection === "team"
                ? `2px solid ${theme.palette.secondary.text}`
                : "none"
            }`,
            paddingBottom: "4px",
          }}
          onClick={() => dispatch(setSection("team"))}
        >
          Team
        </NavText>
        <NavText
          sx={{
            borderBottom: `${
              selectedSection === "clients"
                ? `2px solid ${theme.palette.secondary.text}`
                : "none"
            }`,
            paddingBottom: "4px",
          }}
          onClick={() => dispatch(setSection("clients"))}
        >
          Clients
        </NavText>
        <NavText
          sx={{
            borderBottom: `${
              selectedSection === "time"
                ? `2px solid ${theme.palette.secondary.text}`
                : "none"
            }`,
            paddingBottom: "4px",
          }}
          onClick={() => dispatch(setSection("time"))}
        >
          Time
        </NavText>
        <NavText
          sx={{
            borderBottom: `${
              selectedSection === "reports"
                ? `2px solid ${theme.palette.secondary.text}`
                : "none"
            }`,
            paddingBottom: "4px",
          }}
          onClick={() => dispatch(setSection("reports"))}
        >
          Reports
        </NavText>
      </Row>
      <Row
        sx={{
          flexGrow: 1,
          // border: "1px solid green",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar variant="circle" sx={{ width: "30px", height: "30px" }} />
        <Typography
          variant="subtitleText"
          sx={{ marginLeft: "8px", fontWeight: "700" }}
        >
          Mario
        </Typography>
      </Row>
    </Row>
  );
}

export default Navbar;
