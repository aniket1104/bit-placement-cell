import Home from "./core/Home";
import Login from "./core/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Alumni from "./core/Alumni";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </Router>
  );
}

export default App;
