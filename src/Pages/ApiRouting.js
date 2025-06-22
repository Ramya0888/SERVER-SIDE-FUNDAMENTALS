import React from "react";
import bgImage from "../assets/contents-bg.jpg";
import { useNavigate } from "react-router-dom";

export default function ApiRouting() {
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
        <h1 style={{ fontSize: "2.6rem", marginBottom: "1rem" }}>APIs & Routing</h1>

        <p style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
          APIs (Application Programming Interfaces) and routing form the backbone of server-side communication with clients. While APIs define the endpoints and behavior, routing determines how the server matches and responds to various HTTP requests.
        </p>

        <h2>1. What is Routing?</h2>
        <p>Routing is the process of defining how an application responds to a client request to a particular endpoint (URI) using an HTTP method (GET, POST, etc.).</p>

        <h3>Types of Routing</h3>
        <ul>
          <li><strong>Static Routing</strong>: Predefined routes with exact paths (e.g., <code>/home</code>)</li>
          <li><strong>Dynamic Routing</strong>: Routes that accept parameters (e.g., <code>/user/:id</code>)</li>
        </ul>

        <h3>Example of Route Parameters</h3>
        <pre style={{ background: '#222', padding: '1rem', borderRadius: '10px', color: '#0f0' }}>
{`app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(\`User ID requested: \${userId}\`);
});`}
        </pre>

        <h3>Route Grouping</h3>
        <p>Helps organize routes logically under a base path (e.g., <code>/api</code>).</p>
        <pre style={{ background: '#222', padding: '1rem', borderRadius: '10px', color: '#0f0' }}>
{`const userRouter = express.Router();

userRouter.get('/', ...);       // /api/users
userRouter.post('/', ...);      // /api/users

app.use('/api/users', userRouter);`}
        </pre>

        <h3>Middleware in Routing</h3>
        <p>You can apply middleware functions for specific routes or route groups.</p>
        <pre style={{ background: '#222', padding: '1rem', borderRadius: '10px', color: '#0f0' }}>
{`function isAuthenticated(req, res, next) {
  if (req.user) next();
  else res.status(401).send("Unauthorized");
}

app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send("Welcome to dashboard");
});`}
        </pre>

        <h2>2. RESTful API Design</h2>
        <ul>
          <li>Each HTTP method corresponds to a CRUD operation</li>
          <li>Clean, hierarchical endpoints</li>
          <li>Stateless requests and standardized responses</li>
        </ul>

        <h3>Standard REST Routes Example</h3>
        <ul>
          <li><code>GET /api/products</code> – List all products</li>
          <li><code>GET /api/products/1</code> – Get product by ID</li>
          <li><code>POST /api/products</code> – Create a new product</li>
          <li><code>PUT /api/products/1</code> – Update product</li>
          <li><code>DELETE /api/products/1</code> – Delete product</li>
        </ul>

        <h2>3. API Response Format</h2>
        <p>APIs usually return data in JSON format with a clear success/error structure.</p>
        <pre style={{ background: '#222', padding: '1rem', borderRadius: '10px', color: '#0f0' }}>
{`{
  "success": true,
  "data": {
    "id": 101,
    "name": "Wireless Keyboard",
    "price": 999
  }
}`}
        </pre>

        <h2>4. Error Handling with HTTP Status Codes</h2>
        <ul>
          <li><strong>200 OK</strong>: Success</li>
          <li><strong>201 Created</strong>: Resource created</li>
          <li><strong>400 Bad Request</strong>: Input validation failed</li>
          <li><strong>401 Unauthorized</strong>: User not logged in</li>
          <li><strong>404 Not Found</strong>: Resource doesn’t exist</li>
          <li><strong>500 Internal Server Error</strong>: Unexpected failure</li>
        </ul>

        <h2>5. Express.js Routing Example</h2>
        <p>This is a sample Express.js server demonstrating basic REST routes with inline explanation:</p>

        <pre style={{ background: '#222', padding: '1rem', borderRadius: '10px', color: '#0f0', overflowX: 'auto' }}>
{`const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON body

// GET all users
app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'Alice', email: 'alice@example.com' });
});

// POST a new user
app.post('/users', (req, res) => {
  const user = req.body;
  res.status(201).json({ message: 'User created', user });
});

// PUT (update) a user
app.put('/users/:id', (req, res) => {
  res.json({ message: 'User updated' });
});

// DELETE a user
app.delete('/users/:id', (req, res) => {
  res.json({ message: 'User deleted' });
});

app.listen(3000, () => console.log('Server running on port 3000'));`}
        </pre>
         <h2>Summary</h2>
        <ul>
          <li>Routing connects HTTP paths and methods to controller logic</li>
          <li>APIs use REST principles to expose functionality to clients</li>
          <li>Middleware adds modular features like auth, logging, validation</li>
          <li>Group routes for better structure and maintainability</li>
        </ul>

        <p style={{ marginTop: "2rem", fontStyle: "italic", color: "#ccc" }}>
          "Routing is how servers decide what to do with incoming requests."
        </p>
         {/* Back to Home Button */}
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
