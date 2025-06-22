import React, { useState } from "react";
import bgImage from "../assets/contents-bg.jpg";
import diagram from "../assets/http-diagram.png"; 
import { useNavigate } from "react-router-dom";// <-- your image depicting request-response

export default function HttpPage() {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const simulateRequest = async () => {
    setLoading(true);
    setResponse(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: "foo", body: "bar", userId: 1 })
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ error: "Failed to fetch." });
    } finally {
      setLoading(false);
    }
  };

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
        <h1 style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>HTTP Request & Response</h1>

        <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
          The HyperText Transfer Protocol (HTTP) enables communication between clients (usually browsers) and servers. Every interaction involves a request sent from the client and a response returned by the server.
        </p>

        <h2>1. Key Elements of HTTP</h2>
        <ul>
          <li><strong>Request</strong>: Initiated by the client, it includes a method (GET, POST, PUT, DELETE), headers, and optionally a body.</li>
          <li><strong>Response</strong>: Returned by the server with a status code (200 OK, 404 Not Found, etc.), headers, and a body (usually in JSON or HTML).</li>
        </ul>

        <h2>2. Visual Representation</h2>
        <img src={diagram} alt="HTTP request response diagram" style={{ maxWidth: "100%", borderRadius: "12px", margin: "1rem 0" }} />

        <h2>3. Common HTTP Methods</h2>
        <ul>
          <li>
            <strong>GET</strong>: Retrieve data. For example:
            <pre style={{ background: '#111', padding: '1rem', borderRadius: '10px', color: '#0f0', overflowX: 'auto' }}>{`fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json())
  .then(data => console.log(data)); // Output: { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', ... }`}</pre>
          </li>
          <li>
            <strong>POST</strong>: Send data to the server to create a resource.
            <pre style={{ background: '#111', padding: '1rem', borderRadius: '10px', color: '#0f0', overflowX: 'auto' }}>{`fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
})
.then(res => res.json())
.then(data => console.log(data)); // Output: { id: 101, title: 'foo', body: 'bar', userId: 1 }`}</pre>
          </li>
          <li>
            <strong>PUT</strong>: Update an existing resource.
            <pre style={{ background: '#111', padding: '1rem', borderRadius: '10px', color: '#0f0', overflowX: 'auto' }}>{`fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ id: 1, title: 'updated', body: 'bar', userId: 1 })
})
.then(res => res.json())
.then(data => console.log(data));`}</pre>
          </li>
          <li>
            <strong>DELETE</strong>: Remove a resource.
            <pre style={{ background: '#111', padding: '1rem', borderRadius: '10px', color: '#0f0', overflowX: 'auto' }}>{`fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
.then(res => console.log('Deleted:', res.status));`}</pre>
          </li>
        </ul>

        <h2>4. Simulate an HTTP POST Request</h2>
        <p>
          Click the button below to send a mock POST request to a public test API (JSONPlaceholder). This simulates creating a blog post with a title and body. The server returns a JSON object containing the newly created post.
        </p>

        <button onClick={simulateRequest} style={{ padding: "0.8rem 1.5rem", fontSize: "1rem", marginBottom: "1rem", cursor: "pointer", backgroundColor: "#00aaff", border: "none", borderRadius: "8px", color: "white" }}>Send Request</button>

        {loading && <p>Sending request...</p>}
        {response && (
          <pre style={{ background: '#111', padding: '1rem', borderRadius: '10px', overflowX: 'auto' }}>{JSON.stringify(response, null, 2)}</pre>
        )}

        <h2>5. Status Codes</h2>
        <ul>
          <li><strong>200 OK</strong>: The request was successful</li>
          <li><strong>201 Created</strong>: Resource successfully created</li>
          <li><strong>400 Bad Request</strong>: Request had invalid syntax</li>
          <li><strong>401 Unauthorized</strong>: Client must authenticate</li>
          <li><strong>500 Internal Server Error</strong>: Server failed to process the request</li>
        </ul>

        <p style={{ marginTop: "2rem", fontStyle: "italic", color: "#ccc" }}>
          "Understanding how HTTP works is crucial for both frontend and backend developers."
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
