import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Dashboard()
{
    return (<>
        <h1>Dashboard</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard/users" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </>);
}