import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Notices from "./pages/Notices";
import Staff from "./pages/Staff";
import Achievements from "./pages/Achievements";
import Timetable from "./pages/Timetable";
import LostFound from "./pages/LostFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/lostfound" element={<LostFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;