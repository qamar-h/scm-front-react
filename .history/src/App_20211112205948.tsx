import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Page/Dashboard/Dashboard";
import Login from "./Page/Login/Login";
import Classe from "./Page/Dashboard/Classe/Classe";
import User from "./Page/Dashboard/User/User";
import { useLocation } from 'react-router-dom'

export default function App() {

    const location = useLocation();

    console.log(location);
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/users" element={<User />} />
          <Route path="/dashboard/classes" element={<Classe />} />
        </Routes>
      </BrowserRouter>
    );
}
