import React from "react";
import bgImage from "../assets/contents-bg.jpg";
import { useNavigate } from "react-router-dom";

export default function DatabasePage() {
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
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          background: "rgba(0,0,0,0.6)",
          borderRadius: "15px",
          padding: "2rem"
        }}
      >
        <h1 style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>Databases</h1>

        <h2>1. What is a Database?</h2>
        <p>
          A database is a structured collection of data that is stored electronically. It allows for efficient storage, retrieval, and manipulation of information using software called Database Management Systems (DBMS).
        </p>

        <h2>2. Types of Databases</h2>
        <h3>Relational Databases: (SQL)</h3>
        <p>Relational databases store data in structured tables with rows and columns. They use SQL (Structured Query Language) to interact with the data.</p>
        <p>Popular Relational Databases:</p>
        <ul>
          <li>MySQL: Open-source and widely used.</li>
          <li>PostgreSQL: Powerful, standards-compliant, and supports complex queries.</li>
          <li>SQLite: Lightweight and embedded.</li>
          <li>Oracle Database: Enterprise-level features and scalability.</li>
        </ul>

        <h3> NoSQL Databases:</h3>
        <p>NoSQL databases handle unstructured, semi-structured, or large-scale data. They do not use traditional table-based schemas.</p>
        <p>Common Types:</p>
        <ul>
          <li>Document Stores (MongoDB):Data is stored as JSON-like documents.</li>
          <li>Key-Value Stores (Redis): High-performance stores for caching and session data.</li>
          <li>Column Stores (Cassandra): Optimized for large-scale analytics.</li>
          <li>Graph Databases (Neo4j):Store relationships using nodes and edges.</li>
        </ul>

        <h2>3. Connecting to Databases</h2>
        <p>Servers use libraries, drivers, or ORMs (Object Relational Mappers) to interact with databases.
</p>
        <h4>MongoDB (Mongoose)</h4>
        <pre>{`const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Connection failed", err));`}</pre>

        <h4>MySQL (mysql2)</h4>
        <pre>{`const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'app_db'
});
connection.connect();`}</pre>

        <h2>4. Database Relationships</h2>
        <h3>a. One-to-One</h3>
        <p>Each record in a table is linked to one in another.

</p>
        <p>Example: A user has one profile.</p>
        <pre>{`-- SQL
CREATE TABLE Users (id INT PRIMARY KEY);
CREATE TABLE Profiles (id INT PRIMARY KEY, user_id INT UNIQUE, FOREIGN KEY(user_id) REFERENCES Users(id));`}</pre>
        <pre>{`// MongoDB
const user = await db.collection('users').insertOne({ name: 'Alice' });
await db.collection('profiles').insertOne({ userId: user.insertedId, bio: 'Hello!' });`}</pre>

        <h3>b. One-to-Many</h3>
        <p>One record in a table can be linked to many in another.</p>
        <p>Example: A user can have many posts.</p>
        <pre>{`-- SQL
CREATE TABLE Users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);
CREATE TABLE Posts (
  id INT PRIMARY KEY,
  user_id INT,
  title VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES Users(id)
);`}</pre>
        <pre>{`// MongoDB
await db.collection('posts').insertMany([
  { userId: user._id, title: 'Post 1' },
  { userId: user._id, title: 'Post 2' }
]);`}</pre>

        <h3>c. Many-to-Many</h3>
        <p>Records in one table can relate to many in another and vice versa.</p>
        <p>Example: Students and Courses</p>
        <pre>{`-- SQL
CREATE TABLE Students (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);
CREATE TABLE Courses (
  id INT PRIMARY KEY,
  title VARCHAR(100)
);
CREATE TABLE StudentCourse (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES Students(id),
  FOREIGN KEY (course_id) REFERENCES Courses(id)
);`}</pre>
        <pre>{`// MongoDB
await db.collection('student_course').insertOne({ studentId, courseId });`}</pre>

        <h2>5. Schema Design</h2>
        <ul>
          <li>Normalization: Reduce redundancy</li>
          <li>Denormalization: Improve performance with redundancy</li>
          <li>Data types and constraints</li>
        </ul>

        <h2>6. Indexing</h2>
        <p>Indexes improve query speed by reducing the amount of data scanned.</p>

<p>Primary Index: Based on the primary key.</p>

<p>Secondary Index: Created on frequently queried columns.</p>

<p>Full-text Index: Supports fast text searching.</p>

<p>Without indexes: SELECT queries scan entire tables.</p>
<p>With indexes: They directly locate matching rows.Example:</p>
        <pre>{`-- SQL
CREATE INDEX idx_user_email ON users(email);`}</pre>
        <pre>{`// MongoDB
db.users.createIndex({ email: 1 });`}</pre>

        <h2>7. Transactions</h2>
        <p>A transaction is a group of one or more operations treated as a single unit.</p>
        <p>Follows ACID properties:</p>
        <p>Atomicity: All steps succeed or none do.
</p>
<p>Consistency: Database remains valid.</p>
<p>Isolation: Transactions don’t interfere with each other.</p>
<p>Durability: Once committed, changes persist even after crashes.</p>
        <h4>SQL</h4>
        <pre>{`BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;`}</pre>
        <h4>MongoDB</h4>
        <pre>{`const session = await mongoose.startSession();
session.startTransaction();
try {
  await User.updateOne(..., { session });
  await Order.updateOne(..., { session });
  await session.commitTransaction();
} catch (err) {
  await session.abortTransaction();
}`}</pre>

        <h2>8. CRUD Operations</h2>
        <p>CRUD stands for Create, Read, Update, Delete — the four basic operations for managing data.</p>
        <pre>{`-- SQL
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
SELECT * FROM users;
UPDATE users SET email = 'new@example.com' WHERE id = 1;
DELETE FROM users WHERE id = 1;`}</pre>
        <pre>{`// MongoDB
db.users.insertOne({ name: 'Alice', email: 'alice@example.com' });
db.users.find();
db.users.updateOne({ _id: 1 }, { $set: { email: 'new@example.com' } });
db.users.deleteOne({ _id: 1 });`}</pre>

        <h2>9. ORMs and ODMs</h2>
        <p>ORMs (Object-Relational Mappers) and ODMs (Object-Document Mappers) simplify database operations by representing tables/collections as JavaScript/TypeScript/Python objects.</p>

<p>Popular Libraries:</p>
        <ul>
          <li>Sequelize, Prisma, TypeORM (SQL)</li>
          <li>Mongoose (MongoDB)</li>
        </ul>
        <pre>{`// Sequelize
const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING
});
User.findAll();`}</pre>
        <pre>{`// Mongoose
const User = mongoose.model('User', new Schema({ name: String, email: String }));
User.find();`}</pre>

        <h2>10. Query Optimization</h2>
        <ul>
          <li>Use indexes</li>
          <li>Select only needed columns</li>
          <li>Use EXPLAIN for query analysis</li>
        </ul>

        <h2>11. Backup and Replication</h2>
        <ul>
          <li>Backup: Creating periodic copies of the database to avoid data loss</li>
          <li>Replication: Maintaining copies of the database across multiple servers for availability and fault tolerance.
</li>
        </ul>

        <h2>12. Stored Procedures & Triggers</h2>
        <p>Stored Procedures
Reusable SQL code that can be called by apps or other queries.</p>
<p>Triggers
SQL code that automatically runs in response to a table event (e.g., insert/update).</p>
        <pre>{`-- Stored Procedure
CREATE PROCEDURE GetAllUsers()
BEGIN
  SELECT * FROM Users;
END;`}</pre>

        <h2>13. Security in Databases</h2>
        <ul>
          <li>Role-based access control</li>
          <li>Encrypted connections (TLS)</li>
          <li>SQL injection protection (e.g., parameterized queries)</li>
        </ul>

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
