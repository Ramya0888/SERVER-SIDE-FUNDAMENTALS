import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

// Import topic pages (you can create them next)
import ServerSide from "./Pages/ServerSide";
import HttpPage from "./Pages/HttpPage";
import ApiRouting from "./Pages/ApiRouting";
import Databases from "./Pages/Databases";
import Security from "./Pages/Security";
import Authentication from "./Pages/Authentication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/server-side" element={<ServerSide />} />
      <Route path="/http" element={<HttpPage />} />
      <Route path="/api-routing" element={<ApiRouting />} />
      <Route path="/databases" element={<Databases />} />
      <Route path="/security" element={<Security />} />
      <Route path="/authentication" element={<Authentication />} />
    </Routes>
  );
}

export default App;
