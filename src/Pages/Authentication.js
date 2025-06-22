import React from "react";
import bgImage from "../assets/contents-bg.jpg";
import { useNavigate } from "react-router-dom";

export default function Authentication() {
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
        <h1 style={{ fontSize: "2.6rem", marginBottom: "1rem" }}>Authentication</h1>

        <h2>1. What is Authentication?</h2>
        <p>
          Authentication is the process of verifying <strong>who</strong> a user or system is. It ensures that the entity trying to access a system is actually who it claims to be. It's the first step in access control and usually precedes authorization, which determines what actions the user is permitted to take.
        </p>

        <h2>2. Common Types of Authentication</h2>

        <h3>A. Username and Password</h3>
        <p>The most basic and widely used method. Credentials are submitted and compared to stored (usually hashed) records.</p>
        <ul>
          <li>Susceptible to brute-force attacks, phishing, and data leaks.</li>
          <li>Users often reuse passwords.</li>
        </ul>
        <p><strong>Best Practices:</strong></p>
        <ul>
          <li>Enforce strong password policies.</li>
          <li>Use hashing algorithms (bcrypt, Argon2) to store passwords.</li>
          <li>Implement account lockout after repeated failed attempts.</li>
        </ul>

        <h3>B. Multi-Factor Authentication (MFA)</h3>
        <p>MFA requires users to provide two or more verification factors to gain access:</p>
        <ul>
          <li>Something you know – Password or PIN</li>
          <li>Something you have – Phone, security token, smart card</li>
          <li>Something you are – Biometrics (fingerprint, retina)</li>
        </ul>
        <p><strong>Common MFA methods:</strong></p>
        <ul>
          <li>OTP (One-Time Passwords) via SMS, email, or authenticator apps (TOTP)</li>
          <li>Push notification approval (e.g., Duo, Authy)</li>
          <li>Hardware tokens (e.g., YubiKey)</li>
        </ul>

        <h3>C. OAuth 2.0</h3>
        <p>OAuth 2.0 is an open standard for delegated authorization, often used to log in users via third-party providers like Google, Facebook, GitHub.</p>
        <p><strong>Roles in OAuth:</strong></p>
        <ul>
          <li>Resource Owner: User</li>
          <li>Client: Application requesting access</li>
          <li>Authorization Server: Issues tokens (e.g., Google)</li>
          <li>Resource Server: Holds the user data (e.g., Google APIs)</li>
        </ul>
        <p><strong>Flow (Authorization Code Grant):</strong></p>
        <ol>
          <li>User is redirected to the provider's login screen.</li>
          <li>Upon login, the provider sends an authorization code to the app.</li>
          <li>The app exchanges the code for an access token.</li>
          <li>The token is used to access APIs on behalf of the user.</li>
        </ol>

        <h3>D. Token-Based Authentication (e.g., JWT)</h3>
        <p>Instead of storing sessions on the server, a JSON Web Token (JWT) is generated and sent to the client after login.</p>
        <ul>
          <li>Token contains encoded user data and a signature.</li>
          <li>Sent in headers for each request (Authorization: Bearer &lt;token&gt;).</li>
          <li>The server verifies the token signature using a secret key or public/private key pair.</li>
        </ul>
        <p><strong>Advantages:</strong> Stateless, scalable, usable across services.</p>
        <p><strong>Downsides:</strong> Hard to revoke, can be vulnerable if stored improperly.</p>

        <h3>E. Biometric Authentication</h3>
        <p>Uses physical characteristics of the user (e.g., Fingerprint, Face ID, Iris scan, Voice recognition).</p>

        <h2>3. Session-Based vs. Token-Based Authentication</h2>
        <table style={{ width: "100%", marginBottom: "1rem", borderCollapse: "collapse", background: "#333" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #555", padding: "0.5rem" }}>Feature</th>
              <th style={{ border: "1px solid #555", padding: "0.5rem" }}>Session-Based</th>
              <th style={{ border: "1px solid #555", padding: "0.5rem" }}>Token-Based (JWT)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #555", padding: "0.5rem" }}>Server stores session?</td>
              <td>Yes</td>
              <td>No (Stateless)</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #555", padding: "0.5rem" }}>Scalability</td>
              <td>Limited</td>
              <td>High</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #555", padding: "0.5rem" }}>Token storage</td>
              <td>Cookie</td>
              <td>Header/Storage</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #555", padding: "0.5rem" }}>Revocation</td>
              <td>Easy</td>
              <td>Hard without extra logic</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #555", padding: "0.5rem" }}>Use in SPAs</td>
              <td>Less ideal</td>
              <td>Preferred</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Common Authentication Flows</h2>

        <h3>A. Login Flow</h3>
        <ol>
          <li>User submits credentials.</li>
          <li>Backend verifies credentials.</li>
          <li>If valid: For sessions – create session, send cookie. For tokens – generate JWT and send to client.</li>
        </ol>

        <h3>B. Refresh Token Flow</h3>
        <ul>
          <li>Used when access tokens expire.</li>
          <li>Access token: Short-lived (e.g., 15 min)</li>
          <li>Refresh token: Long-lived (e.g., 30 days)</li>
          <li>Client uses refresh token to obtain a new access token without login again.</li>
        </ul>

        <h2>5. Authentication Best Practices</h2>
        <ul>
          <li>Use HTTPS always</li>
          <li>Store passwords securely (hashing with salt)</li>
          <li>Rate-limit login attempts</li>
          <li>Log authentication events</li>
          <li>Re-authenticate before sensitive actions</li>
        </ul>

        <h2>6. Authentication Libraries & Tools</h2>
        <h4>Backend</h4>
        <ul>
          <li>Passport.js (Node.js)</li>
          <li>Devise (Ruby on Rails)</li>
          <li>Spring Security (Java/Spring)</li>
          <li>Auth0, Firebase Auth (Auth as a Service)</li>
        </ul>

        <h4>Frontend</h4>
        <ul>
          <li>NextAuth.js</li>
          <li>React Firebase Auth</li>
          <li>OpenID Connect</li>
        </ul>

        <h2>7. Common Authentication Errors & Fixes</h2>
        <table style={{ width: "100%", marginBottom: "1rem", borderCollapse: "collapse", background: "#333" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #555", padding: "0.5rem" }}>Error</th>
              <th style={{ border: "1px solid #555", padding: "0.5rem" }}>Description</th>
              <th style={{ border: "1px solid #555", padding: "0.5rem" }}>Solution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #555", padding: "0.5rem" }}>401 Unauthorized</td>
              <td>User not authenticated</td>
              <td>Require login, check token/session</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #555", padding: "0.5rem" }}>403 Forbidden</td>
              <td>Authenticated but not authorized</td>
              <td>Add role/permission check</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #555", padding: "0.5rem" }}>Token expired</td>
              <td>Access token TTL exceeded</td>
              <td>Implement refresh token flow</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #555", padding: "0.5rem" }}>CSRF attacks</td>
              <td>Exploits session-based auth via cookies</td>
              <td>Use CSRF tokens or SameSite cookies</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "2rem", fontStyle: "italic", color: "#ccc" }}>
          "Authentication is the gateway to security – protect it well."
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
