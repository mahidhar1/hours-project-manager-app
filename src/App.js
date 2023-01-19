import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Dashboard />
      </div>
    </>
  );
}

export default App;
