import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Projects from "./pages/projects/Projects";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import Team from "./pages/team/Team";
import Clients from "./pages/clients/Clients";
import Time from "./pages/time/Time";
import Reports from "./pages/reports/Reports";

const font = "'Quicksand', sans-serif";

const theme = createTheme({
  palette: {
    primary: {
      main: "#301934",
    },
    secondary: {
      main: "#FFFFFF",
      text: "#2cb673",
    },
    delayed: { main: "#cd3a34" },
    inprogress: { main: "#FFE900" },
    completed: { main: "#2cb673" },
    overbudget: { main: "#cd3a34" },
    onbudget: { main: "#1a75ff" },
    underbudget: { main: "#2cb673" },
  },
  typography: {
    fontFamily: font,
    titleText: {
      fontSize: "1rem",
      lineHeight: "1.2rem",
      fontWeight: "600",
    },
    subtitleText: {
      fontSize: "0.8rem",
      lineHeight: "1rem",
      color: "#838383",
    },
  },
});

function App() {
  const selectedSection = useSelector((state) => state.section.selected);
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className="container">
        {selectedSection === "dashboard" ? <Dashboard /> : <></>}
        {selectedSection === "projects" ? <Projects /> : <></>}
        {selectedSection === "team" ? <Team /> : <></>}
        {selectedSection === "clients" ? <Clients /> : <></>}
        {selectedSection === "time" ? <Time /> : <></>}
        {selectedSection === "reports" ? <Reports /> : <></>}
      </div>
    </ThemeProvider>
  );
}

export default App;
