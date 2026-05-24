import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0f172a",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white" }}>IT Notice Board</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/notices" style={linkStyle}>Notices</Link>
        <Link to="/staff" style={linkStyle}>Staff</Link>
        <Link to="/achievements" style={linkStyle}>Achievements</Link>
        <Link to="/timetable" style={linkStyle}>Timetable</Link>
        <Link to="/lostfound" style={linkStyle}>Lost & Found</Link>
        <Link to="/login" style={linkStyle}>Admin</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
};

export default Navbar;