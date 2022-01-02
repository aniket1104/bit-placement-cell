import Home from "./core/Home";
import Login from "./core/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Alumni from "./core/Alumni";
import Student from "./core/student";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/Student" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
