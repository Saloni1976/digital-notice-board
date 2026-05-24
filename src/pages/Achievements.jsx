import Navbar from "../components/Navbar";

function Achievements() {
  const achievements = [
    {
      title: "Smart India Hackathon Finalist",
      year: "2025",
      description:
        "IT Department students were selected for the Smart India Hackathon grand finale.",
    },
    {
      title: "Best Project Award",
      year: "2025",
      description:
        "Students won Best Project Award for an AI-based healthcare management system.",
    },
    {
      title: "Coding Competition Winners",
      year: "2024",
      description:
        "Department students secured first place in inter-college coding competition.",
    },
  ];

  return (
    <div>
      <Navbar />

      <section style={pageStyle}>
        <h1 style={headingStyle}>Department Achievements</h1>

        <p style={subTextStyle}>
          Academic, technical, and extracurricular achievements of IT Department.
        </p>

        <div style={gridStyle}>
          {achievements.map((item, index) => (
            <div key={index} style={cardStyle}>
              <div style={yearStyle}>{item.year}</div>

              <h2>{item.title}</h2>

              <p>{item.description}</p>
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
  padding: "30px",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const yearStyle = {
  backgroundColor: "#0f172a",
  color: "white",
  display: "inline-block",
  padding: "6px 14px",
  borderRadius: "20px",
  marginBottom: "15px",
};

export default Achievements;