import React from "react";
import bgImage from "../assets/contents-bg.jpg";
import { useNavigate } from "react-router-dom";

export default function ServerSide() {
   const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        minHeight: "100vh",
        padding: "3rem",
        backdropFilter: "brightness(0.7)"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "auto", background: "rgba(0,0,0,0.6)", borderRadius: "15px", padding: "2rem" }}>
        <h1 style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>Server-Side Engineering</h1>

        <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
          Server-side engineering refers to all operations that happen behind the scenes of a web application — on the server. It involves managing business logic, databases, authentication, APIs, and more to deliver a seamless experience to end users.
        </p>

        <h2> 1. What Happens on the Server?</h2>
        <ul>
          <li>Processing client requests (e.g., form submissions, API calls)</li>
          <li>Connecting and querying databases</li>
          <li>Managing sessions and authentication</li>
          <li>Serving dynamic content based on user input</li>
        </ul>

        <h2>2. Key Server-Side Concepts</h2>

        <h3> Backend Frameworks</h3>
        <p>Backend frameworks are tools that streamline the creation of server-side applications. They provide structure and reusable components, allowing developers to build secure, scalable apps more efficiently.</p>
        <ul>
          <li><strong>Express.js</strong>: Minimal and fast Node.js framework for RESTful APIs.</li>
          <li><strong>Django</strong>: High-level Python framework with built-in admin, ORM, and security features.</li>
          <li><strong>Spring Boot</strong>: Java framework supporting MVC patterns and enterprise-level scalability.</li>
        </ul>

        <h3>Databases</h3>
        <p>Databases persistently store application data and allow fast retrieval through queries.</p>
        <ul>
          <li><strong>Relational (SQL)</strong>: MySQL, PostgreSQL — use structured tables and SQL queries.</li>
          <li><strong>NoSQL</strong>: MongoDB, Cassandra — store unstructured or semi-structured data.</li>
        </ul>

        <h3>APIs</h3>
        <p>APIs enable communication between frontend and backend systems.</p>
        <ul>
          <li><strong>RESTful APIs</strong>: Use HTTP methods (GET, POST, PUT, DELETE); stateless communication with JSON.</li>
          <li><strong>GraphQL</strong>: Flexible querying of data, enabling clients to request exactly what they need.</li>
        </ul>

        <h3>Middleware</h3>
        <p>Middleware functions run between the request and the actual route logic, handling tasks like logging, auth, and input parsing.</p>

        <h2>3. Security and Performance</h2>

        <h3>Authentication & Authorization</h3>
        <p>Authentication confirms user identity, while authorization controls access to resources.</p>
        <ul>
          <li><strong>OAuth</strong>: Secure third-party login mechanism.</li>
          <li><strong>JWT</strong>: JSON Web Tokens store encrypted user credentials for stateless auth.</li>
        </ul>

        <h3>Input Validation & Sanitization</h3>
        <p>Validating and cleaning user input prevents common attacks like XSS and SQL Injection.</p>

        <h3>Caching for Performance</h3>
        <ul>
          <li><strong>Redis</strong>: In-memory store for fast access to frequently used data.</li>
          <li><strong>CDN</strong>: Delivers static assets (images, JS, CSS) globally for lower latency.</li>
        </ul>

        <h3> Rate Limiting & Throttling</h3>
        <p>Controls request volume to protect against abuse and ensure fair usage.</p>

        <h2> 4. Interaction with the Frontend</h2>
        <p>The frontend sends HTTP requests like GET, POST, PUT, DELETE. The server handles the logic, queries databases if necessary, and sends back JSON responses.</p>

        <h3> HTTP Communication Example</h3>
        <pre style={{ background: '#222', padding: '1rem', borderRadius: '10px', color: '#0f0', overflowX: 'auto' }}>
{`fetch('/api/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Alice', email: 'alice@example.com' })
});`}
        </pre>

        <h3>JSON Response Example</h3>
        <pre style={{ background: '#222', padding: '1rem', borderRadius: '10px', color: '#0f0', overflowX: 'auto' }}>
{`{
  "success": true,
  "message": "User created successfully"
}`}
        </pre>

        <h2> Summary</h2>
        <ul>
          <li>Authentication and authorization secure your backend.</li>
          <li>APIs and middleware structure your application's logic flow.</li>
          <li>Databases store persistent, structured or unstructured data.</li>
          <li>Client-server communication happens through standardized HTTP methods and formats like JSON.</li>
        </ul>

        <p style={{ marginTop: "2rem", fontStyle: "italic", color: "#ccc" }}>
          "A robust backend is the foundation of every successful web application."
        </p>
         <button
    onClick={() => navigate("/home")}
    style={{
      marginTop: "2rem",
      padding: "10px 20px",
      backgroundColor: "#ffffff22",
      border: "2px solid #fff",
      color: "white",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "1rem"
    }}
  >
    ⬅ Back to Home
  </button>
      </div>
    </div>
  );
}
