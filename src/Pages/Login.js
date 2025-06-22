// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/login-bg.jpg"; // Adjust file name if needed

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (pass === "server123") {
      navigate("/home");
    } else {
      setError("Incorrect password. Hint: It starts with 'server'.");
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#fff",
        textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        Server-Side Fundamentals
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px", fontStyle: "italic" }}>
        “Empowering the web, one server at a time.”
      </p>

      <form
        onSubmit={handleLogin}
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
          width: "320px",
          color: "#333",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={inputStyle}
        />
        {error && (
          <p style={{ color: "red", fontSize: "0.9rem", marginTop: "10px" }}>{error}</p>
        )}
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "93%",
  padding: "10px",
  margin: "10px 0px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  
};

const buttonStyle = {
  background: "#2e86de",
  color: "white",
  padding: "10px 25px",
  border: "none",
  borderRadius: "8px",
  fontSize: "1rem",
  cursor: "pointer",
  marginTop: "10px",
  
};

export default Login;
