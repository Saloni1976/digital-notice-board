import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const cards = [
    {
      title: "Latest Notices",
      desc: "View department notices and announcements.",
      path: "/notices",
    },
    {
      title: "Timetable",
      desc: "Access lecture and practical schedules.",
      path: "/timetable",
    },
    {
      title: "Staff Information",
      desc: "Know about department faculty members.",
      path: "/staff",
    },
    {
      title: "Achievements",
      desc: "Student and department achievements.",
      path: "/achievements",
    },
    {
      title: "Lost & Found",
      desc: "Report and find lost items.",
      path: "/lostfound",
    },
    {
      title: "Admin Control",
      desc: "Manage notices and department content.",
      path: "/login",
    },
  ];

  return (
    <div>
      <Navbar />

      <section style={heroStyle}>
        <h1 style={titleStyle}>Digital Notice Board</h1>
        <p style={subtitleStyle}>
          IT Department Information & Notice Management System
        </p>

        <div style={gridStyle}>
          {cards.map((card, index) => (
            <Link to={card.path} key={index} style={cardStyle}>
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

const heroStyle = {
  padding: "70px 40px",
  textAlign: "center",
  backgroundColor: "#f8fafc",
  minHeight: "100vh",
};

const titleStyle = {
  fontSize: "48px",
  color: "#0f172a",
  marginBottom: "15px",
};

const subtitleStyle = {
  fontSize: "20px",
  color: "#334155",
  marginBottom: "45px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "25px",
  maxWidth: "1150px",
  margin: "0 auto",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "35px 25px",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  textDecoration: "none",
  color: "#0f172a",
  transition: "0.3s",
};

export default Home;