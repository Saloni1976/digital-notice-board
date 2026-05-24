import Navbar from "../components/Navbar";

function Login() {
  return (
    <div>
      <Navbar />

      <section style={pageStyle}>
        <div style={loginBox}>
          <h1 style={headingStyle}>Admin Login</h1>

          <input
            type="email"
            placeholder="Enter Email"
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Enter Password"
            style={inputStyle}
          />

          <button style={buttonStyle}>Login</button>
        </div>
      </section>
    </div>
  );
}

const pageStyle = {
  backgroundColor: "#f8fafc",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const loginBox = {
  backgroundColor: "white",
  padding: "40px",
  width: "400px",
  borderRadius: "16px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const headingStyle = {
  textAlign: "center",
  color: "#0f172a",
};

const inputStyle = {
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
};

const buttonStyle = {
  backgroundColor: "#0f172a",
  color: "white",
  padding: "14px",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Login;