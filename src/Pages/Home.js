import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const topics = [
  {
    id: 1,
    title: "What is Server-Side?",
    description: "Understand client-server roles.",
    details: "Operations handled by the server in response to client requests.",
    link: "/server-side",
  },
  {
    id: 2,
    title: "HTTP Request/Response",
    description: "Client-server communication explained.",
    details: "Describes how requests are sent and responses are received.",
    link: "/http",
  },
  {
    id: 3,
    title: "APIs and Routing",
    description: "How servers expose routes.",
    details: "APIs define endpoints, and routes decide how to respond.",
    link: "/api-routing",
  },
  {
    id: 4,
    title: "Databases",
    description: "Storage and retrieval of backend data.",
    details: "Manages persistent data storage and querying.",
    link: "/databases",
  },
  {
    id: 5,
    title: "Security & Performance",
    description: "Server hardening and efficiency.",
    details: "Covers authentication, rate-limiting, and caching.",
    link: "/security",
  },
  {
    id: 6,
    title: "Authentication",
    description: "User verification and access control.",
    details: "Ensures secure access to server resources.",
    link: "/authentication",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = topics.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>Server-Side Engineering Fundamentals</h1>
        <p>
          Server-side engineering powers the backend of the web. It includes handling HTTP requests, building APIs,
          connecting to databases, and ensuring performance and security.
        </p>
        <h3>Flip each card to learn more about each topic:</h3>

        <input
          className="search-bar"
          placeholder="Search a topic..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="card-container">
        {filtered.map((topic) => (
          <div
            key={topic.id}
            className="flip-card"
            onClick={() => navigate(topic.link)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>{topic.id}. {topic.title}</h3>
                <p>{topic.description}</p>
              </div>
              <div className="flip-card-back">
                <p>{topic.details}</p>
                <span className="click-hint">Click to explore</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer>Project by Ramya.S, © 2025</footer>
    </div>
  );
}
