import { Box, Card, Stack, styled, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import { Doughnut, Line, Pie } from "react-chartjs-2";
// import { CategoryScale, LinearScale, PointElement, Chart } from "chart.js";
// Chart.register(CategoryScale);
// Chart.register(LinearScale);
// Chart.register(PointElement);
import { Chart, registerables } from "chart.js";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import Row from "../../components/Row";
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

function ChartPie() {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const budgetData = useSelector((state) => state.budget.data);

  const options = {
    responsive: true,
    maintainAspectRatio: true,
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

  const data = {
    labels: [],
    datasets: [
      {
        label: "Budget Status",
        data: checked
          ? Object.values(budgetData["status"])
          : Object.values(budgetData["profitability"]),
        backgroundColor: [
          theme.palette.underbudget.main,
          theme.palette.onbudget.main,
          theme.palette.overbudget.main,
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#fff",
        height: "210px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "8px",
        padding: "8px 16px 8px 16px",
        boxShadow: "0px 2px 3px grey",
      }}
    >
      <Row
        sx={{
          justifyContent: "space-between",
          marginBottom: "0",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Typography variant="subtitleText">Budget</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="subtitleText">Profitability</Typography>
          <AntSwitch
            value={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography variant="subtitleText">Status</Typography>
        </Stack>
      </Row>
      <Box
        sx={{
          width: "150px",
          height: "150px",
          marginTop: "16px",
        }}
      >
        <Doughnut options={options} data={data} />
      </Box>
    </Box>
  );
}

export default ChartPie;
