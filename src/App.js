import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import GoalReached from "./pages/GoalReached";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GoalReached" element={<GoalReached />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
