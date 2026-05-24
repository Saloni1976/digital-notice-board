import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "45px", color: "#0f172a" }}>
          Digital Notice Board
        </h1>

        <p style={{ fontSize: "20px", marginTop: "15px" }}>
          IT Department Information & Notice Management System
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h2>Latest Notices</h2>
            <p>View department notices and announcements.</p>
          </div>

          <div style={cardStyle}>
            <h2>Timetable</h2>
            <p>Access lecture and practical schedules.</p>
          </div>

          <div style={cardStyle}>
            <h2>Staff Information</h2>
            <p>Know about department faculty members.</p>
          </div>

          <div style={cardStyle}>
            <h2>Achievements</h2>
            <p>Student and department achievements.</p>
          </div>

          <div style={cardStyle}>
            <h2>Lost & Found</h2>
            <p>Report and find lost items.</p>
          </div>

          <div style={cardStyle}>
            <h2>Admin Control</h2>
            <p>Manage notices and department content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
};

export default Home;