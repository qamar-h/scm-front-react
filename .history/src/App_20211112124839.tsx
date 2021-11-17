import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Home />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    );
  }

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
