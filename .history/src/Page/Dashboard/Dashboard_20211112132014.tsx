import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Dashboard()
{
    return (<>
        <h1>Dashboard</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/classes" element={<Classes />} />
          </Routes>
        </BrowserRouter>
      </>);
}

function Users()
{
    return <h2>Users</h2>
}