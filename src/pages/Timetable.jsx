import Navbar from "../components/Navbar";

function Timetable() {
  return (
    <div>
      <Navbar />

      <section style={pageStyle}>
        <h1 style={headingStyle}>Department Timetable</h1>

        <p style={subTextStyle}>
          Official class timetable for IT Department students.
        </p>

        <div style={imageContainer}>
          <img
            src="/timetable.jpeg"
            alt="Timetable"
            style={imageStyle}
          />
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

const imageContainer = {
  display: "flex",
  justifyContent: "center",
};

const imageStyle = {
  width: "90%",
  maxWidth: "1000px",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

export default Timetable;