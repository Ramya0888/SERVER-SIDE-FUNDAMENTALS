import React from "react";
import bgImage from "../assets/contents-bg.jpg";
import { useNavigate } from "react-router-dom";

export default function SecurityPerformance() {
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
      <div style={{
        maxWidth: "1200px",
        margin: "auto",
        background: "rgba(0,0,0,0.6)",
        borderRadius: "15px",
        padding: "2rem"
      }}>
        <h1 style={{ fontSize: "2.6rem", marginBottom: "1rem" }}>Security & Performance</h1>

        <h2>1. Authentication and Authorization</h2>
        <h3>Authentication</h3>
        <p><strong>Purpose:</strong> Confirms the identity of a user or system.</p>
        <p><strong>Common Methods:</strong></p>
        <ul>
          <li>Username & Password: Most basic form.</li>
          <li>OAuth 2.0: Delegated access using third-party providers (e.g., Google, Facebook).</li>
          <li>Multi-Factor Authentication (MFA): Adds extra layers like OTPs or biometrics.</li>
        </ul>

        <h3> Authorization</h3>
        <p><strong>Purpose:</strong> Determines what authenticated users are allowed to do.</p>
        <p><strong>Techniques:</strong></p>
        <ul>
          <li>Role-Based Access Control (RBAC): Access based on assigned roles (e.g., Admin, Editor).</li>
          <li>Attribute-Based Access Control (ABAC): Access based on attributes like department, time, or location.</li>
        </ul>

        <h2>2. Input Validation and Sanitization</h2>
        <h3>Why it matters</h3>
        <p>Prevents malicious data from entering your system.</p>
        <p><strong>Protects against attacks like:</strong></p>
        <ul>
          <li>SQL Injection (malicious SQL in input fields)</li>
          <li>Cross-Site Scripting (XSS) (scripts injected into webpages)</li>
        </ul>

        <h3>Practices</h3>
        <ul>
          <li>Whitelist validation: Only allow expected values.</li>
          <li>Sanitize inputs: Remove unwanted or dangerous characters.</li>
          <li>Use schemas: Validate data structures using tools like Joi, Zod, or Yup.</li>
        </ul>

        <h2>3. Caching for Performance</h2>
        <h3> What is Caching?</h3>
        <p>Temporarily storing copies of data to reduce response time and server load.</p>

        <h3> Types of Caching</h3>
        <ul>
          <li><strong>In-Memory Caching</strong> (e.g., Redis, Memcached): Store recent API responses, sessions, etc.</li>
          <li><strong>HTTP Caching</strong>: Uses headers like Cache-Control or ETag.</li>
          <li><strong>Page/Fragment Caching</strong>: Cache entire rendered pages or parts (e.g., navigation bars).</li>
        </ul>

        <h3>Benefits</h3>
        <ul>
          <li>Reduces repeated database hits</li>
          <li>Improves user experience with faster responses</li>
          <li>Lowers bandwidth and computational overhead</li>
        </ul>

        <h2>4. Content Delivery Networks (CDNs)</h2>
        <h3> Purpose</h3>
        <p>Deliver static assets (images, CSS, JS) from globally distributed servers.</p>

        <h3>Benefits</h3>
        <ul>
          <li>Faster load times regardless of user location</li>
          <li>Reduces origin server load</li>
          <li>Adds resilience (fallback nodes)</li>
        </ul>

        <h3> Examples</h3>
        <p>Cloudflare, Akamai, AWS CloudFront, Google Cloud CDN</p>

        <h2>5. Rate Limiting and Request Throttling</h2>
        <h3>Why Use It?</h3>
        <p>Protects against abuse, DoS attacks, and excessive API usage.</p>

        <h3> Rate Limiting</h3>
        <p>Restricts how many requests a client can make in a time window. Example: 100 requests per minute per user.</p>

        <h3> Request Throttling</h3>
        <p>Delays excessive requests rather than blocking them. Useful for controlling burst traffic without dropping connections.</p>

        <h3>Tools/Techniques</h3>
        <ul>
          <li>IP-based rate limiters (e.g., express-rate-limit in Node.js)</li>
          <li>Implement logic at load balancers or API gateways (e.g., AWS API Gateway, NGINX)</li>
        </ul>

        <h2>6. Performance Optimization Strategies</h2>
        <h3> Code Efficiency</h3>
        <ul>
          <li>Avoid unnecessary loops or large synchronous operations.</li>
          <li>Use asynchronous I/O for non-blocking requests.</li>
        </ul>

        <h3> Lazy Loading</h3>
        <p>Load only required modules or data instead of entire files or components.</p>

        <h3> Database Optimization</h3>
        <ul>
          <li>Add indexes on frequently queried fields.</li>
          <li>Use efficient queries (avoid SELECT * when not needed).</li>
          <li>Use database connection pooling.</li>
        </ul>

        <h3>Compression</h3>
        <p>Compress responses using Gzip or Brotli. This minifies response payloads and speeds up transmission.</p>

        <h2>7. Secure Communication</h2>
        <h3> HTTPS Everywhere</h3>
        <p>Always use SSL/TLS to encrypt data in transit. Prevents man-in-the-middle attacks and data leaks.</p>

        <h3>Secure Headers</h3>
        <ul>
          <li>Content-Security-Policy</li>
          <li>Strict-Transport-Security</li>
          <li>X-Frame-Options</li>
        </ul>

        <h2>8. Monitoring and Logging</h2>
        <h3> Monitoring Tools</h3>
        <p>Use tools like New Relic, Datadog, Prometheus, or Grafana to monitor:</p>
        <ul>
          <li>Latency</li>
          <li>Throughput</li>
          <li>Error rates</li>
        </ul>

        <h3> Logging</h3>
        <p>Centralize logs using tools like ELK Stack, Winston, or Logstash. Log:</p>
        <ul>
          <li>Errors</li>
          <li>Authentication events</li>
          <li>Database query times</li>
        </ul>

        <h2>9. Server Hardening & Secure Deployment</h2>
        <h3> Server-Level Security</h3>
        <ul>
          <li>Disable unused ports and services</li>
          <li>Keep systems and libraries up-to-date</li>
          <li>Use firewalls and security groups</li>
        </ul>

        <h3> Environment Separation</h3>
        <ul>
          <li>Use different environments for development, staging, and production</li>
          <li>Ensure production data and credentials are never exposed in development</li>
        </ul>

        <p style={{ marginTop: "2rem", fontStyle: "italic", color: "#ccc" }}>
          "Security and performance are not features, they are foundations of a successful system."
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
