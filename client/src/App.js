import Home from "./core/Home";
import Login from "./core/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Alumni from "./core/Alumni";
import Mission from "./core/Mission";
import Companies from "./core/Companies";
import Placement from "./core/Placement";
import About from "./core/About";
import Admin from "./core/admin/Admin";
import SearchStudent from "./core/admin/SearchStudent";
import StudentData from "./core/admin/StudentData";
import EligibleCandidates from "./core/admin/EligibleCandidates";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/searchstudent" element={<SearchStudent />} />
        <Route path="/admin/studentdata" element={<StudentData />} />
        <Route path="/admin/eligiblecandidates" element={<EligibleCandidates />} />
      </Routes>
    </Router>
  );
}

export default App;
