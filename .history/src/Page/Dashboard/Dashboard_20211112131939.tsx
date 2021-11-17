import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Dashboard()
{
    return (<>
        <h1>Dashboard</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </>);
}