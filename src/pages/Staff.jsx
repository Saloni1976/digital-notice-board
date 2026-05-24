import Navbar from "../components/Navbar";

function Staff() {
  const staffMembers = [
    {
      name: "Dr. Anjali Sharma",
      role: "Head of Department",
      subject: "Database Management Systems",
      email: "anjali.sharma@college.edu",
    },
    {
      name: "Prof. Rahul Patil",
      role: "Assistant Professor",
      subject: "Data Structures and Algorithms",
      email: "rahul.patil@college.edu",
    },
    {
      name: "Prof. Sneha Kulkarni",
      role: "Assistant Professor",
      subject: "Web Development",
      email: "sneha.kulkarni@college.edu",
    },
  ];

  return (
    <div>
      <Navbar />

      <section style={pageStyle}>
        <h1 style={headingStyle}>IT Department Staff</h1>
        <p style={subTextStyle}>
          Faculty information and subject details of the IT Department.
        </p>

        <div style={gridStyle}>
          {staffMembers.map((staff, index) => (
            <div key={index} style={cardStyle}>
              <div style={avatarStyle}>{staff.name.charAt(0)}</div>
              <h2>{staff.name}</h2>
              <p><b>Designation:</b> {staff.role}</p>
              <p><b>Subject:</b> {staff.subject}</p>
              <p><b>Email:</b> {staff.email}</p>
            </div>
          ))}
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
  padding: "28px",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  textAlign: "center",
};

const avatarStyle = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  backgroundColor: "#0f172a",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "30px",
  margin: "0 auto 15px",
};

export default Staff;