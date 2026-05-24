import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div>
      <Navbar />

      <section style={pageStyle}>
        <h1 style={headingStyle}>Admin Dashboard</h1>
        <p style={subTextStyle}>Manage IT Department website content.</p>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h2>Add Notice</h2>
            <p>Create and publish department notices.</p>
            <button style={buttonStyle}>Manage Notices</button>
          </div>

          <div style={cardStyle}>
            <h2>Upload Timetable</h2>
            <p>Update class timetable for students.</p>
            <button style={buttonStyle}>Manage Timetable</button>
          </div>

          <div style={cardStyle}>
            <h2>Staff Information</h2>
            <p>Add or update faculty details.</p>
            <button style={buttonStyle}>Manage Staff</button>
          </div>

          <div style={cardStyle}>
            <h2>Achievements</h2>
            <p>Add department and student achievements.</p>
            <button style={buttonStyle}>Manage Achievements</button>
          </div>

          <div style={cardStyle}>
            <h2>Lost & Found</h2>
            <p>Manage lost and found posts.</p>
            <button style={buttonStyle}>Manage Items</button>
          </div>
        </div>
      </section>
    </div>
  );
}

const pageStyle = {
  padding: "50px 40px",
  backgroundColor: "#f8fafc",
  minHeight: "100vh",
};

const headingStyle = {
  textAlign: "center",
  fontSize: "42px",
  color: "#0f172a",
};

const subTextStyle = {
  textAlign: "center",
  fontSize: "18px",
  color: "#475569",
  marginBottom: "40px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "25px",
  maxWidth: "1100px",
  margin: "0 auto",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const buttonStyle = {
  backgroundColor: "#0f172a",
  color: "white",
  padding: "12px 18px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px",
};

export default Dashboard;