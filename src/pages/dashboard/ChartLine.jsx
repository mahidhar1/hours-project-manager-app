import { Box, Card, Stack, Switch, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
// import { CategoryScale, LinearScale, PointElement, Chart } from "chart.js";
// Chart.register(CategoryScale);
// Chart.register(LinearScale);
// Chart.register(PointElement);
import { Chart, registerables } from "chart.js";
import Row from "../../components/Row";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
Chart.register(...registerables);

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

function ChartLine() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "",
      },
    },
  };

  const theme = useTheme();

  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const revenueData = useSelector((state) => state.revenue.data);

  const data = {
    labels: checked
      ? Object.keys(revenueData["weekly"])
      : Object.keys(revenueData["monthly"]),
    datasets: [
      {
        label: "",
        data: checked
          ? Object.values(revenueData["weekly"])
          : Object.values(revenueData["monthly"]),
        borderColor: theme.palette.onbudget.main,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 2,
          backgroundColor: "#fff",
          height: "200px",
          margin: "0 8px 0 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "8px",
          padding: "8px 0px 16px 0",
          boxShadow: "0px 2px 3px grey",
        }}
      >
        <Row
          sx={{
            justifyContent: "space-between",
            marginBottom: "0",
            width: "70%",
            margin: "0 auto",
          }}
        >
          <Typography variant="subtitleText">Total Revenue</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitleText">Monthly</Typography>
            <AntSwitch
              value={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "ant design" }}
            />
            <Typography variant="subtitleText">Weekly</Typography>
          </Stack>
        </Row>
        <Box
          sx={{
            width: "350px",
            height: "250px",
            marginTop: "16px",
          }}
        >
          <Line options={options} data={data} />
        </Box>
      </Box>
    </>
  );
}

export default ChartLine;
