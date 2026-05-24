import Navbar from "../components/Navbar";

function Notices() {
  const notices = [
    {
      title: "Python Practical Exam",
      category: "Exam",
      date: "20 April 2026",
      description:
        "All IT department students are informed that Python practical examination will be conducted in Lab 3.",
      priority: "Important",
    },
    {
      title: "Seminar on Web Development",
      category: "Event",
      date: "22 April 2026",
      description:
        "A seminar on modern web development technologies will be organized for second year students.",
      priority: "Normal",
    },
    {
      title: "Submission Reminder",
      category: "Academic",
      date: "25 April 2026",
      description:
        "Students must submit their project diary and documentation before the given deadline.",
      priority: "Urgent",
    },
  ];

  return (
    <div>
      <Navbar />

      <section style={pageStyle}>
        <h1 style={headingStyle}>Department Notices</h1>
        <p style={subTextStyle}>
          View all latest notices, announcements, and academic updates.
        </p>

        <div style={gridStyle}>
          {notices.map((notice, index) => (
            <div key={index} style={cardStyle}>
              <div style={topRowStyle}>
                <span style={categoryStyle}>{notice.category}</span>
                <span style={priorityStyle}>{notice.priority}</span>
              </div>

              <h2>{notice.title}</h2>
              <p style={dateStyle}>{notice.date}</p>
              <p>{notice.description}</p>
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
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
  maxWidth: "1100px",
  margin: "0 auto",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const topRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "15px",
};

const categoryStyle = {
  backgroundColor: "#dbeafe",
  color: "#1e40af",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "14px",
};

const priorityStyle = {
  backgroundColor: "#fee2e2",
  color: "#991b1b",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "14px",
};

const dateStyle = {
  color: "#64748b",
  fontSize: "15px",
};

export default Notices;