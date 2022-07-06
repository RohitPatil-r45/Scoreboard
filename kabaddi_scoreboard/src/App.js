import "./App.css";
import Scoreboard from "./Scoreboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Controller from "./Controller";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Scoreboard />} />
          <Route path="/Controller" element={<Controller />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
