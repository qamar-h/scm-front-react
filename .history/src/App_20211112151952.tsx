import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Dashboard from "./Page/Dashboard/Dashboard";
import Login from "./Page/Login/Login";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/classes" element={<Classes />} />
        </Routes>
      </BrowserRouter>
    );
}
